# URMYEVERLOVIN - Music Promoter Portfolio Website

A clean, typewriter-aesthetic portfolio website for a music promoter and artist manager.

## Files Included

### Main Website (Standalone)
- **portfolio-website.html** - Complete website in a single file. Open this in your browser to view the site.

### Modular Version (For Development)
- **index.html** - Main HTML structure
- **data.js** - Sample data (artists, shows, records, venues)
- **components.js** - Reusable UI components (Logo, Navigation, StaticContact)
- **pages.js** - Individual page components (Landing, Artists, Shows, Taste, About)
- **app.js** - Main application logic

## Features

### Pages
1. **Landing Page** - Centered logo with navigation tabs
2. **Artists** - Grid of artist profiles with detail pages (3 columns desktop, 2 mobile)
3. **Shows** - Landscape images of events (single column)
4. **Taste** - Record collection display (3 columns desktop, 2 mobile)
5. **About** - Bio, contact info, images, and venue list

### Functionality
- Responsive design (mobile and desktop layouts)
- Mobile menu button for navigation
- Clickable logo returns to landing page
- Artist detail pages with Instagram links and bios
- Red stationary contact info on all pages except landing
- Grayscale images with color on hover

## How to Use

### Quick Start
1. Open **portfolio-website.html** in any web browser
2. That's it! The site is fully functional.

### Customization
To customize the content, edit the data in either:
- `portfolio-website.html` (lines with const artistsData, showsData, etc.)
- OR the `data.js` file if using the modular version

### Replace Sample Data
- **Artists**: Update names, images, Instagram handles, and bios
- **Shows**: Update event titles and images
- **Taste**: Update album names and cover images
- **About**: Update bio text, contact info, photos, and venue list
- **Contact Info**: Update the red text in StaticContact component

## Design Notes
- Uses Courier Prime typewriter font
- White background with black text and red accents
- Clean, minimal aesthetic inspired by vintage zines and backstage passes
- All images are grayscale by default, color on hover

## Browser Compatibility
Works in all modern browsers (Chrome, Firefox, Safari, Edge)
