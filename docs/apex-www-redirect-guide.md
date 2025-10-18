# Apex to WWW Redirect Configuration
## Cloudflare Redirect Rule Setup

### Overview
This guide explains how to configure a redirect rule in Cloudflare to automatically redirect `reverencesummerlinhomes.com` to `www.reverencesummerlinhomes.com` for better SEO and consistency.

### Why Redirect Apex to WWW?

**SEO Benefits:**
- Consolidates link equity to single domain
- Prevents duplicate content issues
- Improves search engine ranking
- Better analytics tracking

**User Experience:**
- Consistent URL structure
- Prevents confusion between versions
- Better bookmark management
- Cleaner URL appearance

### Step-by-Step Configuration

#### Step 1: Access Cloudflare Dashboard
1. Log in to Cloudflare dashboard
2. Select `reverencesummerlinhomes.com` domain
3. Navigate to **Rules** → **Redirect Rules**

#### Step 2: Create Redirect Rule
1. Click **Create redirect rule**
2. Choose **Dynamic redirect**

#### Step 3: Configure Rule Settings

**Rule Name:**
```
Apex to WWW Redirect
```

**When incoming requests match:**
```
Hostname equals "reverencesummerlinhomes.com"
```

**Then:**
```
Redirect to: https://www.reverencesummerlinhomes.com$request_uri
Status code: 301 (Permanent Redirect)
```

#### Step 4: Advanced Configuration (Optional)

**Additional Conditions:**
```
AND
URI path does not equal "/api/*"
AND
URI path does not equal "/sitemap*"
```

**Explanation:**
- Excludes API routes from redirect
- Excludes sitemap files from redirect
- Preserves query parameters

#### Step 5: Test Configuration

**Test URLs:**
- `http://reverencesummerlinhomes.com` → `https://www.reverencesummerlinhomes.com`
- `http://reverencesummerlinhomes.com/contact` → `https://www.reverencesummerlinhomes.com/contact`
- `http://reverencesummerlinhomes.com/about` → `https://www.reverencesummerlinhomes.com/about`

**Expected Results:**
- Status code: 301
- Location header: `https://www.reverencesummerlinhomes.com/[path]`
- Query parameters preserved
- HTTPS enforced

### Alternative: Page Rules Method

#### Using Page Rules (Legacy)
1. Navigate to **Rules** → **Page Rules**
2. Click **Create Page Rule**

**URL Pattern:**
```
reverencesummerlinhomes.com/*
```

**Settings:**
- **Forwarding URL**: `https://www.reverencesummerlinhomes.com/$1`
- **Status Code**: 301 - Permanent Redirect

### Testing the Redirect

#### Command Line Testing
```bash
# Test redirect
curl -I http://reverencesummerlinhomes.com

# Expected response:
# HTTP/1.1 301 Moved Permanently
# Location: https://www.reverencesummerlinhomes.com/
```

#### Browser Testing
1. Open browser in incognito mode
2. Navigate to `http://reverencesummerlinhomes.com`
3. Verify redirect to `https://www.reverencesummerlinhomes.com`
4. Check address bar shows www version

#### Online Tools
- **Redirect Checker**: https://www.redirectchecker.org/
- **HTTP Status Checker**: https://httpstatus.io/
- **Redirect Test**: https://redirecttest.com/

### SEO Considerations

#### Update Internal Links
After implementing redirect:
1. Update all internal links to use www version
2. Update sitemap to use www version
3. Update canonical URLs to use www version
4. Update social media profiles to use www version

#### Google Search Console
1. Add both versions to Search Console
2. Set preferred domain to www version
3. Submit updated sitemap
4. Monitor for any indexing issues

#### Analytics Configuration
1. Update Google Analytics to use www domain
2. Update goal configurations
3. Update conversion tracking
4. Update custom dimensions

### Troubleshooting

#### Common Issues

**Redirect Loop:**
- Check for conflicting rules
- Verify DNS settings
- Check SSL configuration

**Not Working:**
- Clear browser cache
- Check Cloudflare cache
- Verify rule is active
- Check rule order

**SEO Issues:**
- Monitor Search Console for errors
- Check for duplicate content
- Verify canonical URLs
- Update internal links

#### Debugging Steps
1. **Check Rule Status**: Ensure rule is active
2. **Clear Cache**: Purge Cloudflare cache
3. **Test Different Browsers**: Verify across browsers
4. **Check Mobile**: Test on mobile devices
5. **Monitor Logs**: Check Cloudflare logs

### Maintenance

#### Regular Monitoring
- **Weekly**: Check redirect is working
- **Monthly**: Review analytics for issues
- **Quarterly**: Update rule if needed

#### Performance Impact
- Redirect adds minimal latency
- 301 redirects are cached by browsers
- Cloudflare handles redirects efficiently

### Security Considerations

#### HTTPS Enforcement
- Redirect should enforce HTTPS
- Prevents man-in-the-middle attacks
- Improves security score

#### HSTS Headers
- Ensure HSTS is enabled
- Prevents protocol downgrade attacks
- Improves security posture

### Documentation

#### Update Documentation
After implementing redirect:
1. Update DNS configuration docs
2. Update Cloudflare configuration guide
3. Update testing checklist
4. Document any issues encountered

#### Team Communication
- Notify team of URL changes
- Update bookmarks and links
- Update email signatures
- Update business cards

### Rollback Plan

#### If Issues Occur
1. **Disable Rule**: Turn off redirect rule
2. **Monitor**: Check for any issues
3. **Investigate**: Identify root cause
4. **Fix**: Resolve issues
5. **Re-enable**: Turn rule back on

#### Emergency Contacts
- **Cloudflare Support**: Available 24/7
- **Technical Lead**: [Contact information]
- **Emergency**: [Emergency contact]

---

**Implementation Date**: [To be filled when implemented]
**Last Updated**: January 18, 2025
**Document Version**: 1.0
**Next Review**: February 18, 2025
