# Cloudflare Configuration Guide for reverencesummerlinhomes.com

## Overview

This guide provides step-by-step instructions for configuring Cloudflare for reverencesummerlinhomes.com, including DNS management, SSL/TLS, caching, and security features.

## Prerequisites

- Cloudflare account (free plan sufficient)
- Domain registered and pointing to Cloudflare nameservers
- Access to domain registrar's control panel

## Step 1: Add Domain to Cloudflare

### 1.1 Add Domain

1. Log into Cloudflare dashboard
2. Click "Add a Site"
3. Enter: `reverencesummerlinhomes.com`
4. Select "Free" plan
5. Click "Continue"

### 1.2 DNS Scan

1. Cloudflare will scan existing DNS records
2. Review detected records
3. Ensure all necessary records are present
4. Click "Continue"

### 1.3 Nameserver Update

1. Copy Cloudflare nameservers:
   - `alex.ns.cloudflare.com`
   - `maya.ns.cloudflare.com`
2. Update nameservers at domain registrar
3. Wait for propagation (up to 24 hours)

## Step 2: DNS Configuration

### 2.1 Core DNS Records

Configure these essential records in Cloudflare DNS:

#### A Record (Apex Domain)

- **Name**: @
- **Type**: A
- **Content**: 216.150.1.1
- **Proxy Status**: DNS Only (gray cloud)
- **TTL**: Auto

#### CNAME Record (WWW)

- **Name**: www
- **Type**: CNAME
- **Content**: d7a3f12a565e535d.vercel-dns-016.com
- **Proxy Status**: DNS Only (gray cloud)
- **TTL**: Auto

### 2.2 Email Configuration

#### MX Records

- **Priority**: 1, 2, 3
- **Type**: MX
- **Content**:
  - route1.mx.cloudflare.net
  - route2.mx.cloudflare.net
  - route3.mx.cloudflare.net
- **Proxy Status**: DNS Only (gray cloud)

#### SPF Record

- **Name**: @
- **Type**: TXT
- **Content**: `v=spf1 include:_spf.google.com include:mailgun.org ~all`
- **Proxy Status**: DNS Only (gray cloud)

#### DKIM Record

- **Name**: google.\_domainkey
- **Type**: TXT
- **Content**: [Your DKIM key from Google]
- **Proxy Status**: DNS Only (gray cloud)

#### DMARC Record

- **Name**: \_dmarc
- **Type**: TXT
- **Content**: `v=DMARC1; p=none; rua=mailto:DrJanSells@ReverenceSummerlinHomes.com; ruf=mailto:DrJanSells@ReverenceSummerlinHomes.com; fo=1`
- **Proxy Status**: DNS Only (gray cloud)

### 2.3 Important: Proxy Status

**Keep all records as "DNS Only" (gray cloud) to avoid Vercel domain charges.**

## Step 3: SSL/TLS Configuration

### 3.1 SSL/TLS Settings

1. Go to SSL/TLS → Overview
2. Set encryption mode to "Full (strict)"
3. Enable "Always Use HTTPS"
4. Enable "HTTP Strict Transport Security (HSTS)"

### 3.2 Edge Certificates

1. Go to SSL/TLS → Edge Certificates
2. Enable "Always Use HTTPS"
3. Enable "HTTP Strict Transport Security (HSTS)"
4. Set HSTS Max Age to 6 months minimum

## Step 4: Caching Configuration

### 4.1 Caching Settings

1. Go to Caching → Configuration
2. Set Caching Level to "Standard"
3. Set Browser Cache TTL to "4 hours"
4. Enable "Development Mode" only when needed

### 4.2 Page Rules (Optional)

Create page rules for specific caching:

#### Static Assets

- **URL**: `www.reverencesummerlinhomes.com/assets/*`
- **Settings**: Cache Level: Cache Everything, Edge Cache TTL: 1 month

#### Images

- **URL**: `www.reverencesummerlinhomes.com/images/*`
- **Settings**: Cache Level: Cache Everything, Edge Cache TTL: 1 week

## Step 5: Security Configuration

### 5.1 Security Level

1. Go to Security → Settings
2. Set Security Level to "Medium"
3. Enable "Challenge Passage" for 30 minutes

### 5.2 Bot Fight Mode

1. Go to Security → Bots
2. Enable "Bot Fight Mode" (free)
3. Configure bot score thresholds

### 5.3 Firewall Rules (Optional)

Create basic firewall rules:

#### Block Bad Bots

- **Expression**: `(http.user_agent contains "bot" and not http.user_agent contains "googlebot")`
- **Action**: Block

#### Rate Limiting

- **Expression**: `(http.host eq "www.reverencesummerlinhomes.com")`
- **Action**: Rate limit to 100 requests per minute

## Step 6: Performance Optimization

### 6.1 Speed Settings

1. Go to Speed → Optimization
2. Enable "Auto Minify" for HTML, CSS, JS
3. Enable "Brotli" compression
4. Enable "Rocket Loader" (optional)

### 6.2 Image Optimization

1. Go to Speed → Optimization
2. Enable "Polish" (free tier: lossless)
3. Enable "WebP" conversion

## Step 7: Analytics and Monitoring

### 7.1 Web Analytics

1. Go to Analytics → Web Analytics
2. Enable "Web Analytics" (free)
3. Add tracking code to website if needed

### 7.2 Security Events

1. Go to Security → Events
2. Monitor blocked requests
3. Review security threats

## Step 8: Email Routing Setup

### 8.1 Enable Email Routing

1. Go to Email → Email Routing
2. Click "Get Started"
3. Verify domain ownership
4. Configure email addresses

### 8.2 Email Addresses

- **Primary**: DrJanSells@ReverenceSummerlinHomes.com
- **DMARC Reports**: DrJanSells@ReverenceSummerlinHomes.com
- **Catch-all**: Configure as needed

## Step 9: Redirect Rules

### 9.1 Apex to WWW Redirect

1. Go to Rules → Redirect Rules
2. Create new redirect rule:
   - **Source**: `reverencesummerlinhomes.com`
   - **Target**: `https://www.reverencesummerlinhomes.com`
   - **Type**: 301 Permanent Redirect

### 9.2 HTTP to HTTPS Redirect

1. Create redirect rule:
   - **Source**: `http://www.reverencesummerlinhomes.com/*`
   - **Target**: `https://www.reverencesummerlinhomes.com/$1`
   - **Type**: 301 Permanent Redirect

## Step 10: Testing and Verification

### 10.1 DNS Testing

```bash
# Test DNS resolution
dig reverencesummerlinhomes.com
dig www.reverencesummerlinhomes.com

# Test MX records
dig MX reverencesummerlinhomes.com

# Test DMARC
dig TXT _dmarc.reverencesummerlinhomes.com
```

### 10.2 Website Testing

- [ ] Test apex domain redirect
- [ ] Test www domain functionality
- [ ] Verify SSL certificate
- [ ] Test page load speeds
- [ ] Check mobile responsiveness

### 10.3 Email Testing

- [ ] Send test email to DrJanSells@ReverenceSummerlinHomes.com
- [ ] Verify SPF record
- [ ] Check DKIM signature
- [ ] Test DMARC reports

## Step 11: Monitoring and Maintenance

### 11.1 Regular Monitoring

- **Daily**: Check website uptime
- **Weekly**: Review security events
- **Monthly**: Analyze performance metrics
- **Quarterly**: Review DNS configuration

### 11.2 Tools for Monitoring

- **Uptime**: UptimeRobot, Pingdom
- **Performance**: GTmetrix, PageSpeed Insights
- **Security**: Cloudflare Security Center
- **DNS**: DNS checker tools

## Troubleshooting Common Issues

### Issue: Website Not Loading

**Solutions:**

1. Check DNS propagation
2. Verify nameservers
3. Check SSL certificate status
4. Review firewall rules

### Issue: Email Not Working

**Solutions:**

1. Verify MX records
2. Check SPF/DKIM configuration
3. Test email routing
4. Review DMARC policy

### Issue: SSL Certificate Errors

**Solutions:**

1. Check SSL/TLS settings
2. Verify domain verification
3. Wait for certificate propagation
4. Contact support if needed

## Security Best Practices

### 1. Regular Updates

- Keep Cloudflare settings current
- Monitor security advisories
- Update firewall rules as needed

### 2. Access Control

- Use strong passwords
- Enable 2FA
- Limit admin access
- Regular access reviews

### 3. Monitoring

- Set up alerts for security events
- Monitor unusual traffic patterns
- Review blocked requests regularly

## Cost Optimization

### Free Plan Features

- ✅ DNS management
- ✅ Basic SSL/TLS
- ✅ Basic security
- ✅ Email routing
- ✅ Basic analytics

### Paid Plan Considerations

- **Pro Plan**: Enhanced security, advanced caching
- **Business Plan**: Advanced features, priority support
- **Enterprise Plan**: Custom solutions, SLA

## Support Resources

### Cloudflare Support

- **Documentation**: https://developers.cloudflare.com/
- **Community**: https://community.cloudflare.com/
- **Support**: Available through dashboard

### Additional Resources

- **DNS Checker**: https://dnschecker.org/
- **SSL Labs**: https://ssllabs.com/ssltest/
- **DMARC Analyzer**: https://mxtoolbox.com/dmarc.aspx

---

**Last Updated**: January 2025
**Next Review**: Quarterly or when changes are made
