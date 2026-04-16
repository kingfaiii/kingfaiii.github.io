# Portfolio Setup & Customization Guide

## Quick Start

### 1. Development
```bash
npm install  # Install dependencies
npm run dev  # Start development server (http://localhost:5174)
```

### 2. Production Build
```bash
npm run build   # Build for production
npm run deploy  # Deploy to GitHub Pages
```

---

## 🎨 Customizing Your Portfolio

### Update Personal Information

#### Navbar Branding
**File**: `src/components/Navbar.jsx`
```jsx
// Change logo initials and name
<div className="w-10 h-10 bg-gradient-to-br from-sky-500 to-cyan-500 rounded-lg flex items-center justify-center text-white font-bold text-lg">
  KF // Change to your initials
</div>
<span>Your Name Here</span>
```

#### Home Page Content
**File**: `src/components/HeroSection.jsx`
```jsx
// Update hero title and description
<h1>Build Digital<br /><span className="text-custom">Excellence</span></h1>
<p>I'm a Full-Stack Developer specializing in creating beautiful, performant web applications...</p>

// Update your skills
{['React', 'Node.js', 'TypeScript', 'Tailwind CSS', 'MongoDB'].map((skill) => ...)}
```

#### About Page
**File**: `src/views/About.jsx`
```jsx
// Update bio and professional description
const experiences = [
  {
    title: 'Senior Full-Stack Developer',
    company: 'Your Company',
    location: 'Your Location',
    period: 'Your Timeline',
    description: 'Your description...',
    achievements: ['Achievement 1', 'Achievement 2', ...]
  }
];
```

#### Portfolio Projects
**File**: `src/views/Portfolio.jsx`
```jsx
const projects = [
  {
    id: 1,
    title: 'Your Project Title',
    description: 'Project description here...',
    tags: ['React', 'Node.js', 'MongoDB'],
    category: 'fullstack',  // 'frontend', 'backend', or 'fullstack'
    image: 'https://your-image-url.com/image.jpg',
    link: 'https://your-project-link.com',
    github: 'https://github.com/yourusername/repo',
  },
  // Add more projects...
];
```

#### Contact Information
**File**: `src/views/Contact.jsx`
```jsx
const contactMethods = [
  {
    icon: Mail,
    label: 'Email',
    value: 'your@email.com',
    link: 'mailto:your@email.com',
  },
  {
    icon: Phone,
    label: 'Phone',
    value: '+1 (123) 456-7890',
    link: 'tel:+11234567890',
  },
  // Update social links...
];
```

---

## 🎨 Theming & Colors

### Change Primary Color Scheme
**File**: `tailwind.config.js`
```javascript
colors: {
  primary: {
    50: '#f0f9ff',
    100: '#e0f2fe',
    500: '#0ea5e9',  // Change primary color
    600: '#0284c7',  // Change hover color
    // ... other shades
  },
}
```

### Change CSS Variables
**File**: `src/index.css`
```css
:root {
  --primary-color: #0ea5e9;        /* Change main color */
  --primary-dark: #0284c7;         /* Change dark variant */
  --bg-light: #ffffff;             /* Change light background */
  --bg-dark: #050912;              /* Change dark background */
  /* ... other variables ... */
}
```

---

## 🎬 Animation Customization

### Scroll Reveal Animation
**File**: `src/hooks/useAnimations.js`
```javascript
export const useScrollReveal = (options = {}) => {
  // Customize animation timing
  anime({
    targets: entry.target,
    opacity: [0, 1],
    translateY: [40, 0],        // Change distance: [from, to]
    duration: 800,              // Change duration (ms)
    easing: 'easeOutExpo',      // Change easing function
    ...options,
  });
};
```

### Count-Up Animation
**File**: `src/hooks/useAnimations.js`
```javascript
export const useCountUp = (targetValue, duration = 2000) => {
  // Customize counter animation
  anime({
    targets: { value: 0 },
    value: targetValue,
    duration: 2000,             // Change animation duration
    easing: 'easeOutExpo',      // Change easing function
    // ...
  });
};
```

### Parallax Effect
**File**: `src/hooks/useAnimations.js`
```javascript
export const useParallaxScroll = () => {
  anime.set(ref.current, {
    translateY: distance * 0.5,  // Change multiplier (0.3 = more parallax effect)
    duration: 0,
  });
};
```

---

## 🎨 Component Styling

### Card Component Styling
**File**: `src/index.css`
```css
.card {
  background: var(--card-light);
  border: 1px solid var(--border-light);
  border-radius: 12px;                /* Change border radius */
  padding: 24px;                      /* Change padding */
  transition: all 0.4s cubic-bezier(...);  /* Change animation */
}

.card:hover {
  transform: translateY(-8px);        /* Change hover distance */
  border-color: var(--primary-color);
  box-shadow: 0 12px 24px rgba(...);  /* Change shadow */
}
```

### Button Styling
Update button styles in any component:
```jsx
<button className="px-8 py-3 bg-gradient-to-r from-sky-500 to-cyan-500 
                   text-white font-semibold rounded-lg 
                   hover:shadow-lg hover:shadow-sky-500/50">
  Your Button Text
</button>
```

---

## 📱 Responsive Design Classes

Common responsive patterns used in portfolio:

```jsx
// Mobile first with responsive overrides
<div className="px-4 sm:px-6 lg:px-8">          {/* Padding */}
<div className="text-2xl md:text-4xl lg:text-6xl"> {/* Font sizes */}
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3"> {/* Grid */}
<div className="hidden md:flex">                  {/* Show on desktop only */}
<div className="md:hidden">                       {/* Show on mobile only */}
```

---

## 🔗 API Integration

### Connect Contact Form
**File**: `src/views/Contact.jsx`

Replace form submission handler:
```javascript
const handleSubmit = async (e) => {
  e.preventDefault();
  setIsSubmitting(true);

  try {
    // Replace with your API endpoint
    const response = await fetch('https://your-api.com/contact', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formState)
    });

    if (response.ok) {
      setSubmitStatus('success');
      setFormState({ name: '', email: '', subject: '', message: '' });
    }
  } catch (error) {
    setSubmitStatus('error');
  }
  setIsSubmitting(false);
};
```

---

## 📸 Adding Images

### Hero Background
**File**: `src/components/HeroSection.jsx`
```jsx
// Gradient background already handled with CSS
// Custom background image option:
<div className="absolute inset-0" style={{
  backgroundImage: 'url(your-image-url)',
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  opacity: 0.1
}} />
```

### Project Images
**File**: `src/views/Portfolio.jsx`
```jsx
// Images use Unsplash by default, replace with your own:
image: 'https://your-domain.com/project-1.jpg'
```

---

## ✨ Advanced Customization

### Add New Animation Hook
**Create**: `src/hooks/useCustomAnimation.js`
```javascript
import { useEffect, useRef } from 'react';
import anime from 'animejs';

export const useCustomAnimation = (options = {}) => {
  const ref = useRef(null);

  useEffect(() => {
    if (ref.current) {
      anime({
        targets: ref.current,
        // Your animation properties
        ...options,
      });
    }
  }, [options]);

  return ref;
};
```

### Add New Theme
Update `src/index.css`:
```css
body.theme-sunset {
  --primary-color: #ff6b35;
  --primary-dark: #d84315;
  --bg-light: #fff8f3;
  --bg-dark: #1a1410;
}
```

### Add Loading States
Wrap async components with Suspense:
```jsx
import { Suspense } from 'react';

<Suspense fallback={<div>Loading...</div>}>
  <LazyComponent />
</Suspense>
```

---

## 🚀 Performance Optimization

### Image Optimization
```jsx
<img
  src={image}
  alt="description"
  loading="lazy"           // Lazy load images
  onError={(e) => {
    e.target.style.display = 'none'; // Hide broken images
  }}
/>
```

### Code Splitting
Components are automatically split by Vite. Add explicit chunks:
```jsx
// In routes
const Portfolio = lazy(() => import('./views/Portfolio'));
```

### Animation Performance
Use RAF (Requestanimationframe) for smooth animations:
```javascript
anime.timeline({
  autoplay: true,
  update: () => requestAnimationFrame(() => {
    // Update happens efficiently
  })
});
```

---

## 🐛 Troubleshooting

### Dark Mode Not Working
- Check localStorage: `localStorage.setItem('darkMode', true)`
- Verify DarkModeProvider is wrapping app in main.jsx
- Clear browser cache and localStorage

### Animations Not Smooth
- Check if animations are enabled: `prefers-reduced-motion`
- Reduce animation complexity on slower devices
- Verify anime.js is properly installed

### 3D Canvas Issues
- Check WebGL support: `http://get.webgl.org/`
- Verify Three.js version matches @react-three/fiber
- Test in different browser

### Responsive Issues
- Test with Chrome DevTools
- Check Tailwind breakpoints match design
- Verify mobile viewport meta tag in index.html

---

## 📚 Useful Resources

- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [Framer Motion Guide](https://www.framer.com/motion/)
- [Anime.js Documentation](https://animejs.com/documentation/)
- [Three.js Documentation](https://threejs.org/docs/)
- [React Three Fiber Docs](https://docs.pmnd.rs/react-three-fiber/)
- [Lucide React Icons](https://lucide.dev/)

---

## 📦 Deployment Checklist

- [ ] Update all personal information
- [ ] Replace placeholder images
- [ ] Test all dark mode functionality
- [ ] Test on mobile devices
- [ ] Test animation performance
- [ ] Update meta tags (favicon, title, description)
- [ ] Connect contact form to backend
- [ ] Enable HTTPS
- [ ] Set up analytics
- [ ] Test on multiple browsers
- [ ] Optimize metadata for SEO

---

## 📞 Support

For issues or questions:
1. Check component documentation in files
2. Review Tailwind CSS documentation
3. Check animation hook implementations
4. Test in browser console for errors

Happy customizing! 🎉
