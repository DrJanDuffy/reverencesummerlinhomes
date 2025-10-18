# Cloudflare Configuration Guide
## ReverenceSummerlinHomes.com Setup

### Overview
This guide provides step-by-step instructions for configuring Cloudflare settings for Dr. Janet Duffy's real estate website, including DNS management, security settings, and performance optimization.

### Prerequisites
- Cloudflare account with domain added
- Access to Cloudflare dashboard
- Domain registrar access (if needed)
- Vercel deployment ready

### Step 1: DNS Configuration

#### 1.1 Add DNS Records
Navigate to **DNS** → **Records** in Cloudflare dashboard:

**A Records:**
```
Type: A
Name: @
IPv4 address: 76.76.19.61
Proxy status: Proxied (Orange Cloud)
TTL: Auto
```

```
Type: A
Name: www
IPv4 address: 76.76.19.61
Proxy status: Proxied (Orange Cloud)
TTL: Auto
```

**CNAME Record:**
```
Type: CNAME
Name: www
Target: reverencesummerlinhomes.com
Proxy status: Proxied (Orange Cloud)
TTL: Auto
```

#### 1.2 Email Configuration (MX Records)
```
Type: MX
Name: @
Mail server: mail.reverencesummerlinhomes.com
Priority: 10
TTL: Auto
```

```
Type: MX
Name: @
Mail server: mail2.reverencesummerlinhomes.com
Priority: 20
TTL: Auto
```

#### 1.3 Security Records (TXT)
**SPF Record:**
```
Type: TXT
Name: @
Content: v=spf1 include:_spf.google.com include:mailgun.org ~all
TTL: Auto
```

**DMARC Record:**
```
Type: TXT
Name: _dmarc
Content: v=DMARC1; p=none; rua=mailto:DrJanSells@ReverenceSummerlinHomes.com; sp=none; pct=100
TTL: Auto
```

**CAA Records:**
```
Type: CAA
Name: @
Tag: issue
Value: letsencrypt.org
TTL: Auto
```

```
Type: CAA
Name: @
Tag: issue
Value: cloudflare.com
TTL: Auto
```

### Step 2: SSL/TLS Configuration

#### 2.1 SSL/TLS Settings
Navigate to **SSL/TLS** → **Overview**:

**Encryption Mode:**
- Select: **Full (Strict)**
- This ensures end-to-end encryption between Cloudflare and Vercel

#### 2.2 Edge Certificates
Navigate to **SSL/TLS** → **Edge Certificates**:

**Enable:**
- ✅ Always Use HTTPS
- ✅ HTTP Strict Transport Security (HSTS)
- ✅ Minimum TLS Version: TLS 1.2
- ✅ Opportunistic Encryption
- ✅ TLS 1.3

**Disable:**
- ❌ Automatic HTTPS Rewrites (handled by Vercel)

#### 2.3 Origin Server
Navigate to **SSL/TLS** → **Origin Server**:

**Settings:**
- ✅ Authenticated Origin Pulls
- ✅ Origin Server Certificate: Cloudflare Origin Certificate

### Step 3: Security Configuration

#### 3.1 Security Level
Navigate to **Security** → **Settings**:

**Security Level:**
- Set to: **Medium**
- This provides good protection without blocking legitimate traffic

#### 3.2 Bot Fight Mode
Navigate to **Security** → **Bots**:

**Enable:**
- ✅ Bot Fight Mode
- ✅ Super Bot Fight Mode (if available)

#### 3.3 Rate Limiting
Navigate to **Security** → **WAF** → **Rate limiting rules**:

**Create Rule:**
```
Rule name: Contact Form Protection
If: URI Path equals "/contact"
Then: Rate limit to 5 requests per minute per IP
Action: Block for 1 hour
```

#### 3.4 Security Headers
Navigate to **Security** → **WAF** → **Custom rules**:

**Create Header Rule:**
```
Rule name: Security Headers
Expression: true
Action: Set static header
Header: X-Frame-Options
Value: DENY
```

**Additional Headers:**
```
X-Content-Type-Options: nosniff
X-XSS-Protection: 1; mode=block
Referrer-Policy: strict-origin-when-cross-origin
```

### Step 4: Performance Optimization

#### 4.1 Caching Configuration
Navigate to **Caching** → **Configuration**:

**Caching Level:**
- Set to: **Standard**

**Browser Cache TTL:**
- Set to: **4 hours**

**Edge Cache TTL:**
- Set to: **1 month**

#### 4.2 Speed Optimizations
Navigate to **Speed** → **Optimization**:

**Enable:**
- ✅ Auto Minify: HTML, CSS, JavaScript
- ✅ Brotli Compression
- ✅ Early Hints

**Disable:**
- ❌ Rocket Loader (conflicts with React Router v7)
- ❌ Mirage (not needed for modern sites)
- ❌ Polish (handled by Vercel)

#### 4.3 Image Optimization
Navigate to **Speed** → **Optimization**:

**Polish:**
- Set to: **Lossless**

**WebP:**
- Enable: **On**

### Step 5: Page Rules (Optional)

#### 5.1 Cache Everything Rule
Navigate to **Rules** → **Page Rules**:

**Create Rule:**
```
URL: reverencesummerlinhomes.com/*
Settings:
- Cache Level: Cache Everything
- Edge Cache TTL: 1 month
- Browser Cache TTL: 4 hours
```

#### 5.2 API Routes Rule
```
URL: reverencesummerlinhomes.com/api/*
Settings:
- Cache Level: Bypass
- Disable Apps
```

### Step 6: Analytics & Monitoring

#### 6.1 Cloudflare Analytics
Navigate to **Analytics** → **Web Analytics**:

**Enable:**
- ✅ Web Analytics
- ✅ Real User Monitoring (RUM)

#### 6.2 Notifications
Navigate to **Notifications**:

**Set up alerts for:**
- High error rate
- High bandwidth usage
- Security events
- SSL certificate expiration

### Step 7: Advanced Features

#### 7.1 Workers (Optional)
For advanced functionality, consider Cloudflare Workers:

**Use cases:**
- A/B testing
- Custom redirects
- Advanced caching logic
- Security enhancements

#### 7.2 Argo Smart Routing
Navigate to **Traffic** → **Argo**:

**Enable:**
- ✅ Argo Smart Routing (if available)
- This optimizes routing for better performance

### Step 8: Testing & Verification

#### 8.1 DNS Propagation Check
Use tools to verify DNS propagation:
- `dig reverencesummerlinhomes.com`
- `nslookup reverencesummerlinhomes.com`
- Online DNS checker tools

#### 8.2 SSL Certificate Verification
- Check SSL Labs: `https://www.ssllabs.com/ssltest/`
- Verify certificate chain
- Test HTTPS redirects

#### 8.3 Performance Testing
- Google PageSpeed Insights
- GTmetrix
- WebPageTest

### Step 9: Monitoring & Maintenance

#### 9.1 Regular Monitoring
**Weekly checks:**
- DNS record status
- SSL certificate validity
- Security event logs
- Performance metrics

#### 9.2 Monthly Reviews
- Update security rules
- Review caching policies
- Check for new Cloudflare features
- Analyze traffic patterns

#### 9.3 Quarterly Updates
- Review and update SSL/TLS settings
- Optimize caching rules
- Update security headers
- Review rate limiting rules

### Troubleshooting

#### Common Issues

**DNS Not Propagating:**
- Check nameservers are set to Cloudflare
- Verify DNS records are correct
- Wait for propagation (up to 24 hours)

**SSL Certificate Issues:**
- Ensure Full (Strict) mode is enabled
- Check origin server certificate
- Verify domain validation

**Performance Issues:**
- Check caching settings
- Review page rules
- Monitor bandwidth usage
- Test with different locations

**Security Blocks:**
- Review security level settings
- Check WAF rules
- Review rate limiting rules
- Check bot fight mode settings

### Support Resources

#### Cloudflare Support
- **Documentation**: https://developers.cloudflare.com/
- **Community**: https://community.cloudflare.com/
- **Support**: Available through Cloudflare dashboard

#### Additional Tools
- **DNS Checker**: https://dnschecker.org/
- **SSL Labs**: https://www.ssllabs.com/ssltest/
- **PageSpeed Insights**: https://pagespeed.web.dev/

---

**Last Updated**: January 18, 2025
**Guide Version**: 1.0
**Next Review**: February 18, 2025
