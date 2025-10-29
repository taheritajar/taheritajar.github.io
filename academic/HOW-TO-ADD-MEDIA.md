# How to Add YouTube Videos and Images to Publications

This guide shows you how to enhance your publication pages with images and YouTube videos.

## Adding a Publication Image

### Step 1: Prepare Your Image
- Create a representative image for your paper (e.g., system architecture, results visualization)
- Recommended size: 800x600 pixels or similar aspect ratio
- Supported formats: PNG, JPG
- Name it descriptively: `publication-name-image.png`

### Step 2: Add Image to Folder
Place your image in: `academic/images/publications/`

(You may need to create the `publications` subfolder first)

### Step 3: Reference in Publication File

In your publication markdown file (e.g., `_publications/2025-01-tvcg-mixed-reality.md`), add:

```markdown
---
title: "Your Paper Title"
collection: publications
category: manuscripts
permalink: /publication/2025-tvcg-mixed-reality
excerpt: 'Brief description'
date: 2025-01-01
venue: 'Journal Name'
paperurl: 'https://link-to-paper.com'
citation: 'Full citation'
header:
  teaser: publications/publication-name-image.png
---

![Paper Overview](/images/publications/publication-name-image.png)

## Abstract

Your abstract here...
```

## Adding YouTube Videos

### Option 1: Embed Video in Publication Page

Add this HTML to your publication markdown file:

```markdown
---
title: "Your Paper Title"
...
---

## Video Presentation

<iframe width="560" height="315" 
  src="https://www.youtube.com/embed/YOUR_VIDEO_ID" 
  frameborder="0" 
  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
  allowfullscreen>
</iframe>

## Abstract

Your abstract here...
```

**To find your VIDEO_ID:**
- Your YouTube URL: `https://www.youtube.com/watch?v=dQw4w9WgXcQ`
- The VIDEO_ID is: `dQw4w9WgXcQ` (everything after `v=`)

### Option 2: Add Video Link Button

```markdown
---
title: "Your Paper Title"
...
---

[📹 Watch Video Presentation](https://www.youtube.com/watch?v=YOUR_VIDEO_ID){: .btn .btn--primary}

## Abstract

Your abstract here...
```

### Option 3: Multiple Links (Paper, Video, Code)

```markdown
---
title: "Your Paper Title"
...
---

**Links:**
- [📄 Paper PDF](https://link-to-paper.pdf)
- [📹 Video Presentation](https://youtube.com/watch?v=VIDEO_ID)
- [💻 Code Repository](https://github.com/your-repo)
- [📊 Dataset](https://link-to-dataset)

## Abstract

Your abstract here...
```

## Example: Complete Publication with Image and Video

```markdown
---
title: "Scalable Object Detection in Mixed Reality"
collection: publications
category: submitted
permalink: /publication/2025-tvcg-mixed-reality
excerpt: 'Novel approach for scalable object detection in MR environments'
date: 2025-01-01
venue: 'IEEE TVCG - Under Review'
paperurl: ''
citation: 'Taheritajar, A., et al. (2025).'
header:
  teaser: publications/mixed-reality-system.png
---

![System Architecture](/images/publications/mixed-reality-system.png)

## Video Demonstration

<iframe width="560" height="315" 
  src="https://www.youtube.com/embed/YOUR_VIDEO_ID" 
  frameborder="0" 
  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
  allowfullscreen>
</iframe>

## Abstract

This paper presents a novel approach for scalable object detection in mixed reality environments...

## Key Contributions

* One-shot 3D annotation technique
* Incremental re-training methodology
* Real-world scalability analysis

## Links

- [📄 Preprint (arXiv)](https://arxiv.org)
- [💻 Code (GitHub)](https://github.com/your-repo)
- [📹 Demo Video](https://youtube.com/watch?v=VIDEO_ID)

**Status:** Under Review

**Authors:** Alireza Taheritajar, Jeffrey Benson, Brandon Wilburn, Jieqiong Zhao, Jason Orlosky
```

## Adding Images to News Posts

You can also add images to your news/blog posts:

```markdown
---
title: 'My Conference Presentation'
date: 2023-11-15
permalink: /posts/2023/11/conference/
tags:
  - conference
---

![Conference Presentation](/images/news/conference-2023.jpg)

I had a great time presenting at the conference...
```

## Image Organization

Recommended folder structure in `academic/images/`:

```
images/
├── profile.png                    # Your headshot
├── publications/                  # Publication images
│   ├── paper1-overview.png
│   ├── paper2-architecture.png
│   └── paper3-results.png
├── news/                         # News post images
│   ├── conference-2023.jpg
│   └── award-ceremony.jpg
└── teaching/                     # Teaching-related images
    └── classroom.jpg
```

## Tips for Best Results

### Images
- Use high-quality images (at least 800px wide)
- Optimize file size (compress images to <500KB if possible)
- Use descriptive filenames
- PNG for diagrams/screenshots, JPG for photos

### Videos
- Keep videos concise (5-10 minutes for paper presentations)
- Add captions/subtitles if possible
- Use a clear thumbnail
- Include a brief description before the video embed

### Accessibility
- Always add alt text to images: `![Alt text description](image-url.png)`
- Provide text descriptions for important visual information
- Ensure videos have captions

## Example Publications with Media

Here are examples of how to enhance your existing publications:

### 1. TVCG Paper (Mixed Reality)
Add: System architecture diagram, demo video, code repository link

### 2. HOST Paper (Acoustic Attacks)
Add: Attack methodology diagram, experimental setup photo, results visualization

### 3. JRTIP Paper (Vehicle Detection)
Add: Detection examples, performance comparison charts, demo video of system in action

---

**Pro Tip:** If you present your work at conferences, record your presentation and add it to your publication page. This greatly increases engagement with your research!
