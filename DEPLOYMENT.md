# Vercel Deployment Guide

This guide will help you deploy your React Router v7 website to Vercel with analytics tracking.

## Prerequisites

- GitHub account
- Vercel account (free at [vercel.com](https://vercel.com))
- Your code pushed to a GitHub repository

## What's Already Configured

✅ **vercel.json** - Deployment configuration for React Router v7 SSR
✅ **Vercel Analytics** - Integrated into your app for visitor tracking
✅ **Build process** - Tested and working

## Step-by-Step Deployment

### 1. Push Your Code to GitHub

Make sure your latest changes are committed and pushed:

```bash
git add .
git commit -m "Add Vercel deployment configuration and analytics"
git push origin main
```

### 2. Deploy to Vercel

1. Go to [vercel.com](https://vercel.com) and sign up/login
2. Click "New Project"
3. Import your GitHub repository
4. Vercel will auto-detect React Router v7 settings
5. Click "Deploy"

### 3. Enable Analytics (After Deployment)

1. Go to your project dashboard on Vercel
2. Click on the "Analytics" tab
3. Click "Enable Analytics"
4. Analytics will start tracking visitors immediately

## Your Free Vercel URLs

After deployment, you'll get:
- **Production URL**: `https://your-project-name.vercel.app`
- **Preview URLs**: For each branch/PR

## Custom Domain (Optional)

### Low-Cost Domain Registrars:
- **Namecheap**: $8-12/year for .com
- **Porkbun**: $7-10/year for .com
- **Cloudflare Registrar**: ~$8/year for .com

### Adding Custom Domain:
1. Purchase domain from registrar
2. In Vercel dashboard → Settings → Domains
3. Add your domain
4. Update DNS settings as instructed by Vercel
5. SSL certificate is automatic and free

## Analytics Features

Your Vercel Analytics will track:
- **Page views**
- **Unique visitors**
- **Top pages**
- **Referrer sources**
- **Device/browser data**

Access analytics at: `https://vercel.com/[username]/[project]/analytics`

## Environment Variables (If Needed Later)

Add environment variables in Vercel dashboard:
1. Project Settings → Environment Variables
2. Add variables for production, preview, development

## Automatic Deployments

- **Main branch** → Production deployment
- **Other branches** → Preview deployments
- **Pull requests** → Preview deployments with unique URLs

## Cost Breakdown

- **Vercel Hosting**: Free (100GB bandwidth, 1000 serverless functions)
- **Analytics**: Free (basic visitor data)
- **Custom Domain**: ~$8/year (optional)
- **Total**: $0/month (or ~$0.67/month with custom domain)

## Troubleshooting

### Build Fails
- Check build logs in Vercel dashboard
- Ensure all dependencies are in package.json
- Test build locally: `npm run build`

### Analytics Not Working
- Check browser console for errors
- Ensure Analytics component is in Layout
- Wait 24 hours for data to appear

### Custom Domain Issues
- Verify DNS settings
- Check domain propagation (can take 24-48 hours)
- Ensure domain is pointing to Vercel nameservers

## Next Steps

1. Deploy to Vercel following steps above
2. Test your live site
3. Enable analytics in Vercel dashboard
4. (Optional) Purchase and configure custom domain
5. Share your new website!

## Support

- **Vercel Docs**: [vercel.com/docs](https://vercel.com/docs)
- **React Router Docs**: [reactrouter.com](https://reactrouter.com)
- **Vercel Analytics**: [vercel.com/docs/analytics](https://vercel.com/docs/analytics)
