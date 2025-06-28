# 🚀 Shabi's Portfolio Website

A stunning, modern web developer portfolio built with React and Tailwind CSS. Features smooth animations, interactive elements, and a professional design that showcases skills and projects effectively.

## ✨ Features

### 🎨 Design & UX
- **Modern Dark Theme** with gradient accents (blue, purple, teal, orange)
- **3D-like Visuals** with floating elements and parallax effects
- **Smooth Animations** including scroll-triggered and hover animations
- **Fully Responsive** design for all screen sizes
- **Glass Morphism** effects throughout the interface

### 🧩 Components
- **Navbar** - Sticky navigation with smooth scroll and mobile menu
- **Hero Section** - Animated gradient background with 3D code block
- **About Section** - Professional photo with feature highlights
- **Skills Section** - Interactive skill bars with hover effects
- **Projects Section** - Project cards with modal details
- **Contact Section** - Form with validation and social links

### 🛠️ Technical Features
- **React Hooks** (useState, useEffect, useRef)
- **Tailwind CSS** for styling and animations
- **Lucide React** for beautiful icons
- **Form Validation** with custom error handling
- **Modal System** for project details
- **Smooth Scrolling** navigation
- **PWA Ready** with service worker

## 🚀 Getting Started

### Prerequisites
- Node.js (v14 or higher)
- pnpm (recommended) or npm

### Installation

1. **Clone the repository**
   ```bash
   git clone <your-repo-url>
   cd portfolio
   ```

2. **Install dependencies**
   ```bash
   pnpm install
   # or
   npm install
   ```

3. **Start the development server**
   ```bash
   pnpm start
   # or
   npm start
   ```

4. **Open your browser**
   Navigate to `http://localhost:3000`

## 📁 Project Structure

```
src/
├── components/
│   ├── Navbar.jsx          # Navigation component
│   ├── Hero.jsx           # Hero section with animations
│   ├── About.jsx          # About section
│   ├── Skills.jsx         # Skills with interactive bars
│   ├── Projects.jsx       # Projects grid with modals
│   └── Contact.jsx        # Contact form with validation
├── App.js                 # Main app component
├── index.css              # Global styles and Tailwind
└── index.js               # App entry point
```

## 🎯 Customization

### Personal Information
Update the following in the components:

1. **Hero.jsx** - Change name and tagline
2. **About.jsx** - Update photo URL and description
3. **Skills.jsx** - Modify skill levels and categories
4. **Projects.jsx** - Add your own projects
5. **Contact.jsx** - Update contact information and social links

### Styling
- **Colors**: Modify the color palette in `tailwind.config.js`
- **Fonts**: Update Google Fonts import in `index.css`
- **Animations**: Customize keyframes in `tailwind.config.js`

### Content
- **Projects**: Add your real projects with images and links
- **Skills**: Update with your actual skill levels
- **Contact**: Replace placeholder contact information
- **Social Links**: Update GitHub, LinkedIn, and other social media links

## 🎨 Design System

### Color Palette
- **Primary**: Blue gradient (#3b82f6 to #8b5cf6)
- **Accent Colors**: Purple (#8b5cf6), Teal (#14b8a6), Orange (#f97316)
- **Background**: Dark gray (#111827)
- **Text**: White and gray variations

### Typography
- **Primary Font**: Inter (Google Fonts)
- **Secondary Font**: Montserrat (for headings)

### Animations
- **Fade In**: 0.5s ease-in-out
- **Slide Up**: 0.5s ease-out
- **Float**: 6s ease-in-out infinite
- **Gradient**: 15s ease infinite

## 📱 Responsive Breakpoints

- **Mobile**: < 768px
- **Tablet**: 768px - 1024px
- **Desktop**: > 1024px

## 🚀 Deployment

### Build for Production
```bash
pnpm build
# or
npm run build
```

### Deploy Options
- **Vercel**: Connect your GitHub repository
- **Netlify**: Drag and drop the build folder
- **GitHub Pages**: Use gh-pages package
- **Firebase**: Use Firebase Hosting

## 🔧 Available Scripts

- `pnpm start` - Start development server
- `pnpm build` - Build for production
- `pnpm test` - Run tests
- `pnpm eject` - Eject from Create React App

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📞 Support

If you have any questions or need help customizing the portfolio, feel free to reach out!

---

**Built with ❤️ using React & Tailwind CSS** 