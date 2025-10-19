# DMARC Automation Scripts

This directory contains Python scripts for automating DMARC policy management across Cloudflare domains.

## Scripts Overview

### dmarc_updater.py
Main script for creating and updating DMARC records across all domains in your Cloudflare account.

**Features:**
- Automated DMARC record creation/updates
- Support for multiple domains
- Gradual enforcement stages
- Detailed reporting
- Error handling and rollback capability

## Setup Instructions

### 1. Install Python Dependencies
```bash
pip install requests python-dotenv
```

### 2. Set Up Environment Variables

#### Option A: Pull from Vercel (Recommended)
```bash
vercel env pull .env.local
```

#### Option B: Manual Setup
Create `.env.local` file in project root:
```bash
CLOUDFLARE_API_TOKEN=your_api_token_here
CLOUDFLARE_EMAIL=your_email@example.com
CLOUDFLARE_ACCOUNT_ID=your_account_id_here
```

### 3. Configure DMARC Settings

Edit `dmarc_updater.py` to set your DMARC configuration:

```python
# DMARC Configuration
DMARC_EMAIL = "DrJanSells@ReverenceSummerlinHomes.com"  # Your email for reports

# Choose your enforcement stage:
# Stage 1: Monitor Only (START HERE)
DMARC_POLICY = f"v=DMARC1; p=none; rua=mailto:{DMARC_EMAIL}; ruf=mailto:{DMARC_EMAIL}; fo=1"

# Stage 2: Quarantine 25%
# DMARC_POLICY = f"v=DMARC1; p=quarantine; pct=25; rua=mailto:{DMARC_EMAIL}; sp=quarantine"

# Stage 3: Quarantine 50%
# DMARC_POLICY = f"v=DMARC1; p=quarantine; pct=50; rua=mailto:{DMARC_EMAIL}; sp=quarantine"

# Stage 4: Full Reject
# DMARC_POLICY = f"v=DMARC1; p=reject; rua=mailto:{DMARC_EMAIL}; sp=reject; aspf=r; adkim=r"
```

## Usage

### Run DMARC Updater
```bash
python scripts/dmarc_updater.py
```

### What the Script Does
1. **Verifies Credentials**: Checks Cloudflare API access
2. **Fetches Domains**: Gets all domains in your account
3. **Checks Existing Records**: Looks for current DMARC records
4. **Creates/Updates Records**: Applies DMARC policy to all domains
5. **Provides Report**: Shows success/failure summary

### Example Output
```
Cloudflare DMARC Bulk Updater for Vegas Real Estate
============================================================
Checking Cloudflare credentials...
Credentials verified successfully!

DMARC Reports will go to: DrJanSells@ReverenceSummerlinHomes.com
Policy to apply: v=DMARC1; p=none; rua=mailto:DrJanSells@ReverenceSummerlinHomes.com; ruf=mailto:DrJanSells@ReverenceSummerlinHomes.com; fo=1
============================================================

Fetching all domains from Cloudflare...
Found 1 domains

Domains to update:
   1. reverencesummerlinhomes.com (active)

Current Policy Stage:
   MONITOR MODE - No emails will be blocked
   Safe to apply to all domains

Proceed with DMARC update for all domains? (yes/no): yes

Starting updates...

Processing reverencesummerlinhomes.com... Created

============================================================
DMARC Update Summary:
   Created: 1 new records
   Updated: 0 existing records
   Failed: 0 domains
   Total Success: 1/1
============================================================

DMARC policies successfully applied!
DMARC reports will be sent to: DrJanSells@ReverenceSummerlinHomes.com

Next Steps:
1. Monitor reports for 1-2 weeks at DrJanSells@ReverenceSummerlinHomes.com
2. Check email deliverability stays strong
3. Move to Stage 2 (quarantine 25%) after monitoring
4. Gradually increase to full protection

Pro Tip: Use DMARC analyzer tools to interpret reports easily
```

## DMARC Policy Stages

### Stage 1: Monitor Only (Weeks 1-2) - START HERE
- **Policy**: `p=none`
- **Purpose**: Collect reports without blocking emails
- **Risk**: None - no emails blocked
- **Action**: Monitor reports for 1-2 weeks

### Stage 2: Quarantine 25% (Weeks 3-4)
- **Policy**: `p=quarantine; pct=25`
- **Purpose**: Start enforcement on 25% of emails
- **Risk**: Low - some emails may go to spam
- **Action**: Monitor for false positives

### Stage 3: Quarantine 50% (Weeks 5-6)
- **Policy**: `p=quarantine; pct=50`
- **Purpose**: Increase enforcement to 50%
- **Risk**: Medium - more emails may be affected
- **Action**: Continue monitoring

### Stage 4: Full Reject (Week 7+)
- **Policy**: `p=reject`
- **Purpose**: Maximum protection
- **Risk**: High - all non-compliant emails blocked
- **Action**: Only after confirming no issues

## Troubleshooting

### Common Issues

#### 1. No Cloudflare Credentials Found
**Error**: `No Cloudflare credentials found in environment variables!`

**Solutions**:
- Run `vercel env pull .env.local`
- Check `.env.local` file exists
- Verify environment variable names
- Contact support if using API keys

#### 2. Credential Verification Failed
**Error**: `Credential verification failed: 400`

**Solutions**:
- Check API token permissions
- Verify token is not expired
- Ensure token has Zone:Read and DNS:Edit permissions
- Try regenerating API token

#### 3. No Zones Found
**Error**: `No zones found!`

**Solutions**:
- Check API token has Zone:Read permission
- Verify account has domains
- Check account ID if using account-level tokens
- Contact Cloudflare support

#### 4. DNS Record Creation Failed
**Error**: `Failed to create` or `Failed to update`

**Solutions**:
- Check API token has DNS:Edit permission
- Verify domain is active in Cloudflare
- Check for existing conflicting records
- Try manual creation in dashboard first

### Getting Help

#### Cloudflare Support
- **Documentation**: https://developers.cloudflare.com/api/
- **Community**: https://community.cloudflare.com/
- **Support**: Available through dashboard

#### DMARC Resources
- **DMARC Analyzer**: https://mxtoolbox.com/dmarc.aspx
- **DMARC Inspector**: https://dmarcian.com/dmarc-inspector/
- **Postmark DMARC**: https://dmarc.postmarkapp.com/

## Security Notes

### API Token Security
- **Never commit** `.env.local` to version control
- **Use API tokens** instead of API keys when possible
- **Minimal permissions**: Only Zone:Read and DNS:Edit
- **Regular rotation**: Update tokens periodically

### DMARC Security
- **Start with monitor mode** before enforcing
- **Monitor reports** for authentication issues
- **Gradual enforcement** reduces risk
- **Have rollback plan** ready

## Best Practices

### 1. Gradual Implementation
- Start with monitor mode (p=none)
- Monitor reports for 1-2 weeks
- Gradually increase enforcement
- Be prepared to rollback

### 2. Regular Monitoring
- Check DMARC reports daily initially
- Weekly reviews after stabilization
- Monthly policy effectiveness review
- Quarterly security assessment

### 3. Documentation
- Keep records of policy changes
- Document authentication issues
- Maintain list of legitimate sources
- Track enforcement progress

### 4. Client Communication
- Inform clients about DMARC implementation
- Provide guidance on email authentication
- Offer support for authentication issues
- Document any changes

---

**Last Updated**: January 2025
**Next Review**: When DMARC policies change