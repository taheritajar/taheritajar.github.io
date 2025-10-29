# Academic Website - Alireza Taheritajar

This is the academic website for Alireza Taheritajar, Ph.D. Student in Computer Science and Cyber Security at Augusta University - Georgia Cyber Center.

## Structure

```
academic/
├── index.html          # Main HTML file
├── css/
│   └── style.css      # Main stylesheet
├── js/
│   └── main.js        # JavaScript functionality
├── images/
│   ├── profile.jpg    # Your headshot/profile picture
│   ├── pub-mixed-reality.jpg
│   ├── pub-llm.jpg
│   ├── pub-empathy.jpg
│   ├── pub-acoustic.jpg
│   ├── pub-survey.jpg
│   ├── pub-yolo.jpg
│   └── pub-caption.jpg
└── README.md          # This file
```

## Features

- **Responsive Design**: Works seamlessly on desktop, tablet, and mobile devices
- **Modern UI**: Clean, professional design similar to the reference website
- **Smooth Navigation**: Fixed navigation bar with smooth scrolling
- **Sections**:
  - Home/Hero with profile picture and social links
  - About (Bio, Research Interests, Education)
  - Publications with images and links
  - Recent News timeline
  - Experience (Work, Teaching, Awards, Patents, Skills)
  - Contact information

## Setup Instructions

### 1. Add Your Images

Replace the placeholder image paths in the `images` folder with your actual images:

- **profile.jpg**: Your professional headshot (recommended size: 500x500px, square)
- **pub-*.jpg**: Publication thumbnail images (recommended size: 400x300px)

### 2. Update Links

Update the following links in `index.html`:

- Email: `ataheritajar@augusta.edu` (line 35)
- Google Scholar profile URL (line 36)
- GitHub profile URL (line 37)
- LinkedIn profile URL (line 38)
- Publication paper links (in the Publications section)
- CV/Resume PDF link (line 742)

### 3. Add Publication Images

For each publication, add a relevant image that represents the work:
- Mixed Reality: Screenshot or diagram from your MR research
- LLM: Language model or virtual assistant visualization
- Empathy: Training environment comparison image
- Acoustic: Keyboard or acoustic visualization
- Survey: Survey/overview graphic
- YOLO: Vehicle detection sample
- Caption: Image captioning example

### 4. Customize Content

You can easily update:
- **Bio text**: Edit the paragraphs in the About section
- **Publications**: Add/remove publications in the Publications section
- **News items**: Add new news entries as they occur
- **Experience**: Update work experience, teaching, awards as needed

### 5. Color Scheme

The website uses CSS variables for easy customization. Edit these in `css/style.css`:

```css
:root {
    --primary-color: #2c3e50;      /* Dark blue-gray */
    --secondary-color: #3498db;     /* Blue */
    --accent-color: #e74c3c;        /* Red */
    --text-color: #333;             /* Dark gray */
    --text-light: #666;             /* Light gray */
}
```

## Viewing the Website

### Local Testing

1. Open `index.html` in your web browser
2. Or use a local server:
   ```bash
   # Python 3
   python -m http.server 8000
   
   # Then visit: http://localhost:8000
   ```

### Deployment

To deploy to GitHub Pages:

1. Ensure all files are in the `academic` folder
2. Commit and push to your repository
3. Access via: `https://taheritajar.github.io/academic/`

Or copy the contents to your main repository root if you want it at:
`https://taheritajar.github.io/`

## Browser Compatibility

- Chrome, Edge, Firefox, Safari (latest versions)
- Mobile browsers (iOS Safari, Chrome Mobile)
- Responsive design works on all screen sizes

## Dependencies

All dependencies are loaded via CDN:
- Font Awesome 6.4.0 (icons)
- Google Fonts (Lato & Roboto)

No installation required!

## Customization Tips

### Adding a New Publication

```html
<div class="publication-item">
    <div class="pub-image">
        <img src="images/pub-newpaper.jpg" alt="New Paper">
    </div>
    <div class="pub-content">
        <h3 class="pub-title">Paper Title Here</h3>
        <p class="pub-authors"><strong>Your Name</strong>, Co-authors</p>
        <p class="pub-venue">Conference/Journal Name</p>
        <p class="pub-description">Brief description...</p>
        <div class="pub-links">
            <a href="link-to-paper.pdf" class="btn-link">
                <i class="fas fa-file-pdf"></i> Paper
            </a>
        </div>
    </div>
</div>
```

### Adding a News Item

```html
<div class="news-item">
    <div class="news-date">
        <span class="month">Oct</span>
        <span class="year">2024</span>
    </div>
    <div class="news-content">
        <h3>News Title</h3>
        <p>News description here...</p>
    </div>
</div>
```

## Support

For questions or issues, please contact:
- Email: ataheritajar@augusta.edu

## License

© 2025 Alireza Taheritajar. All rights reserved.

---

**Last Updated**: October 2024
