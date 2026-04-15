# My Computer - Avarch

A Windows 7-style desktop interface built as a personal portfolio and blog. Explore galleries, expositions, and multimedia content through draggable windows that mimic the classic Windows 7 aesthetic.

## Key Features

- **Windows 7 UI**: Authentic retro interface using 7.css framework
- **Draggable Windows**: All windows are fully draggable using React RND
- **Dynamic Backgrounds**: Context-aware background images that change based on current section
- **Multimedia Gallery**: Browse images, music, films, and other media collections
- **Exposition System**: Detailed content expositions with rich metadata
- **Responsive Design**: Works across different screen sizes while maintaining the retro feel
<img width="1717" height="942" alt="readme1" src="https://github.com/user-attachments/assets/a16ed676-57bc-4203-b585-7548e619395d" />

## Tech Stack

- **Frontend Framework**: React 19.2+
- **Build Tool**: Vite 8.0+
- **Styling**: 7.css (Windows 7 theme)
- **Window Management**: React RND (react-rnd) for draggable/resizable components
- **Deployment**: GitHub Pages via gh-pages
- **Language**: JavaScript (ES6+)
- **Package Manager**: npm

## Prerequisites

- Node.js 18 or higher
- npm (comes with Node.js)
- Git


## Architecture Overview (still a mess)

### Component Hierarchy

- **App.jsx**: Main container managing state and window routing
- **BackgroundWindow.jsx**: Desktop background with dynamic images
- **BasicWindow.jsx**: Base window component with drag/resize functionality
- **GalleryComponent.jsx**: Image gallery with preview capabilities
- **ExpositionList.jsx**: List view for exposition categories
- **ExpositionDetail.jsx**: Detailed view for individual expositions

### Styling Approach

- **7.css**: Provides the core Windows 7 visual theme
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


### Deployment Configuration

- **Base Path**: Set to `/my-computer-avarch/` in `vite.config.js`
- **Homepage**: Configured in `package.json` for GitHub Pages
- **Build Output**: `dist/` directory contains the production build


## License

This project is private and for personal use.

## Acknowledgments

- **7.css**: For the beautiful Windows 7 styling
- **React RND**: For the drag-and-drop window functionality
- **Vite**: For the fast development experience
- **React**: For the component architecture
