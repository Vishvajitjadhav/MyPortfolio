# Contact Form Setup

## Current Implementation

The contact form currently uses a `mailto:` link which opens the user's default email client. This works but requires the user to have an email client configured.

## Better Options for Production

### Option 1: EmailJS (Recommended - Free)

1. Sign up at [EmailJS](https://www.emailjs.com/)
2. Create an email service (Gmail, Outlook, etc.)
3. Create an email template
4. Get your Public Key and Service ID

Then update `src/components/Contact.jsx`:

```javascript
// Install EmailJS: npm install @emailjs/browser
import emailjs from '@emailjs/browser'

const handleSubmit = async (e) => {
  e.preventDefault()
  setIsSubmitting(true)
  
  try {
    await emailjs.send(
      'YOUR_SERVICE_ID',
      'YOUR_TEMPLATE_ID',
      {
        from_name: formData.name,
        purpose: formData.purpose,
        message: formData.message,
        to_email: 'vishvajitjadhav01@gmail.com'
      },
      'YOUR_PUBLIC_KEY'
    )
    setSubmitStatus('success')
    setFormData({ name: '', purpose: '', message: '' })
  } catch (error) {
    setSubmitStatus('error')
  } finally {
    setIsSubmitting(false)
  }
}
```

### Option 2: Formspree (Easiest - Free)

1. Sign up at [Formspree](https://formspree.io/)
2. Create a new form
3. Get your form endpoint

Then update the form action in `src/components/Contact.jsx`:

```javascript
<form 
  className="contact-form" 
  action="https://formspree.io/f/YOUR_FORM_ID" 
  method="POST"
  onSubmit={handleSubmit}
>
```

### Option 3: Backend API

Create your own backend endpoint to handle form submissions and send emails using services like:
- SendGrid
- AWS SES
- Nodemailer (Node.js)

## Current Mailto Implementation

The current implementation uses `mailto:` which:
- ✅ Works immediately without setup
- ✅ No backend required
- ❌ Requires user to have email client
- ❌ Less professional

For a production site, I recommend EmailJS or Formspree for a better user experience.

