/**
 * main.js — shared behavior for every page.
 * Reads only from SITE_CONTENT (content.js). Never hardcode
 * copy or URLs in here — add them to content.js instead.
 */

/** Applies a URL to an <a>, or marks it inert if the URL is empty. */
function wireLink(el, url) {
  if (!el) return;
  if (url && url.trim() !== "") {
    el.href = url;
    el.removeAttribute("data-disabled");
    if (url.startsWith("http")) {
      el.target = "_blank";
      el.rel = "noopener noreferrer";
    }
  } else {
    el.removeAttribute("href");
    el.setAttribute("data-disabled", "true");
    el.setAttribute("aria-disabled", "true");
    el.title = "Coming soon";
  }
}

function renderHeader() {
  const mount = document.getElementById("site-header");
  if (!mount) return;
  const { brand, nav } = SITE_CONTENT;

  mount.innerHTML = `
    <a class="brand-link" href="${brand.homeUrl}">
      <img src="${brand.logoImage}" alt="${brand.name}${brand.accent} logo" />
      <span>${brand.name}<span class="brand-accent">${brand.accent}</span></span>
    </a>
    <a class="btn" id="header-discord-link">${nav.discord.label}</a>
  `;
  wireLink(document.getElementById("header-discord-link"), nav.discord.url);
}

function renderFooter() {
  const mount = document.getElementById("site-footer");
  if (!mount) return;
  const { brand, footer } = SITE_CONTENT;

  const columns = footer.columns
    .map(
      (col) => `
      <div class="footer-col">
        <h4>${col.heading}</h4>
        ${col.links
          .map(
            (link, i) =>
              `<a data-footer-link="${col.heading}-${i}">${link.label}</a>`
          )
          .join("")}
      </div>`
    )
    .join("");

  mount.innerHTML = `
    <div class="footer-grid">
      <div class="footer-brand">
        <a class="brand-link" href="${brand.homeUrl}">
          <img src="${brand.logoImage}" alt="${brand.name}${brand.accent} logo" />
          <span>${brand.name}<span class="brand-accent">${brand.accent}</span></span>
        </a>
        <p>${footer.tagline}</p>
      </div>
      ${columns}
    </div>
    <div class="footer-bottom">
      <span>${footer.copyright}</span>
      <span>${footer.madeBy}</span>
    </div>
  `;

  footer.columns.forEach((col) => {
    col.links.forEach((link, i) => {
      wireLink(
        mount.querySelector(`[data-footer-link="${col.heading}-${i}"]`),
        link.url
      );
    });
  });
}

/** Scatters a handful of decorative squares into a container. */
function renderDecoSquares(containerId, count = 5) {
  const el = document.getElementById(containerId);
  if (!el) return;
  const variants = ["pink", "purple", "outline"];
  for (let i = 0; i < count; i++) {
    const sq = document.createElement("div");
    sq.className = `deco-square ${variants[i % variants.length]}`;
    sq.style.top = `${Math.random() * 90 + 5}%`;
    sq.style.left = `${Math.random() * 90 + 5}%`;
    el.appendChild(sq);
  }
}

function initCustomCursor() {
  const dot = document.createElement("div");
  dot.id = "cursor-dot";
  document.body.appendChild(dot);
  window.addEventListener("mousemove", (e) => {
    dot.style.left = `${e.clientX}px`;
    dot.style.top = `${e.clientY}px`;
  });
  // Hide on touch devices where a synthetic cursor doesn't make sense.
  window.addEventListener("touchstart", () => (dot.style.display = "none"), {
    once: true,
  });
}

document.addEventListener("DOMContentLoaded", () => {
  initCustomCursor();
  renderHeader();
  renderFooter();
});
