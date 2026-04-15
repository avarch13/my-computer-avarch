# My Computer - Avarch

A nostalgic Windows 95-style desktop interface built as a personal portfolio and showcase platform. Explore galleries, expositions, and multimedia content through draggable, resizable windows that mimic the classic Windows 95 aesthetic.

## Key Features

- **Windows 95 UI**: Authentic retro interface using 7.css framework
- **Draggable Windows**: All windows are fully draggable and resizable using React RND
- **Dynamic Backgrounds**: Context-aware background images that change based on current section
- **Multimedia Gallery**: Browse images, music, films, and other media collections
- **Exposition System**: Detailed content expositions with rich metadata
- **Responsive Design**: Works across different screen sizes while maintaining the retro feel

## Tech Stack

- **Frontend Framework**: React 19.2+
- **Build Tool**: Vite 8.0+
- **Styling**: 7.css (Windows 95 theme)
- **Window Management**: React RND (react-rnd) for draggable/resizable components
- **Deployment**: GitHub Pages via gh-pages
- **Language**: JavaScript (ES6+)
- **Package Manager**: npm

## Prerequisites

- Node.js 18 or higher
- npm (comes with Node.js)
- Git

## Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/avarch13/my-computer-avarch.git
cd my-computer-avarch
```

### 2. Install Dependencies

```bash
npm install
```

This will install all the required dependencies including React, Vite, 7.css, and react-rnd.

### 3. Development Server

Start the development server with hot reload:

```bash
npm run dev
```

The application will be available at `http://localhost:5173/my-computer-avarch/`

### 4. Build for Production

```bash
npm run build
```

This creates an optimized production build in the `dist/` directory.

### 5. Preview Production Build

```bash
npm run preview
```

## Project Structure

```
my-computer-avarch/
├── public/                 # Static assets
├── src/
│   ├── assets/            # Images, backgrounds, media files
│   │   ├── bg/            # Background images
│   │   ├── buttons/       # UI button images
│   │   └── [category]/    # Category-specific assets
│   ├── components/        # React components
│   │   ├── BackgroundImageComponent.jsx
│   │   ├── BackgroundWindow.jsx
│   │   ├── BasicWindow.jsx
│   │   ├── ButtonsSidebar.jsx
│   │   ├── ExpositionDetail.jsx
│   │   ├── ExpositionList.jsx
│   │   ├── GalleryComponent.jsx
│   │   ├── ImagePreview.jsx
│   │   └── templates/     # Exposition templates
│   ├── data/              # Static data files
│   │   ├── expositionData.js
│   │   └── galleryData.js
│   ├── App.jsx            # Main application component
│   ├── App.css            # Global styles
│   ├── index.css          # Additional styles
│   └── main.jsx           # Application entry point
├── package.json           # Dependencies and scripts
├── vite.config.js         # Vite configuration
└── README.md             # This file
```

## Architecture Overview

### Component Hierarchy

- **App.jsx**: Main container managing state and window routing
- **BackgroundWindow.jsx**: Desktop background with dynamic images
- **BasicWindow.jsx**: Base window component with drag/resize functionality
- **GalleryComponent.jsx**: Image gallery with preview capabilities
- **ExpositionList.jsx**: List view for exposition categories
- **ExpositionDetail.jsx**: Detailed view for individual expositions

### State Management

The application uses React's built-in `useState` for managing:
- Current active window/section
- Selected items in galleries/expositions
- Window positions and sizes

### Styling Approach

- **7.css**: Provides the core Windows 95 visual theme
- **Inline Styles**: Component-specific styling for dynamic behavior
- **CSS Classes**: Custom classes in `index.css` for consistent theming

### Window Management

All windows utilize **React RND** for:
- Dragging windows around the screen
- Resizing windows while maintaining aspect ratios
- Z-index management for window layering
- Boundary constraints to keep windows on screen

## Development Workflow

### Adding New Content

1. **Images/Media**: Place files in appropriate `src/assets/` subdirectories
2. **Exposition Data**: Update `src/data/expositionData.js` with new entries
3. **Gallery Data**: Modify `src/data/galleryData.js` for gallery content

### Component Development

- Use `BasicWindow` as the base for new window types
- Implement drag/resize using the `Rnd` component wrapper
- Follow the existing styling patterns with 7.css classes

### Testing Changes

```bash
# Run linting
npm run lint

# Build and preview
npm run build
npm run preview
```

## Deployment

The application is configured for deployment to GitHub Pages:

### Automatic Deployment

```bash
npm run deploy
```

This command:
1. Builds the project (`npm run build`)
2. Deploys to GitHub Pages using gh-pages

### Manual Deployment

If you prefer manual control:

```bash
npm run build
npm run predeploy  # Same as build
npx gh-pages -d dist
```

### Deployment Configuration

- **Base Path**: Set to `/my-computer-avarch/` in `vite.config.js`
- **Homepage**: Configured in `package.json` for GitHub Pages
- **Build Output**: `dist/` directory contains the production build

## Browser Support

- Modern browsers (Chrome, Firefox, Safari, Edge)
- ES6+ features required
- CSS Grid and Flexbox support needed

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## License

This project is private and for personal use.

## Acknowledgments

- **7.css**: For the beautiful Windows 95 styling
- **React RND**: For the drag-and-drop window functionality
- **Vite**: For the fast development experience
- **React**: For the component architecture
