# Premium Wall Calendar

An elegant, feature-rich wall calendar application built with modern web technologies. Plan your year with style, add notes, and visualize your schedule with a beautiful spiral-bound design.

![License](https://img.shields.io/badge/license-MIT-blue.svg)
![React](https://img.shields.io/badge/React-19.1.0-61DAFB?logo=react)
![TypeScript](https://img.shields.io/badge/TypeScript-5-3178C6?logo=typescript)
![Vite](https://img.shields.io/badge/Vite-Latest-646CFF?logo=vite)

## ✨ Features

- **📅 Interactive Calendar View** - Beautiful month-by-month calendar navigation
- **📝 Notes Panel** - Add detailed notes and reminders for specific dates
- **🎨 Elegant UI** - Premium design with smooth animations and transitions
- **📱 Responsive Design** - Works seamlessly on desktop and tablet devices
- **🔄 Smooth Animations** - Framer Motion powered transitions for delightful UX
- **📋 Spiral Binding Design** - Authentic wall calendar aesthetic with spiral binding visualization
- **⚡ Lightning Fast** - Built with Vite for optimal performance
- **🎯 Type Safe** - Full TypeScript support for robust development

## 🚀 Quick Start

### Prerequisites

- Node.js 16+ or npm/yarn
- Git (for cloning the repository)

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd Wall_Calendar
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Start development server**
   ```bash
   npm run dev
   # or
   yarn dev
   ```

   The application will open at `http://localhost:5173`

### Build for Production

```bash
npm run build
# or
yarn build
```

Output files will be in the `dist/` directory.

## 📖 Usage

### Development

Start the development server with hot module replacement:

```bash
npm run dev
```

### Linting

Check code quality:

```bash
npm run lint
```

### Preview Build

Preview the production build locally:

```bash
npm run preview
```

## 🏗️ Project Structure

```
Wall-Calendar/
├── src/
│   ├── components/
│   │   ├── Calendar.tsx           # Main calendar component
│   │   ├── CalendarGrid.tsx       # Grid layout for dates
│   │   ├── DayCell.tsx            # Individual day cell
│   │   ├── HeroSection.tsx        # Hero/header section
│   │   ├── NotesPanel.tsx         # Notes sidebar
│   │   └── SpiralBinding.tsx      # Decorative spiral binding
│   ├── utils/
│   │   └── cn.ts                  # Utility functions
│   ├── App.tsx                    # Root component
│   ├── main.tsx                   # Entry point
│   └── index.css                  # Global styles
├── public/                        # Static assets
├── index.html                     # HTML template
├── package.json                   # Dependencies & scripts
├── tailwind.config.js             # Tailwind CSS config
├── tsconfig.json                  # TypeScript config
└── vite.config.ts                 # Vite config
```

## 🛠️ Tech Stack

- **Frontend Framework**: React 19.1.0
- **Language**: TypeScript 5
- **Build Tool**: Vite
- **Styling**: Tailwind CSS + PostCSS
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Date Utilities**: date-fns
- **HTTP Client**: Axios
- **Utilities**: clsx, tailwind-merge

## 📦 Available Scripts

| Script | Description |
|--------|-------------|
| `npm run dev` | Start development server with HMR |
| `npm run build` | Build for production |
| `npm run preview` | Preview production build |
| `npm run lint` | Run ESLint to check code quality |

## 🎨 Customization

### Colors & Styling

Update Tailwind configuration in `tailwind.config.js` to customize colors, fonts, and breakpoints.

### Calendar Behavior

Modify `src/components/Calendar.tsx` to change calendar logic, date handling, or navigation.

### Notes Storage

Currently notes are stored in component state. To persist data, integrate with:
- Local Storage
- IndexedDB
- Backend API
- Firebase Firestore

## 🔧 Development Guidelines

- **Code Format**: ESLint configured with React and TypeScript rules
- **Component Style**: Functional components with hooks
- **Styling**: Utility-first CSS with Tailwind
- **Type Safety**: Strict TypeScript mode enabled
- **Performance**: React Strict Mode enabled for development

## 📱 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## 📄 License

This project is licensed under the MIT License. See the LICENSE file for details.

## 🤝 Contributing

Contributions are welcome! To contribute:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit changes (`git commit -m 'Add amazing feature'`)
4. Push to branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 🐛 Issue Reporting

Found a bug? Please create an issue on GitHub with:
- Clear description of the problem
- Steps to reproduce
- Expected vs actual behavior
- Screenshots (if applicable)

## 📞 Support

For support or questions, please open an issue in the repository or contact the development team.

## 🙏 Acknowledgments

- Built with [React](https://react.dev) and [Vite](https://vitejs.dev)
- Styled with [Tailwind CSS](https://tailwindcss.com)
- Animated with [Framer Motion](https://www.framer.com/motion)

---

**Made with ❤️**
    
