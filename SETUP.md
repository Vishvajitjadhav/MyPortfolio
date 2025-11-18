# Quick Setup Guide

## Adding Your Profile Image

1. Place your profile image in the `src/assets/` directory
2. Name it `profile.jpg` (or update the import in `src/components/Hero.jsx`)
3. Open `src/components/Hero.jsx`
4. Find these lines near the top:
   ```javascript
   // import profileImage from '../assets/profile.jpg'
   const profileImage = null
   ```
5. Change them to:
   ```javascript
   import profileImage from '../assets/profile.jpg'
   // const profileImage = null
   ```

## Recommended Image Specifications

- **Format**: JPG or PNG
- **Size**: 400x400px or larger (square aspect ratio works best)
- **File size**: Under 500KB for optimal loading

## Running the Project

1. Install dependencies:
   ```bash
   npm install
   ```

2. Start development server:
   ```bash
   npm run dev
   ```

3. Open `http://localhost:5173` in your browser

## Building for Production

```bash
npm run build
```

The built files will be in the `dist` directory, ready to deploy!

