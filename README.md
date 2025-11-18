# Vishvajit Ajit Jadhav - Portfolio Website

A modern, tech-oriented portfolio website built with React, showcasing skills, experience, projects, and education.

## Features

- 🎨 Modern, tech-oriented design with red accent colors
- 📱 Fully responsive layout
- ⚡ Smooth animations using Framer Motion
- 🎯 Clean and professional UI/UX
- 🚀 Built with React and Vite for fast performance

## Tech Stack

- **React 18** - UI library
- **Vite** - Build tool and dev server
- **Framer Motion** - Animation library
- **React Icons** - Icon library
- **CSS3** - Styling with custom properties

## Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

1. Clone the repository or navigate to the project directory
2. Install dependencies:

```bash
npm install
```

3. Add your profile image:
   - Place your profile image in `src/assets/profile.jpg`
   - Recommended size: 400x400px or larger, square aspect ratio

4. Start the development server:

```bash
npm run dev
```

5. Open your browser and navigate to `http://localhost:5173`

### Build for Production

```bash
npm run build
```

The built files will be in the `dist` directory.

### Preview Production Build

```bash
npm run preview
```

## Project Structure

```
MyPortfolio2025/
├── src/
│   ├── assets/
│   │   └── profile.jpg          # Your profile image
│   ├── components/
│   │   ├── Navbar.jsx           # Navigation component
│   │   ├── Hero.jsx             # Hero section
│   │   ├── About.jsx            # About section
│   │   ├── Skills.jsx           # Skills section
│   │   ├── Experience.jsx       # Experience section
│   │   ├── Projects.jsx         # Projects section
│   │   ├── Education.jsx        # Education section
│   │   └── Contact.jsx          # Contact section
│   ├── App.jsx                  # Main app component
│   ├── App.css                  # App styles
│   ├── main.jsx                 # Entry point
│   └── index.css                # Global styles
├── index.html                   # HTML template
├── package.json                 # Dependencies
├── vite.config.js               # Vite configuration
└── README.md                    # This file
```

## Customization

### Colors

Edit the CSS variables in `src/index.css`:

```css
:root {
  --primary-red: #dc2626;
  --dark-bg: #0a0a0a;
  /* ... other colors */
}
```

### Content

Update the content in each component file:
- Personal information: `src/components/Hero.jsx`
- About section: `src/components/About.jsx`
- Skills: `src/components/Skills.jsx`
- Experience: `src/components/Experience.jsx`
- Projects: `src/components/Projects.jsx`
- Education: `src/components/Education.jsx`
- Contact: `src/components/Contact.jsx`

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

This project is open source and available for personal use.

## Contact

**Vishvajit Ajit Jadhav**
- Email: vishvajitjadhav01@gmail.com
- Phone: +91 9767875421
- LinkedIn: [linkedin.com/in/vishvajit09](https://linkedin.com/in/vishvajit09)
- Location: Pune, Maharashtra, India

