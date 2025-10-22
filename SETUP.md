# Local Development Setup

## Prerequisites
- Node.js 22.x or higher ([Download here](https://nodejs.org/))
- npm (comes with Node.js)

## Installation Steps

1. **Clone the repository** (if you haven't already)
   ```bash
   git clone <your-repo-url>
   cd my-personal-page
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```
   This will install all packages defined in package.json (~398 packages)

3. **Run development server**
   ```bash
   npm run dev
   ```
   Open http://localhost:3000 in your browser

4. **Build for production**
   ```bash
   npm run build
   ```

5. **Test production build locally**
   ```bash
   npm run start
   ```

## Common Issues

### "next: command not found"
**Solution:** Run `npm install` first

### "Node version mismatch"
**Solution:** Upgrade to Node.js 22+
```bash
# Check your Node version
node --version

# If using nvm:
nvm install 22
nvm use 22
```

### Port already in use
**Solution:** Use a different port
```bash
npm run dev -- -p 3001
```

## Available Scripts

- `npm run dev` - Start development server with hot reload
- `npm run build` - Build production bundle
- `npm run start` - Run production server
- `npm run lint` - Run ESLint

## Tech Stack

- Next.js 15.5.6
- React 19.1.0
- TypeScript 5
- Tailwind CSS 3.4.18
- shadcn/ui components
- Vercel Analytics

## Customization

1. **Update your info**: Search and replace "Your Name" in all files
2. **Change colors**: Edit `tailwind.config.ts`
3. **Add books**: Modify `lib/data/books.ts`
4. **Update LinkedIn**: Change URL in `app/page.tsx`

## Deployment

This project is configured for Vercel:
1. Push to GitHub
2. Connect repository in Vercel dashboard
3. Deploy automatically

For other platforms, run `npm run build` and serve the `.next` directory.
