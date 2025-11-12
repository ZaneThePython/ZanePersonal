# ZanePersonal

A modern, interactive personal website showcasing creative web development and design. Available at [https://zane.org](https://zane.org)

## 🎯 Purpose

This personal website serves as:

- A creative portfolio and personal brand showcase
- An experimental playground for modern web technologies
- A demonstration of interactive UI/UX design principles
- A learning platform for exploring cutting-edge web features

## ✨ Features

### Visual Effects

- **Matrix Rain Background** - Animated character rainfall effect
- **Custom Cursor** - Interactive cursor with trailing particles
- **Mouse Trail Effects** - Particle system following cursor movement
- **Glitch Effects** - Periodic text glitching animations
- **Interactive Background** - Particle network with connection lines

### User Experience

- **Smooth Animations** - Staggered entrance animations for all elements
- **Sound Effects** - Audio feedback for interactions (can be browser intensive)
- **Easter Eggs** - Hidden features and secret interactions:
  - Konami Code activation
  - Avatar click counter
  - "ZANE" keyboard sequence
  - Double-click brand name glitch
- **Micro-interactions** - Magnetic button effects, tilt animations, ripple effects
- **Responsive Design** - Optimized for all screen sizes

### Technical Features

- **Fully Static** - Compatible with cheap hosting platforms (no backend required)
- **Modular Architecture** - Well-organized code split into logical modules
- **Performance Optimized** - Minified assets and efficient animations
- **SEO Enhanced** - Proper meta tags, structured data, sitemap
- **Accessible** - Semantic HTML, ARIA labels, keyboard navigation
- **Open Source** - MIT licensed for learning and inspiration

## 🛠 Tech Stack

### Core Technologies

- **HTML5** - Semantic markup with proper accessibility attributes
- **CSS3** - Modern features including custom properties, animations, and grid
- **JavaScript (ES6+)** - Modular architecture using ES modules

### Development Tools

- **Vite** - Fast build tool and development server
- **ESLint** - Code quality and consistency checking
- **Prettier** - Automated code formatting
- **Imagemin** - Image optimization

### Libraries & APIs

- **Web Audio API** - For sound effect generation
- **Canvas API** - For particle effects and visual animations
- **Intersection Observer API** - For scroll-based animations

## 📁 Project Structure

```
ZanePersonal/
├── assets/
│   ├── css/
│   │   └── styles.css           # Main stylesheet with design tokens
│   ├── js/
│   │   ├── main.js              # Application entry point
│   │   └── modules/
│   │       ├── animations.js    # Animation utilities
│   │       ├── dom.js           # DOM manipulation helpers
│   │       ├── easter-eggs.js   # Hidden features
│   │       ├── effects.js       # Visual effects (particles, cursor, etc.)
│   │       ├── interactions.js  # UI micro-interactions
│   │       └── sound.js         # Sound effects
│   └── images/
│       └── Zane.jpg             # Profile image
├── index.html                   # Main HTML file
├── robots.txt                   # Search engine directives
├── sitemap.xml                  # Site structure for SEO
├── LICENSE                      # MIT License
├── package.json                 # Project dependencies
├── .eslintrc.json              # ESLint configuration
├── .prettierrc.json            # Prettier configuration
└── README.md                    # This file
```

## 🚀 Getting Started

### Prerequisites

- Node.js 16+ and npm

### Installation

1. Clone the repository:

```bash
git clone https://github.com/ZaneThePython/ZanePersonal.git
cd ZanePersonal
```

2. Install dependencies:

```bash
npm install
```

3. Start development server:

```bash
npm run dev
```

4. Open your browser to `http://localhost:5173`

### Building for Production

```bash
npm run build
```

The optimized files will be in the `dist/` directory.

## 🧪 Development

### Code Quality

- **Linting**: `npm run lint`
- **Formatting**: `npm run format`
- **Format Check**: `npm run format:check`

### Performance Budget

Target metrics:

- Total page size: <150KB (compressed)
- First Contentful Paint: <1.5s
- Time to Interactive: <3.5s
- Lighthouse Score: >90

## 🤝 Contributing

While this is a personal project, suggestions and feedback are welcome! Feel free to:

- Open an issue for bugs or feature requests
- Submit a pull request for improvements
- Star the repository if you find it interesting

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- Font: [Inter](https://fonts.google.com/specimen/Inter) by Rasmus Andersson
- Inspiration from various creative developer portfolios
- Built with ☕ and countless hours of experimentation

## 📬 Contact

- Email: [contact@zane.org](mailto:contact@zane.org)
- GitHub: [@ZaneThePython](https://github.com/ZaneThePython)
- Website: [https://zane.org](https://zane.org)

---

**Note:** This website is not FDA approved (because websites don't need FDA approval, obviously! 😄)

_Last updated: November 2025_
