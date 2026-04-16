# Modern Web Developer Portfolio

A professional, modern portfolio website for web developers featuring cutting-edge technologies and design principles.

## 🎨 Key Features

### 1. **Dark Mode with Smooth Transitions**
- ✅ Context-based dark mode implementation
- ✅ Persistent theme preference (localStorage)
- ✅ Smooth color transitions across all components
- ✅ System-wide dark/light mode support
- **Location**: `src/context/DarkModeContext.jsx`

### 2. **Advanced Scrolling Effects (Anime.js)**
- ✅ **Scroll Reveal**: Elements fade in and slide up on scroll
- ✅ **Count-up Animations**: Stats counter animations
- ✅ **Parallax Scrolling**: Background elements move at different speeds
- ✅ **Mouse Glow Effects**: Interactive glow following mouse movement
- **Location**: `src/hooks/useAnimations.js`

### 3. **3D Portfolio Elements**
- ✅ 3D animated sphere in hero section
- ✅ Distortion and wireframe materials
- ✅ Rotation and lighting effects
- ✅ Interactive orbit controls
- **Technologies**: Three.js, React Three Fiber, Drei
- **Location**: `src/components/HeroCanvas.jsx`

### 4. **Professional UI/UX Design**
- ✅ Modern gradient color scheme (Sky Blue & Cyan)
- ✅ Responsive grid layouts
- ✅ Smooth hover effects
- ✅ Accessibility-first approach
- ✅ Beautiful typography hierarchy

### 5. **Component Library with Lucide React Icons**
- ✅ Professional icon set throughout
- ✅ Consistent icon styling
- ✅ Semantic icon usage
- ✅ 400+ icon options available

## 📁 Project Structure

```
src/
├── components/
│   ├── Navbar.jsx              # Professional navigation with dark mode toggle
│   ├── HeroCanvas.jsx          # 3D Canvas component
│   ├── HeroSection.jsx         # Hero section with animations
│   ├── StatsSection.jsx        # Statistics with count-up animations
│   └── [Other components]
├── context/
│   └── DarkModeContext.jsx     # Dark mode context provider
├── hooks/
│   └── useAnimations.js        # Custom animation hooks
├── views/
│   ├── Home.jsx                # Enhanced home page
│   ├── About.jsx               # Professional about page
│   ├── Portfolio.jsx           # Project showcase with filters
│   ├── Experience.jsx          # Timeline view of experience
│   ├── Skills.jsx              # Skill proficiency levels
│   └── Contact.jsx             # Contact form & links
├── App.jsx                     # Main app component
├── main.jsx                    # Entry point with providers
└── index.css                   # Global styles with dark mode support
```

## 🚀 Getting Started

### Installation

```bash
# Install dependencies
npm install

# Install additional packages (already included)
npm install animejs lucide-react three @react-three/fiber @react-three/drei

# Start development server
npm run dev

# Build for production
npm run build
```

### Development Server

The portfolio runs on `http://localhost:5174` by default.

## 🎯 Page Descriptions

### Home Page
- **Hero Section**: Eye-catching 3D animated sphere with introduction
- **Stats Section**: Count-up animations for projects, clients, and experience
- **Features Section**: Key services and expertise highlighted
- **CTA Section**: Call-to-action button for engagement

### About Page
- Professional bio and background
- Core skills grid
- Statistics overview
- Social media links
- Contact CTAs

### Portfolio Page
- **Project Grid**: 3x responsive grid layout
- **Filter System**: Filter projects by category (All, Frontend, Backend, Full Stack)
- **Hover Effects**: Image scaling and action buttons on hover
- **Project Tags**: Technology stack display for each project
- **Smooth Animations**: Staggered fade-in animations

### Experience Page
- **Timeline Layout**: Alternating timeline view
- **Timeline Dots**: Interactive animated dots
- **Experience Cards**: Detailed role information
- **Achievements List**: Key accomplishments for each role
- **Period & Location**: Job details with icons

### Skills Page
- **Skill Categories**: 6 categories (Frontend, Backend, Database, DevOps, Other, Soft Skills)
- **Progress Bars**: Animated skill level indicators
- **Proficiency Legend**: Color-coded proficiency guide
- **Responsive Grid**: Works on all screen sizes

### Contact Page
- **Contact Methods**: Email, phone, location with icons
- **Contact Form**: Name, email, subject, message fields
- **Form Validation**: Built-in HTML5 validation
- **Success Messages**: Feedback on form submission
- **Social Links**: Quick access to social media profiles

## 🎨 Design System

### Color Palette
- **Primary**: Sky Blue (`#0ea5e9`)
- **Secondary**: Cyan (`#06b6d4`)
- **Dark Background**: `#050912`
- **Light Background**: `#ffffff`
- **Card Background (Dark)**: `#1f2937`
- **Card Background (Light)**: `#f3f4f6`

### Typography
- **Font**: Inter (body text)
- **Title Font**: Space Mono (headings)
- **Font Sizes**: Scales responsively from mobile to desktop

### Animations
- **Fade In**: 0.6s ease-out
- **Slide Up**: 0.6s ease-out, 30px travel
- **Count Up**: Custom duration (default 2s)
- **Hover Effects**: Smooth scale and shadow transitions

## 🛠️ Technologies Used

| Category | Technology |
|----------|-----------|
| **Framework** | React 18 |
| **Build Tool** | Vite 4 |
| **Styling** | Tailwind CSS 3 |
| **Animations** | Framer Motion, Anime.js |
| **3D Graphics** | Three.js, React Three Fiber |
| **Icons** | Lucide React |
| **Routing** | React Router v6 |
| **State Management** | React Context API |

## 📱 Responsive Design

- **Mobile**: Optimized for phones (320px+)
- **Tablet**: Tablet layout improvements (768px+)
- **Desktop**: Full-width desktop experience (1024px+)
- **Large Screens**: Maximum width container (1280px)

## ✨ Key Highlights

### Performance
- Lazy loading for images
- Optimized animations with Anime.js
- Efficient re-renders with React
- Code splitting with Vite

### Accessibility
- Semantic HTML
- ARIA labels where needed
- Keyboard navigation support
- High contrast dark mode

### SEO
- Semantic structure
- Meta descriptions (ready to add)
- Performance optimized
- Mobile-friendly

## 🔧 Customization Guide

### Change Colors
Edit `tailwind.config.js`:
```javascript
colors: {
  primary: {
    500: '#your-color',
    600: '#your-darker-color',
  }
}
```

### Update Projects
Edit `src/views/Portfolio.jsx` and update the `projects` array with your work.

### Modify Animations
Edit `src/hooks/useAnimations.js` to customize animation behaviors.

### Change Theme Colors
Edit `src/index.css` CSS variables in `:root` and `body.dark` selectors.

## 📊 Stats Component

The stats section uses custom `useCountUp` hook that:
- Triggers on scroll visibility
- Animates from 0 to target value
- Uses Intersection Observer API
- Supports custom duration

## 🎬 Animation Hooks

### useScrollReveal
```javascript
const ref = useScrollReveal(options);
// Elements fade in and slide up on scroll
```

### useCountUp
```javascript
const ref = useCountUp(targetValue, duration);
// Animates counting from 0 to target value
```

### useParallaxScroll
```javascript
const ref = useParallaxScroll();
// Creates parallax effect on scroll
```

### useMouseGlow
```javascript
const ref = useMouseGlow();
// Creates glow effect following mouse movement
```

## 🚀 Deployment

### Build and Deploy

```bash
# Build for production
npm run build

# Deploy to GitHub Pages
npm run deploy

# Or deploy to Vercel/Netlify
# Push to repository and connect deployment service
```

## 📝 Notes

- All components are fully responsive
- Dark mode automatically persists across sessions
- Animations respect `prefers-reduced-motion` for accessibility
- Portfolio uses Tailwind CSS for all styling
- No external CSS frameworks required

## 🤝 Future Enhancements

- [ ] Add blog section
- [ ] Implement email contact form integration
- [ ] Add more interactive 3D elements
- [ ] Add testimonials section
- [ ] Implement dark mode schedule (system time)
- [ ] Add service packages section
- [ ] Add client case studies
- [ ] Multilingual support

## 📞 Support

For issues or questions about the portfolio, please refer to component documentation in their respective files.

---

**Created with ❤️ - A Modern Web Developer Portfolio**
