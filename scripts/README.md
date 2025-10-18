# Cloudflare DNS Optimization Setup Instructions
# =============================================

## Current Status
✅ Python script created: scripts/dmarc_updater.py
✅ Dependencies installed: requests, python-dotenv
✅ Environment file exists: .env.local
❌ Cloudflare credentials needed

## Next Steps Required

### 1. Get Cloudflare API Token
1. Go to: https://dash.cloudflare.com/profile/api-tokens
2. Click "Create Token"
3. Use "Custom token" template
4. Set permissions:
   - Zone: Zone:Read
   - Zone: DNS:Edit
5. Zone Resources: Include All zones
6. Copy the generated token

### 2. Add Token to .env.local
Add this line to your .env.local file:
```
CLOUDFLARE_API_TOKEN=your_actual_token_here
```

### 3. Run DMARC Script
```bash
python scripts/dmarc_updater.py
```

## What the Script Will Do

1. **Verify Credentials** - Test API token works
2. **Find Domains** - List all domains in your Cloudflare account
3. **Check DMARC** - Look for existing DMARC records
4. **Create/Update** - Add DMARC policy to all domains
5. **Report Results** - Show success/failure summary

## DMARC Policy Applied

**Stage 1: Monitor Mode (Safe)**
```
v=DMARC1; p=none; rua=mailto:DrJanSells@ReverenceSummerlinHomes.com; ruf=mailto:DrJanSells@ReverenceSummerlinHomes.com; fo=1
```

- ✅ No emails blocked
- ✅ Collects authentication reports
- ✅ Safe to apply immediately
- ✅ Reports sent to DrJanSells@ReverenceSummerlinHomes.com

## After Running Script

### Test DMARC Setup
1. **DNS Check**: `dig TXT _dmarc.reverencesummerlinhomes.com`
2. **Online Tools**:
   - https://mxtoolbox.com/dmarc.aspx
   - https://mxtoolbox.com/spf.aspx
3. **Email Test**: Send test email to DrJanSells@ReverenceSummerlinHomes.com

### Monitor Reports (Week 1-2)
- Check email for DMARC reports
- Verify legitimate emails pass SPF/DKIM
- Identify any authentication issues

### Gradual Enforcement (Week 3+)
Update DMARC_POLICY in script to:
- Stage 2: `p=quarantine; pct=25` (25% to spam)
- Stage 3: `p=quarantine; pct=50` (50% to spam)  
- Stage 4: `p=reject` (block non-compliant)

## Security Notes
- ✅ .env.local is gitignored (won't be committed)
- ✅ API token has minimal permissions
- ✅ Starting with monitor mode (safe)
- ✅ Can rollback instantly if needed

## Files Created
- `scripts/dmarc_updater.py` - Main automation script
- `.env.local` - Environment variables (gitignored)
- `scripts/README.md` - This documentation

## Troubleshooting

**"No credentials found"**
- Add CLOUDFLARE_API_TOKEN to .env.local

**"Credential verification failed"**
- Check token permissions (Zone:Read, DNS:Edit)
- Verify token is active in Cloudflare dashboard

**"No zones found"**
- Ensure token has access to domains
- Check account ID if using multiple accounts

**Script fails on specific domain**
- Check domain status in Cloudflare
- Verify DNS records are properly configured
