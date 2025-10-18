import requests
import json
import os
from typing import List, Dict
import time
from dotenv import load_dotenv

# ============ LOAD VERCEL ENVIRONMENT ============
# Load .env.local for local development (Cursor)
load_dotenv('.env.local')

# Get Cloudflare credentials from Vercel env vars
CF_API_TOKEN = os.getenv('CLOUDFLARE_API_TOKEN') or os.getenv('CF_API_TOKEN')
CF_API_KEY = os.getenv('CLOUDFLARE_API_KEY') or os.getenv('CF_API_KEY')
CF_EMAIL = os.getenv('CLOUDFLARE_EMAIL') or os.getenv('CF_EMAIL')
CF_ACCOUNT_ID = os.getenv('CLOUDFLARE_ACCOUNT_ID') or os.getenv('CF_ACCOUNT_ID')

# DMARC Configuration
DMARC_EMAIL = "DrJanSells@ReverenceSummerlinHomes.com"  # Updated for Dr. Janet Duffy

# ============ DMARC POLICY STAGES ============
# Uncomment the stage you want to use:

# Stage 1: Monitor Only (START HERE - Week 1-2)
DMARC_POLICY = f"v=DMARC1; p=none; rua=mailto:{DMARC_EMAIL}; ruf=mailto:{DMARC_EMAIL}; fo=1"

# Stage 2: Quarantine 25% (Week 3-4)
# DMARC_POLICY = f"v=DMARC1; p=quarantine; pct=25; rua=mailto:{DMARC_EMAIL}; sp=quarantine"

# Stage 3: Quarantine 50% (Week 5-6)
# DMARC_POLICY = f"v=DMARC1; p=quarantine; pct=50; rua=mailto:{DMARC_EMAIL}; sp=quarantine"

# Stage 4: Full Reject (Week 7+)
# DMARC_POLICY = f"v=DMARC1; p=reject; rua=mailto:{DMARC_EMAIL}; sp=reject; aspf=r; adkim=r"

# ============ SCRIPT CONFIGURATION ============
BASE_URL = "https://api.cloudflare.com/client/v4"

def get_headers():
    """Build headers based on available credentials"""
    if CF_API_TOKEN:
        return {
            "Authorization": f"Bearer {CF_API_TOKEN}",
            "Content-Type": "application/json"
        }
    elif CF_EMAIL and CF_API_KEY:
        return {
            "X-Auth-Email": CF_EMAIL,
            "X-Auth-Key": CF_API_KEY,
            "Content-Type": "application/json"
        }
    else:
        raise ValueError("No valid Cloudflare credentials found!")

def verify_credentials():
    """Verify Cloudflare credentials are working"""
    print("Checking Cloudflare credentials...")
    
    if not CF_API_TOKEN and not CF_EMAIL:
        print("ERROR: No Cloudflare credentials found in environment variables!")
        print("\nLooking for these variables:")
        print("   • CLOUDFLARE_API_TOKEN or CF_API_TOKEN (API Token)")
        print("   • CLOUDFLARE_API_KEY or CF_API_KEY (Global API Key)")
        print("   • CLOUDFLARE_EMAIL or CF_EMAIL (required for API Key)")
        print("\nTo fix:")
        print("   1. Create .env.local file in project root")
        print("   2. Add: CLOUDFLARE_API_TOKEN=your_token_here")
        print("   OR")
        print("   3. Add: CLOUDFLARE_API_KEY=your_key_here")
        print("   4. Add: CLOUDFLARE_EMAIL=your_email@example.com")
        print("   OR")
        print("   5. Pull from Vercel: vercel env pull .env.local")
        return False
    
    headers = get_headers()
    response = requests.get(f"{BASE_URL}/user/tokens/verify", headers=headers)
    
    if response.status_code == 200:
        print("SUCCESS: Credentials verified successfully!")
        return True
    else:
        print(f"ERROR: Credential verification failed: {response.status_code}")
        print(f"   Response: {response.text}")
        return False

def get_all_zones() -> List[Dict]:
    """Fetch all zones (domains) from your Cloudflare account"""
    zones = []
    page = 1
    headers = get_headers()
    
    while True:
        params = {"page": page, "per_page": 50}
        if CF_ACCOUNT_ID:
            params["account.id"] = CF_ACCOUNT_ID
            
        response = requests.get(
            f"{BASE_URL}/zones",
            headers=headers,
            params=params
        )
        
        if response.status_code != 200:
            print(f"ERROR: Error fetching zones: {response.text}")
            break
            
        data = response.json()
        if not data.get("success"):
            print(f"ERROR: API Error: {data.get('errors', 'Unknown error')}")
            break
            
        zones.extend(data["result"])
        
        if page >= data["result_info"]["total_pages"]:
            break
        page += 1
    
    return zones

def check_existing_dmarc(zone_id: str, zone_name: str) -> Dict:
    """Check if DMARC record already exists"""
    headers = get_headers()
    response = requests.get(
        f"{BASE_URL}/zones/{zone_id}/dns_records",
        headers=headers,
        params={
            "type": "TXT",
            "name": f"_dmarc.{zone_name}"
        }
    )
    
    if response.status_code == 200:
        data = response.json()
        if data["success"] and data["result"]:
            for record in data["result"]:
                if "_dmarc" in record["name"]:
                    return record
    return None

def update_dmarc_record(zone_id: str, record_id: str, zone_name: str) -> bool:
    """Update existing DMARC record"""
    headers = get_headers()
    response = requests.put(
        f"{BASE_URL}/zones/{zone_id}/dns_records/{record_id}",
        headers=headers,
        json={
            "type": "TXT",
            "name": f"_dmarc.{zone_name}",
            "content": DMARC_POLICY,
            "ttl": 1  # Auto TTL
        }
    )
    
    return response.status_code == 200 and response.json().get("success", False)

def create_dmarc_record(zone_id: str, zone_name: str) -> bool:
    """Create new DMARC record"""
    headers = get_headers()
    response = requests.post(
        f"{BASE_URL}/zones/{zone_id}/dns_records",
        headers=headers,
        json={
            "type": "TXT",
            "name": "_dmarc",
            "content": DMARC_POLICY,
            "ttl": 1  # Auto TTL
        }
    )
    
    return response.status_code == 200 and response.json().get("success", False)

def main():
    """Main execution function"""
    print("\nCloudflare DMARC Bulk Updater for Dr. Janet Duffy Real Estate")
    print("=" * 70)
    
    # Verify credentials first
    if not verify_credentials():
        print("\nQuick Fix Options:")
        print("   A) Run: vercel env pull .env.local")
        print("   B) Copy from Vercel dashboard -> Settings -> Environment Variables")
        print("   C) Create .env.local manually with your API token")
        return
    
    print(f"\nDMARC Reports will go to: {DMARC_EMAIL}")
    print(f"Policy to apply: {DMARC_POLICY[:60]}...")
    print("=" * 70)
    
    # Get all zones
    print("\nFetching all domains from Cloudflare...")
    zones = get_all_zones()
    
    if not zones:
        print("ERROR: No zones found!")
        print("   Check if your API token has Zone:Read and DNS:Edit permissions")
        return
    
    print(f"SUCCESS: Found {len(zones)} domains\n")
    
    # Show domains that will be updated
    print("Domains to update:")
    for i, zone in enumerate(zones, 1):
        status = zone.get("status", "active")
        print(f"   {i}. {zone['name']} ({status})")
    
    # Show current policy stage
    print("\nCurrent Policy Stage:")
    if "p=none" in DMARC_POLICY:
        print("   MONITOR MODE - No emails will be blocked")
        print("   Safe to apply to all domains")
    elif "p=quarantine" in DMARC_POLICY:
        print("   QUARANTINE MODE - Some emails may go to spam")
        print("   Make sure SPF/DKIM are properly configured first")
    elif "p=reject" in DMARC_POLICY:
        print("   REJECT MODE - Non-compliant emails will be blocked")
        print("   Only use after monitoring reports for 2+ weeks")
    
    # Confirmation
    confirm = input("\nProceed with DMARC update for all domains? (yes/no): ")
    if confirm.lower() != "yes":
        print("Update cancelled")
        return
    
    print("\nStarting updates...\n")
    
    # Process each zone
    updated = 0
    created = 0
    failed = 0
    failed_domains = []
    
    for zone in zones:
        zone_id = zone["id"]
        zone_name = zone["name"]
        
        print(f"Processing {zone_name}...", end=" ")
        
        # Check for existing DMARC
        existing = check_existing_dmarc(zone_id, zone_name)
        
        try:
            if existing:
                # Update existing record
                if update_dmarc_record(zone_id, existing["id"], zone_name):
                    print("SUCCESS: Updated")
                    updated += 1
                else:
                    print("ERROR: Failed to update")
                    failed += 1
                    failed_domains.append(zone_name)
            else:
                # Create new record
                if create_dmarc_record(zone_id, zone_name):
                    print("SUCCESS: Created")
                    created += 1
                else:
                    print("ERROR: Failed to create")
                    failed += 1
                    failed_domains.append(zone_name)
        except Exception as e:
            print(f"ERROR: {str(e)}")
            failed += 1
            failed_domains.append(zone_name)
        
        # Small delay to avoid rate limiting
        time.sleep(0.5)
    
    # Summary
    print("\n" + "=" * 70)
    print("DMARC Update Summary:")
    print(f"   Created: {created} new records")
    print(f"   Updated: {updated} existing records")
    print(f"   Failed: {failed} domains")
    print(f"   Total Success: {created + updated}/{len(zones)}")
    
    if failed_domains:
        print(f"\nFailed domains:")
        for domain in failed_domains:
            print(f"   • {domain}")
    
    print("=" * 70)
    
    if created + updated > 0:
        print("\nSUCCESS: DMARC policies successfully applied!")
        print(f"DMARC reports will be sent to: {DMARC_EMAIL}")
        print("\nNext Steps:")
        print("1. Monitor reports for 1-2 weeks at", DMARC_EMAIL)
        print("2. Check email deliverability stays strong")
        print("3. Move to Stage 2 (quarantine 25%) after monitoring")
        print("4. Gradually increase to full protection")
        print("\nPro Tip: Use DMARC analyzer tools to interpret reports easily")
        print("\nTesting Tools:")
        print("   • DMARC Check: https://mxtoolbox.com/dmarc.aspx")
        print("   • SPF Check: https://mxtoolbox.com/spf.aspx")
        print("   • DNS Lookup: dig TXT _dmarc.reverencesummerlinhomes.com")

if __name__ == "__main__":
    main()