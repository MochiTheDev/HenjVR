# HenjVR Site — Editing Guide

## The only file you need: `js/content.js`

Every piece of text, every link, and every image path on the site
lives in `js/content.js`. Open it, find the value you want to
change, edit it, save. That's it — the site pulls from this file
automatically.

You should never need to open the `.html` or other `.js` files just
to change text, a link, or an image.

## Changing text

Find the line with the text you want to change and edit what's
between the quotes. Example:

```js
title: { main: "HENJ", accent: "VR" },
```

becomes

```js
title: { main: "NEW", accent: "NAME" },
```

## Changing a link

Same idea — find the `url:` field and replace what's in the quotes
with the new link:

```js
discord: {
  label: "Discord",
  url: "https://discord.gg/your-real-invite"
}
```

If you want a button to look disabled instead of leading anywhere
(nothing to link to yet), set the url to an empty string:

```js
url: ""
```

The site automatically greys out and disables anything with an
empty url — it won't look clickable or lead nowhere silently.

## Changing an image

1. Add the new image file into the `assets/images/` folder.
2. Update the matching path in `content.js` to that filename, e.g.:

```js
image: "assets/images/hero-character.png"
```

becomes

```js
image: "assets/images/new-hero-image.png"
```

## Adding a new image/link slot (e.g. a 4th Sneak Peek card)

Find the matching list in `content.js` — for Sneak Peeks it's
`home.sneakPeeks.items` — and copy one existing entry, then edit
the copy:

```js
{
  name: "New Item Name",
  image: "assets/images/new-item.png",
  detailUrl: ""
}
```

Add a comma after the entry before it, paste this new one in the
list, and it'll show up as a new card automatically. The same
pattern works for adding a new owner under `credits.owners`, or a
new footer link under `footer.columns`.
