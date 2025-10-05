# GitHub Pages Setup Guide

## Quick Setup Steps

1. **Create a GitHub Repository**:
   - Go to GitHub.com and create a new repository
   - Name it whatever you want (e.g., "internconnect-demo")
   - Make it public
   - Initialize with README

2. **Upload the Login Page**:
   - Upload the `index.html` file to your repository root
   - This will be your main login page

3. **Enable GitHub Pages**:
   - Go to your repository → Settings
   - Scroll down to "Pages" section
   - Under "Source", select "Deploy from a branch"
   - Select "main" branch and "/ (root)" folder
   - Click "Save"

4. **Access Your Site**:
   - Your site will be available at: `https://yourusername.github.io/repositoryname/`
   - It will show the login page immediately

## What You Get

✅ **Immediate Login Page**: No redirects needed - the login page loads directly
✅ **Demo Credentials**: 4 different user types with working authentication
✅ **Responsive Design**: Works on desktop and mobile
✅ **Professional UI**: Clean, modern interface using Tailwind CSS
✅ **Interactive Features**: Password toggle, form validation, loading states

## Demo Accounts Available

| Role | Email | Password | Description |
|------|-------|----------|-------------|
| Admin | admin@university.edu | admin123 | System administration |
| Industry | hr@techcorp.com | industry123 | Company HR portal |
| Student | john.doe@student.edu | student123 | Student dashboard |
| Staff | sarah.johnson@staff.edu | staff123 | Faculty/staff portal |

## Next Steps

Once you have the basic login working, you can:
1. Create separate dashboard pages for each role
2. Add more functionality
3. Connect to a real backend
4. Add more styling and features

## File Structure

```
your-repo/
├── index.html          # Main login page (this file)
├── README.md          # Repository documentation
└── (other files as needed)
```

This approach is much simpler than the Next.js setup and will work immediately on GitHub Pages!
