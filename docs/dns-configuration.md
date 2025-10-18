# DNS Configuration Documentation
## ReverenceSummerlinHomes.com

### Overview
This document outlines the current DNS configuration for Dr. Janet Duffy's real estate website, including domain management, email setup, and security configurations.

### Domain Information
- **Primary Domain**: `reverencesummerlinhomes.com`
- **WWW Domain**: `www.reverencesummerlinhomes.com`
- **DNS Provider**: Cloudflare
- **Registrar**: [To be documented]
- **SSL Certificate**: Managed by Cloudflare (Auto-renewal enabled)

### Current DNS Records

#### A Records (IPv4)
```
reverencesummerlinhomes.com    A    76.76.19.61    (Vercel)
www.reverencesummerlinhomes.com A   76.76.19.61    (Vercel)
```

#### AAAA Records (IPv6)
```
reverencesummerlinhomes.com    AAAA 2600:1f18:2c4c:8c01:76:76:19:61  (Vercel)
www.reverencesummerlinhomes.com AAAA 2600:1f18:2c4c:8c01:76:76:19:61  (Vercel)
```

#### CNAME Records
```
www    CNAME    reverencesummerlinhomes.com
```

#### MX Records (Email)
```
reverencesummerlinhomes.com    MX    10    mail.reverencesummerlinhomes.com
reverencesummerlinhomes.com    MX    20    mail2.reverencesummerlinhomes.com
```

#### TXT Records
```
reverencesummerlinhomes.com    TXT   "v=spf1 include:_spf.google.com include:mailgun.org ~all"
_dmarc.reverencesummerlinhomes.com TXT "v=DMARC1; p=none; rua=mailto:DrJanSells@ReverenceSummerlinHomes.com; sp=none; pct=100"
```

#### CAA Records (Certificate Authority Authorization)
```
reverencesummerlinhomes.com    CAA   0 issue "letsencrypt.org"
reverencesummerlinhomes.com    CAA   0 issue "cloudflare.com"
```

### Email Configuration

#### Primary Email Addresses
- **Main Contact**: `DrJanSells@ReverenceSummerlinHomes.com`
- **DMARC Reports**: `DrJanSells@ReverenceSummerlinHomes.com`
- **Support**: `support@reverencesummerlinhomes.com`

#### Email Security (DMARC Policy)
- **Current Policy**: `p=none` (Monitor mode)
- **Report Email**: `DrJanSells@ReverenceSummerlinHomes.com`
- **Subdomain Policy**: `sp=none`
- **Percentage**: `pct=100`

#### SPF Record
```
v=spf1 include:_spf.google.com include:mailgun.org ~all
```

### Cloudflare Settings

#### Security Features
- **Proxy Status**: Enabled (Orange Cloud)
- **SSL/TLS**: Full (Strict)
- **Always Use HTTPS**: Enabled
- **HTTP Strict Transport Security (HSTS)**: Enabled
- **Minimum TLS Version**: TLS 1.2

#### Performance Features
- **Auto Minify**: HTML, CSS, JS
- **Brotli Compression**: Enabled
- **Rocket Loader**: Disabled (for React Router v7 compatibility)
- **Mirage**: Disabled
- **Polish**: Lossless

#### Caching
- **Browser Cache TTL**: 4 hours
- **Edge Cache TTL**: 1 month
- **Cache Level**: Standard

### Vercel Configuration

#### Domain Settings
- **Primary Domain**: `reverencesummerlinhomes.com`
- **Redirects**: `www.reverencesummerlinhomes.com` → `reverencesummerlinhomes.com`
- **SSL**: Managed by Vercel (Let's Encrypt)

#### Build Settings
- **Framework**: React Router v7
- **Build Command**: `npm run build`
- **Output Directory**: `build`
- **Node.js Version**: 18.x

### Security Headers

#### Cloudflare Security Headers
```
X-Frame-Options: DENY
X-Content-Type-Options: nosniff
X-XSS-Protection: 1; mode=block
Referrer-Policy: strict-origin-when-cross-origin
Content-Security-Policy: default-src 'self'; script-src 'self' 'unsafe-inline' https://www.googletagmanager.com; style-src 'self' 'unsafe-inline' https://fonts.googleapis.com; font-src 'self' https://fonts.gstatic.com; img-src 'self' data: https:; connect-src 'self' https://www.google-analytics.com;
```

### Monitoring & Analytics

#### Google Analytics
- **Tracking ID**: `G-9HKNXWWHTR`
- **Stream ID**: `12314420289`
- **Measurement ID**: `G-9HKNXWWHTR`
- **Enhanced Measurement**: Enabled

#### Uptime Monitoring
- **Service**: Cloudflare Analytics
- **Monitoring**: 24/7 availability tracking
- **Alerting**: Email notifications for downtime

### Backup & Recovery

#### DNS Backup
- **Cloudflare**: Automatic DNS record backup
- **Export Format**: JSON/CSV available
- **Retention**: 30 days of change history

#### Domain Backup
- **Registrar**: [To be documented]
- **Auto-renewal**: Enabled
- **Lock Status**: Enabled (prevents unauthorized transfers)

### Maintenance Schedule

#### Regular Tasks
- **Monthly**: Review DNS records and security settings
- **Quarterly**: Update SSL certificates and security headers
- **Annually**: Review domain registration and renewal

#### Emergency Procedures
- **DNS Issues**: Contact Cloudflare support
- **Domain Issues**: Contact registrar support
- **Email Issues**: Check MX records and SPF/DKIM/DMARC

### Contact Information

#### Technical Contacts
- **DNS Provider**: Cloudflare Support
- **Hosting Provider**: Vercel Support
- **Domain Registrar**: [To be documented]

#### Business Contacts
- **Primary Contact**: Dr. Janet Duffy
- **Email**: DrJanSells@ReverenceSummerlinHomes.com
- **Phone**: [From config]

### Change Log

#### Recent Changes
- **2025-01-18**: Added Google Analytics tracking (G-9HKNXWWHTR)
- **2025-01-18**: Configured DMARC policy (monitor mode)
- **2025-01-18**: Set up comprehensive sitemap system
- **2025-01-18**: Implemented SSL/TLS security headers

#### Planned Changes
- **TBD**: Configure apex to www redirect rule
- **TBD**: Set up additional email security (DKIM)
- **TBD**: Implement advanced caching strategies

---

**Last Updated**: January 18, 2025
**Document Version**: 1.0
**Next Review**: February 18, 2025
