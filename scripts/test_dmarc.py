#!/usr/bin/env python3
"""
Cloudflare DMARC Test Script
Quick test to verify credentials and show current DNS setup
"""

import requests
import os
from dotenv import load_dotenv

# Load environment
load_dotenv('.env.local')

# Get credentials
CF_API_TOKEN = os.getenv('CLOUDFLARE_API_TOKEN')
CF_API_KEY = os.getenv('CLOUDFLARE_API_KEY')
CF_EMAIL = os.getenv('CLOUDFLARE_EMAIL')

def test_credentials():
    """Test if Cloudflare credentials are working"""
    print("Testing Cloudflare credentials...")
    
    if not CF_API_TOKEN and not CF_EMAIL:
        print("ERROR: No Cloudflare credentials found!")
        print("Add CLOUDFLARE_API_TOKEN to .env.local file")
        print("OR add CLOUDFLARE_API_KEY and CLOUDFLARE_EMAIL")
        return False
    
    if CF_API_TOKEN:
        headers = {
            "Authorization": f"Bearer {CF_API_TOKEN}",
            "Content-Type": "application/json"
        }
    else:
        headers = {
            "X-Auth-Email": CF_EMAIL,
            "X-Auth-Key": CF_API_KEY,
            "Content-Type": "application/json"
        }
    
    response = requests.get("https://api.cloudflare.com/client/v4/user/tokens/verify", headers=headers)
    
    if response.status_code == 200:
        print("SUCCESS: Credentials verified!")
        return True
    else:
        print(f"ERROR: Credential test failed: {response.status_code}")
        print(f"Response: {response.text}")
        return False

def show_domains():
    """Show all domains in Cloudflare account"""
    print("\nFetching domains...")
    
    if CF_API_TOKEN:
        headers = {
            "Authorization": f"Bearer {CF_API_TOKEN}",
            "Content-Type": "application/json"
        }
    else:
        headers = {
            "X-Auth-Email": CF_EMAIL,
            "X-Auth-Key": CF_API_KEY,
            "Content-Type": "application/json"
        }
    
    response = requests.get("https://api.cloudflare.com/client/v4/zones", headers=headers)
    
    if response.status_code == 200:
        data = response.json()
        if data.get("success"):
            zones = data["result"]
            print(f"Found {len(zones)} domains:")
            for zone in zones:
                status = zone.get("status", "unknown")
                print(f"  • {zone['name']} ({status})")
            return zones
        else:
            print(f"API Error: {data.get('errors')}")
    else:
        print(f"Request failed: {response.status_code}")
    
    return []

def check_dmarc(zone_name):
    """Check if DMARC record exists for a domain"""
    print(f"\nChecking DMARC for {zone_name}...")
    
    if CF_API_TOKEN:
        headers = {
            "Authorization": f"Bearer {CF_API_TOKEN}",
            "Content-Type": "application/json"
        }
    else:
        headers = {
            "X-Auth-Email": CF_EMAIL,
            "X-Auth-Key": CF_API_KEY,
            "Content-Type": "application/json"
        }
    
    # Get zone ID first
    zone_response = requests.get(f"https://api.cloudflare.com/client/v4/zones?name={zone_name}", headers=headers)
    if zone_response.status_code != 200:
        print(f"ERROR: Could not find zone {zone_name}")
        return False
    
    zone_data = zone_response.json()
    if not zone_data.get("success") or not zone_data["result"]:
        print(f"ERROR: Zone {zone_name} not found")
        return False
    
    zone_id = zone_data["result"][0]["id"]
    
    # Check for DMARC record
    dmarc_response = requests.get(
        f"https://api.cloudflare.com/client/v4/zones/{zone_id}/dns_records",
        headers=headers,
        params={"type": "TXT", "name": f"_dmarc.{zone_name}"}
    )
    
    if dmarc_response.status_code == 200:
        dmarc_data = dmarc_response.json()
        if dmarc_data.get("success"):
            records = dmarc_data["result"]
            if records:
                print(f"SUCCESS: DMARC record exists for {zone_name}")
                for record in records:
                    print(f"  Content: {record['content']}")
                return True
            else:
                print(f"INFO: No DMARC record found for {zone_name}")
                return False
        else:
            print(f"ERROR: {dmarc_data.get('errors')}")
    
    return False

def main():
    print("Cloudflare DMARC Test Script")
    print("=" * 40)
    
    # Test credentials
    if not test_credentials():
        return
    
    # Show domains
    zones = show_domains()
    if not zones:
        return
    
    # Check DMARC for each domain
    for zone in zones:
        check_dmarc(zone["name"])
    
    print("\n" + "=" * 40)
    print("Test complete!")
    print("\nNext steps:")
    print("1. If no DMARC records found, run: python scripts/dmarc_updater.py")
    print("2. Monitor DMARC reports at DrJanSells@ReverenceSummerlinHomes.com")
    print("3. Use online tools to verify setup")

if __name__ == "__main__":
    main()
