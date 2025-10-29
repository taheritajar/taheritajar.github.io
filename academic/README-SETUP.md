# Alireza Taheritajar - Academic Website

This is the academic website for Alireza Taheritajar, Ph.D. student in Computer Science and Cyber Security at Augusta University.

## Setup Instructions

### Adding Your Profile Picture

1. **Prepare your image:**
   - Use a professional headshot
   - Recommended size: 200x200 pixels or larger (square format works best)
   - Supported formats: PNG, JPG

2. **Add the image:**
   - Save your profile picture as `profile.png` (or `profile.jpg`)
   - Place it in the `academic/images/` folder
   - Replace the existing `profile.png` file

3. **If you use a different filename:**
   - Update the `avatar` field in `academic/_config.yml`:
   ```yaml
   author:
     avatar: "your-image-name.png"
   ```

### Building and Previewing the Site

#### Using Jekyll Locally

1. **Install Jekyll:**
   ```bash
   gem install bundler jekyll
   ```

2. **Install dependencies:**
   ```bash
   cd academic
   bundle install
   ```

3. **Serve the website locally:**
   ```bash
   bundle exec jekyll serve
   ```

4. **View in browser:**
   - Open http://localhost:4000 in your web browser

#### Using Docker (Alternative)

1. **Build and run:**
   ```bash
   cd academic
   docker-compose up
   ```

2. **View in browser:**
   - Open http://localhost:4000

### Customizing Your Website

#### Update Your Information

- **Basic Info:** Edit `academic/_config.yml`
- **About Page:** Edit `academic/_pages/about.md`
- **CV:** Edit `academic/_pages/cv.md`
- **Publications:** Add/edit files in `academic/_publications/`
- **News:** Add posts in `academic/_posts/`
- **Teaching:** Add/edit files in `academic/_teaching/`

#### Adding Social Media Links

In `academic/_config.yml`, add your profile URLs:

```yaml
author:
  googlescholar    : "YOUR_GOOGLE_SCHOLAR_URL"
  linkedin         : "YOUR_LINKEDIN_USERNAME"
  github           : "taheritajar"
  orcid            : "YOUR_ORCID_URL"
  researchgate     : "YOUR_RESEARCHGATE_URL"
  youtube          : "YOUR_YOUTUBE_CHANNEL"
```

#### Adding Publications

1. Create a new file in `academic/_publications/`
2. Use the naming format: `YYYY-MM-DD-title.md`
3. Follow this template:

```markdown
---
title: "Your Paper Title"
collection: publications
category: manuscripts  # or: conferences, submitted, inprogress
permalink: /publication/YYYY-MM-title
excerpt: 'Brief description of the paper'
date: YYYY-MM-DD
venue: 'Journal or Conference Name'
paperurl: 'https://link-to-paper.com'
citation: 'Full citation here'
---

Paper content and abstract here.
```

#### Adding News/Blog Posts

1. Create a new file in `academic/_posts/`
2. Use the naming format: `YYYY-MM-DD-post-title.md`
3. Follow this template:

```markdown
---
title: 'News Title'
date: YYYY-MM-DD
permalink: /posts/YYYY/MM/post-title/
tags:
  - tag1
  - tag2
---

News content here.
```

### Publishing to GitHub Pages

1. **Create a GitHub repository:**
   - Repository name: `taheritajar.github.io`

2. **Push your code:**
   ```bash
   git add .
   git commit -m "Initial commit"
   git push origin master
   ```

3. **Enable GitHub Pages:**
   - Go to repository Settings → Pages
   - Source: Deploy from branch `master`
   - Folder: `/ (root)`

4. **Your site will be live at:**
   - https://taheritajar.github.io

### Adding PDF Files

Place PDF files (papers, CV, etc.) in `academic/files/` and link to them:

```markdown
[Download Paper](/files/paper.pdf)
```

## File Structure

```
academic/
├── _config.yml           # Main configuration
├── _data/
│   └── navigation.yml    # Navigation menu
├── _pages/
│   ├── about.md         # Home page
│   ├── cv.md            # CV page
│   └── publications.html # Publications page
├── _publications/       # Publication entries
├── _posts/             # News/blog posts
├── _teaching/          # Teaching entries
├── images/             # Images (add profile.png here)
└── files/              # PDF files and downloads
```

## Support

For Jekyll documentation: https://jekyllrb.com/docs/
For Academic Pages template: https://github.com/academicpages/academicpages.github.io

## License

This website is built using the Academic Pages template, which is licensed under MIT.
