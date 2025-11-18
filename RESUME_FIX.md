# Resume PDF Fix

## Issue
The resume PDF is downloading but not opening because the placeholder file isn't a valid PDF.

## Solution

**You need to replace the placeholder with your actual resume PDF:**

1. **Delete the placeholder file** (already done)
2. **Add your actual resume PDF:**
   - Take your real resume PDF file
   - Copy it to the `public/` folder
   - **Rename it to exactly**: `resume.pdf`
   - Make sure it's a valid PDF file

3. **Verify it works:**
   - The file should be at: `public/resume.pdf`
   - It should be a real PDF (not a text file renamed)
   - Try opening it directly to make sure it's valid

## File Location
```
MyPortfolio2025/
└── public/
    └── resume.pdf  ← Your actual resume PDF goes here
```

## Testing
After adding your resume:
1. Run `npm run dev`
2. Click the "Resume" button in the Hero section
3. The PDF should download and open correctly

## Alternative: Use a Different File Name

If you want to use a different filename, update `src/components/Hero.jsx`:

```javascript
<a
  href="/your-actual-resume.pdf"  // Change this
  download="Vishvajit_Jadhav_Resume.pdf"
  className="btn-resume"
>
  <FaDownload /> Resume
</a>
```

**Important:** Make sure the file in `public/` matches the `href` path (without the leading `/`).

