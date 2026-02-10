# 🚀 Vercel Deployment Guide

This guide will walk you through deploying the AmzAdvanta website to Vercel.

## 📋 Prerequisites

1. **Vercel Account**: Sign up at [vercel.com](https://vercel.com)
2. **GitHub Account**: Required for automatic deployments
3. **Project Repository**: Your code should be pushed to GitHub

## 🔧 Step-by-Step Deployment

### Method 1: Vercel CLI (Recommended)

1. **Install Vercel CLI**:
```bash
npm i -g vercel
```

2. **Login to Vercel**:
```bash
vercel login
```

3. **Deploy from project root**:
```bash
cd amzadvanta
vercel
```

4. **Follow the prompts**:
   - Link to existing Vercel project or create new
   - Confirm settings (Next.js, build command, etc.)
   - Deploy!

### Method 2: Vercel Dashboard (Web Interface)

1. **Go to Vercel Dashboard**: [vercel.com/dashboard](https://vercel.com/dashboard)

2. **Click "Add New..." → "Project"**

3. **Import Git Repository**:
   - Connect your GitHub account
   - Select the `amzadvanta` repository
   - Click "Import"

4. **Configure Project**:
   ```
   Framework Preset: Next.js
   Root Directory: ./
   Build Command: npm run build
   Output Directory: .next
   Install Command: npm install
   ```

5. **Add Environment Variables** (optional but recommended):
   ```
   CONTACT_EMAIL=info@amzadvanta.com
   BUSINESS_EMAIL=audits@amzadvanta.com
   ```

6. **Click "Deploy"**

## ⚙️ Environment Variables

In your Vercel project dashboard, go to **Settings → Environment Variables** and add:

### Required for Production:
```
CONTACT_EMAIL=info@amzadvanta.com
BUSINESS_EMAIL=audits@amzadvanta.com
```

### Optional (for email functionality):
```
SMTP_HOST=your-smtp-host
SMTP_PORT=587
SMTP_USER=your-email@amzadvanta.com
SMTP_PASS=your-app-password
```

### Optional (for analytics):
```
GOOGLE_ANALYTICS_ID=G-XXXXXXXXXX
```

## 🔄 Automatic Deployments

Once connected to GitHub, Vercel will automatically:

- **Deploy on every push** to your main branch
- **Preview deployments** for pull requests
- **Rollback** to previous versions if needed

## 🌍 Custom Domain

1. Go to **Settings → Domains** in your Vercel project
2. Add your custom domain (e.g., `amzadvanta.com`)
3. Configure DNS records as instructed by Vercel
4. Wait for SSL certificate provisioning (usually takes a few minutes)

## 📊 Performance Optimization

The website is already optimized for Vercel:

- ✅ **Next.js App Router** for optimal performance
- ✅ **Image Optimization** with Next.js Image component
- ✅ **Automatic Code Splitting**
- ✅ **Edge Functions** for API routes
- ✅ **Static Generation** where possible

## 🔍 SEO & Analytics

### SEO Features:
- ✅ Meta tags configured
- ✅ Sitemap generation
- ✅ Robots.txt
- ✅ Open Graph tags

### Add Google Analytics:
1. Add `GOOGLE_ANALYTICS_ID` environment variable
2. Update `app/layout.tsx` to include Google Analytics script

## 🚨 Troubleshooting

### Build Errors:
- Check all dependencies are in `package.json`
- Ensure TypeScript compilation succeeds
- Verify all imports are correct

### Environment Variables:
- Make sure to add them in Vercel dashboard
- Restart deployment after adding variables
- Check variable names match exactly

### Performance Issues:
- Enable Vercel Analytics
- Check Core Web Vitals
- Optimize images if needed

## 📱 Post-Deployment Checklist

- [ ] Website loads correctly at the provided URL
- [ ] All navigation links work
- [ ] Forms submit without errors
- [ ] Mobile responsiveness looks good
- [ ] SSL certificate is active
- [ ] Custom domain (if configured) works
- [ ] Environment variables are working
- [ ] SEO meta tags are correct

## 🆘 Support

If you encounter issues:

1. **Vercel Documentation**: [vercel.com/docs](https://vercel.com/docs)
2. **Next.js Deployment Guide**: [nextjs.org/docs/deployment](https://nextjs.org/docs/deployment)
3. **Vercel Status**: [vercel-status.com](https://vercel-status.com)

## 🎉 Success!

Once deployed, your AmzAdvanta website will be live and ready to attract Amazon PPC clients! The site includes:

- Professional design with smooth animations
- Fully responsive layout
- SEO optimization
- Contact forms with validation
- Modern tech stack for optimal performance

**Your live site will be available at**: `https://your-project-name.vercel.app`

---

*For custom domain setup and advanced configurations, refer to Vercel's documentation.*
