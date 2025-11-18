# Resume Download Setup

## Adding Your Resume

1. **Place your resume PDF** in the `public/` directory
2. **Name it exactly**: `resume.pdf`
3. The download button in the Hero section will automatically work

## File Requirements

- **Format**: PDF (recommended)
- **File name**: Must be `resume.pdf`
- **Location**: `public/resume.pdf`

## Alternative: Custom Resume Name

If you want to use a different filename, update the download link in `src/components/Hero.jsx`:

```javascript
<a
  href="/your-resume-name.pdf"
  download="Vishvajit_Jadhav_Resume.pdf"
  className="btn-resume"
>
  <FaDownload /> Resume
</a>
```

The `download` attribute sets the filename when users download it.

