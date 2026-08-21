# HenjVR Site

Static rebuild of the HenjVR landing page. Plain HTML/CSS/JS — no
build step, no framework, works on GitHub Pages or any static host.

## Editing content

**Everything you'd ever want to change lives in one file:**
`js/content.js`.

That includes:
- Every headline, paragraph, and label
- Every link (Discord, YouTube, footer nav, buttons)
- Every image path

The HTML files (`index.html`, `credits.html`) only contain empty
element shells with `id`s. The JS files (`js/main.js`, `js/home.js`,
`js/credits.js`) read `SITE_CONTENT` from `content.js` and fill
those shells in. **You should never need to touch the HTML or JS
files to update copy or a link** — only `content.js`.

### Marking a button/link as "not ready yet"

Set its `url` to an empty string `""` in `content.js`. The site
automatically greys it out and disables the click instead of
leaving a dead, silently-broken button (which was the original
site's main problem — every "Sneak Peek" card and the "Coming
Soon" button did nothing when clicked).

### Adding images

Put files in `assets/images/` and point to them from `content.js`
(see `assets/images/README.txt` for the expected filenames).

## File structure

```
henjvr-site/
├── index.html          Home page shell
├── credits.html         Owners/credits page shell
├── css/
│   └── style.css        All styling (theme colors as CSS variables)
├── js/
│   ├── content.js        ← EDIT THIS for text/links/images
│   ├── main.js            Shared: header, footer, cursor, deco squares
│   ├── home.js             Renders index.html from content.js
│   └── credits.js          Renders credits.html from content.js
└── assets/images/        Drop real image files here
```

## Known fixes from the original site

- "Coming Soon" button, sneak-peek cards, and owner "YouTube"
  buttons now either link out for real or render as visibly
  disabled — nothing looks clickable and silently does nothing.
- Logo/name in the header links back to the home page on every
  page, including credits.
- Discord button in the header and footer both pull from the same
  single `nav.discord.url` / `footer` values, so you only ever
  update the invite link in one place.

## Deploying with a custom domain (GitHub Pages)

1. Push this repo to GitHub.
2. Repo Settings → Pages → set the source branch (e.g. `main`) and
   root folder.
3. Add a `CNAME` file at the repo root containing your domain, e.g.:
   ```
   henjvr.com
   ```
4. At your domain registrar, point the domain at GitHub Pages:
   - An `A` record to GitHub's IPs, or
   - A `CNAME` record to `<username>.github.io` if using a subdomain.
5. In repo Settings → Pages, enter the custom domain and enable
   "Enforce HTTPS" once DNS propagates.
