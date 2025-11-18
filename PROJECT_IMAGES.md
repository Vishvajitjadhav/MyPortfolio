# Project Images Guide

## Current Setup

The portfolio currently uses placeholder images from Unsplash for the three projects:

1. **AI Interview & Resume Mentor** - Technology/AI themed image
2. **Zaminwala - Real Estate Platform** - Real estate/building themed image  
3. **AI Storyteller** - Technology/space themed image

## Replacing with Your Own Images

To use your own project screenshots or images:

1. **Place your images** in the `src/assets/projects/` directory:
   - `ai-interview-mentor.jpg` (or .png)
   - `zaminwala.jpg` (or .png)
   - `ai-storyteller.jpg` (or .png)

2. **Update the image paths** in `src/components/Projects.jsx`:

   Replace the Unsplash URLs with your local imports:
   
   ```javascript
   // At the top of Projects.jsx, add imports:
   import aiInterviewImage from '../assets/projects/ai-interview-mentor.jpg'
   import zaminwalaImage from '../assets/projects/zaminwala.jpg'
   import storytellerImage from '../assets/projects/ai-storyteller.jpg'
   
   // Then in the projects array, replace the image URLs:
   {
     // ... other properties
     image: aiInterviewImage,  // instead of the Unsplash URL
   }
   ```

## Image Recommendations

- **Format**: JPG or PNG
- **Size**: 800x600px or larger (16:9 or 4:3 aspect ratio works well)
- **File size**: Under 500KB for optimal loading
- **Content**: Screenshots of your projects, mockups, or relevant technology-themed images

## Alternative: Using Your Own URLs

If you prefer to host images elsewhere, simply replace the `image` property in the projects array with your image URL.

