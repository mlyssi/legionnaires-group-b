# Legionnaires' Disease – Group B

Website for our college case study on Legionnaires' disease.

## View it on your own computer

Double-click `index.html`. The site opens in your browser; all pages, links and images work.

## Files

| File | What it is |
| --- | --- |
| `index.html` | Home page |
| `infectious-agent.html` … `references.html` | The 7 section pages |
| `style.css` | Colours, fonts and layout (change a colour once at the top and it changes everywhere) |
| `script.js` | Keeps the current page visible in the menu on phones |
| `img-*.jpg` | The image on each page (all section images are the same square size) |
| `fig-antibiotics.jpg` | Figure 1 on the Therapies page |

All files sit side by side in one folder, so there is no sub-folder to upload.

## Adding text to a page

Open the page file, find `</section>` after the title area and add your text in a `<section class="text-area"><div class="wrap"><article> … </article></div></section>` block — see `therapies.html` for an example.

## Publishing on GitHub Pages

1. New **public** repository → **uploading an existing file** → drag in **all files** from this folder → **Commit changes**.
2. **Settings → Pages → Branch: main, /(root) → Save**.
3. After 1–2 minutes the site is live at `https://<username>.github.io/<repository-name>/`.
