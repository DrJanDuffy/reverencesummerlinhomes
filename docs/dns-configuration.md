# Current DNS Configuration - reverencesummerlinhomes.com

## Overview

This document outlines the current DNS configuration for reverencesummerlinhomes.com, managed through Cloudflare with Vercel hosting.

## Domain Details

- **Primary Domain**: reverencesummerlinhomes.com
- **WWW Domain**: www.reverencesummerlinhomes.com
- **DNS Provider**: Cloudflare (Free Plan)
- **Hosting Provider**: Vercel
- **Email Provider**: Cloudflare Email Routing

## DNS Records Configuration

### A Records

| Name | Type | Content     | Proxy Status | Purpose                              |
| ---- | ---- | ----------- | ------------ | ------------------------------------ |
| @    | A    | 216.150.1.1 | DNS Only     | Cloudflare placeholder (not proxied) |

### CNAME Records

| Name | Type  | Content                             | Proxy Status | Purpose                      |
| ---- | ----- | ----------------------------------- | ------------ | ---------------------------- |
| www  | CNAME | d7a3f12a565e535d.vercel-dns-016.com | DNS Only     | Vercel hosting (not proxied) |

### MX Records (Email Routing)

| Priority | Type | Content                  | Proxy Status | Purpose                  |
| -------- | ---- | ------------------------ | ------------ | ------------------------ |
| 1        | MX   | route1.mx.cloudflare.net | DNS Only     | Cloudflare Email Routing |
| 2        | MX   | route2.mx.cloudflare.net | DNS Only     | Cloudflare Email Routing |
| 3        | MX   | route3.mx.cloudflare.net | DNS Only     | Cloudflare Email Routing |

### TXT Records (Email Authentication)

| Name               | Type | Content                                                                                                                      | Proxy Status | Purpose                             |
| ------------------ | ---- | ---------------------------------------------------------------------------------------------------------------------------- | ------------ | ----------------------------------- |
| @                  | TXT  | v=spf1 include:\_spf.google.com include:mailgun.org ~all                                                                     | DNS Only     | SPF record for email authentication |
| google.\_domainkey | TXT  | [DKIM Key]                                                                                                                   | DNS Only     | DKIM signature for Google services  |
| \_dmarc            | TXT  | v=DMARC1; p=none; rua=mailto:DrJanSells@ReverenceSummerlinHomes.com; ruf=mailto:DrJanSells@ReverenceSummerlinHomes.com; fo=1 | DNS Only     | DMARC policy (monitor mode)         |

## Proxy Status Strategy

### Why "DNS Only" (Not Proxied)?

- **Avoids Vercel Domain Charges**: Vercel charges for custom domains when proxied through Cloudflare
- **Direct Vercel Integration**: CNAME points directly to Vercel's DNS
- **Email Routing**: Cloudflare Email Routing works with DNS-only MX records
- **Cost Optimization**: Maintains free hosting while using Cloudflare's DNS management

### Benefits of Current Setup

- ✅ **Free Hosting**: No Vercel domain charges
- ✅ **Reliable DNS**: Cloudflare's global DNS network
- ✅ **Email Routing**: Professional email addresses
- ✅ **Easy Management**: Single DNS provider for all records
- ✅ **Security**: SPF, DKIM, and DMARC configured

## Email Configuration

### Email Addresses

- **Primary**: DrJanSells@ReverenceSummerlinHomes.com
- **DMARC Reports**: DrJanSells@ReverenceSummerlinHomes.com
- **Routing**: Handled by Cloudflare Email Routing

### Email Authentication Status

- ✅ **SPF**: Configured and passing
- ✅ **DKIM**: Configured and passing
- ✅ **DMARC**: Configured in monitor mode
- ✅ **Email Routing**: Active and functional

## Redirect Configuration

### Apex to WWW Redirect

- **Source**: reverencesummerlinhomes.com
- **Target**: https://www.reverencesummerlinhomes.com
- **Type**: 301 Permanent Redirect
- **Method**: Cloudflare Page Rules (if needed)

## Security Features

### SSL/TLS

- **Status**: Enabled via Vercel
- **Certificate**: Automatic Let's Encrypt
- **HTTPS**: Enforced for all traffic

### DNS Security

- **DNSSEC**: Available but not enabled (optional)
- **DNS Filtering**: Available through Cloudflare (optional)

## Monitoring and Maintenance

### Regular Checks

- [ ] DNS propagation status
- [ ] Email deliverability
- [ ] DMARC report analysis
- [ ] SSL certificate status
- [ ] Website uptime

### Tools for Monitoring

- **DNS**: dig, nslookup, Cloudflare dashboard
- **Email**: DMARC analyzers, SPF checkers
- **SSL**: SSL Labs, Vercel dashboard
- **Uptime**: UptimeRobot, Pingdom

## Backup and Recovery

### DNS Backup

- Export DNS records from Cloudflare dashboard
- Document all custom configurations
- Keep record of API tokens and access

### Recovery Procedures

- Restore DNS records from backup
- Verify email authentication
- Test website functionality
- Monitor for 24-48 hours

## Future Considerations

### Potential Upgrades

- **Cloudflare Pro**: Enhanced security features
- **DNSSEC**: Additional DNS security
- **Advanced Email**: Custom email hosting
- **CDN**: Cloudflare's content delivery network

### Migration Planning

- Document all dependencies
- Plan maintenance windows
- Test in staging environment
- Have rollback procedures ready

## Contact Information

### Technical Support

- **Cloudflare**: Support through dashboard
- **Vercel**: Support through dashboard
- **Domain Registrar**: Contact registrar for domain-level issues

### Documentation References

- Cloudflare DNS documentation
- Vercel custom domains guide
- DMARC implementation guide
- Email authentication best practices

---

**Last Updated**: January 2025
**Next Review**: Quarterly or when changes are made
