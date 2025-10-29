# Academic Website - Quick Start Guide

## 🎉 Your Website is Ready!

Your professional academic website has been created in the `academic` folder with all your information, publications, CV, teaching experience, and news updates.

## 📁 What's Been Created

### Core Pages
- **Home/About** (`_pages/about.md`) - Your bio, research interests, and recent news
- **CV** (`_pages/cv.md`) - Complete curriculum vitae with all sections
- **Publications** - 7 publication entries in `_publications/` folder
- **Teaching** - 4 teaching assistant entries in `_teaching/` folder
- **News** - 6 blog posts in `_posts/` folder showcasing your achievements

### Configuration
- **_config.yml** - Updated with your personal information
- **navigation.yml** - Menu configured with: About, Publications, CV, News, Teaching

## 🖼️ Adding Your Profile Picture

**IMPORTANT:** You need to add your headshot to make the site complete!

1. Prepare a professional headshot (recommended: 200x200px or larger, square format)
2. Save it as `profile.png` or `profile.jpg`
3. Place it in: `academic/images/profile.png`
4. This will replace the default placeholder image

## 🚀 How to Run Your Website

### Option 1: Using Jekyll (Recommended)

```bash
cd academic
bundle install
bundle exec jekyll serve
```

Then open: http://localhost:4000

### Option 2: Using Docker

```bash
cd academic
docker-compose up
```

Then open: http://localhost:4000

## 🌐 Publishing to GitHub Pages

1. **Create GitHub repository named:** `taheritajar.github.io`

2. **Initialize git and push:**
   ```bash
   cd academic
   git init
   git add .
   git commit -m "Initial academic website"
   git remote add origin https://github.com/taheritajar/taheritajar.github.io.git
   git push -u origin master
   ```

3. **Enable GitHub Pages:**
   - Go to repository Settings → Pages
   - Source: Deploy from branch `master`
   - Folder: `/ (root)`

4. **Your site will be live at:** https://taheritajar.github.io

## 📝 Customization Guide

### Adding Social Media Links

Edit `academic/_config.yml` and add your profiles:

```yaml
author:
  googlescholar    : "https://scholar.google.com/your-profile"
  linkedin         : "your-linkedin-username"
  orcid            : "https://orcid.org/your-orcid"
  researchgate     : "https://researchgate.net/your-profile"
  youtube          : "your-channel-id"  # If you have research videos
```

### Adding a New Publication

1. Create file: `academic/_publications/YYYY-MM-DD-title.md`

2. Use this template:
```markdown
---
title: "Your Paper Title"
collection: publications
category: manuscripts  # Options: manuscripts, conferences, submitted, inprogress
permalink: /publication/YYYY-MM-title
excerpt: 'Brief description'
date: YYYY-MM-DD
venue: 'Journal/Conference Name'
paperurl: 'https://link-to-paper.com'
citation: 'Full citation'
---

Abstract and details here.
```

### Adding News/Updates

1. Create file: `academic/_posts/YYYY-MM-DD-title.md`

2. Use this template:
```markdown
---
title: 'News Title'
date: YYYY-MM-DD
permalink: /posts/YYYY/MM/title/
tags:
  - tag1
  - tag2
---

News content here.
```

### Adding PDFs (Papers, CV, etc.)

1. Place PDF files in: `academic/files/`
2. Link to them in your pages:
   ```markdown
   [Download PDF](/files/your-paper.pdf)
   ```

## 📊 Your Current Content

### Publications (7 total)
1. ✅ Scalable Object Detection in Mixed Reality (TVCG - Under Review)
2. ✅ Acoustic Side Channel Attack (HOST 2025 - Submitted)
3. ✅ Survey on Acoustic Attacks (ICICS 2024 - Submitted)
4. ✅ LLM-Powered Virtual Assistants (In Progress)
5. ✅ Empathy in VR Training (In Progress)
6. ✅ Lightweight Tiny-YOLOv3 (Published - JRTIP 2021)
7. ✅ Automatic Image Description (Published - Conference 2021)

### News Posts (6 total)
1. ✅ AFCEA TechNet Presentation (Nov 2023)
2. ✅ Started Ph.D. at Augusta (Aug 2023)
3. ✅ Vice President Election (Oct 2023)
4. ✅ TVCG Submission (Sep 2024)
5. ✅ HOST Submission (Aug 2024)
6. ✅ JRTIP Publication (Jun 2021)

### Teaching (4 courses)
1. ✅ Microprocessors Design (Spring 2017)
2. ✅ Logic Circuits Design (Fall 2017)
3. ✅ Signals and Systems (Spring 2016)
4. ✅ Electronic Circuits (Fall 2016)

## 🎨 Theme and Style

Your website uses the Academic Pages template with a professional, clean design:
- **Responsive design** - Works on desktop, tablet, and mobile
- **Professional layout** - Optimized for academic content
- **SEO optimized** - Better visibility in search engines
- **Fast loading** - Static site generation for performance

## 🔧 Common Tasks

### Update Your Bio
Edit: `academic/_pages/about.md`

### Update Your CV
Edit: `academic/_pages/cv.md`

### Change Navigation Menu
Edit: `academic/_data/navigation.yml`

### Modify Site Settings
Edit: `academic/_config.yml`

## 📚 Resources

- **Jekyll Documentation:** https://jekyllrb.com/docs/
- **Academic Pages Template:** https://github.com/academicpages/academicpages.github.io
- **Markdown Guide:** https://www.markdownguide.org/

## ⚠️ Important Notes

1. **Profile Picture:** Don't forget to add your headshot to `academic/images/profile.png`
2. **Social Links:** Update your Google Scholar, LinkedIn, ORCID links in `_config.yml`
3. **PDFs:** Add your paper PDFs to `academic/files/` folder
4. **YouTube Links:** If you have paper presentations/demos, add YouTube links to publications
5. **Restart Server:** After changing `_config.yml`, restart Jekyll server

## 🆘 Need Help?

1. Check `README-SETUP.md` for detailed setup instructions
2. Review Jekyll documentation for advanced customization
3. The Academic Pages GitHub repository has extensive documentation

---

**Your academic website is complete and ready to launch! 🎓**

Just add your profile picture and you're good to go!
