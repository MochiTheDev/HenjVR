/**
 * home.js — renders index.html's page-specific sections from
 * SITE_CONTENT.home. Edit content.js, not this file.
 */

function renderHero() {
  const c = SITE_CONTENT.home.hero;
  const eyebrow = SITE_CONTENT.home.eyebrow;

  document.getElementById("hero-eyebrow").textContent = eyebrow;
  document.getElementById("hero-portrait").src = c.image;
  document.getElementById(
    "hero-title"
  ).innerHTML = `${SITE_CONTENT.brand.name}<span class="accent">${SITE_CONTENT.brand.accent}</span>`;
  document.getElementById("hero-desc").textContent = c.description;
  document.getElementById("scroll-hint").textContent = c.scrollHint;

  const cta = document.getElementById("coming-soon-btn");
  cta.textContent = c.comingSoon.label;
  wireLink(cta, c.comingSoon.url);
}

function renderReleasing() {
  const c = SITE_CONTENT.home.releasing;
  document.getElementById("releasing-title").textContent = c.title;
  document.getElementById("releasing-range").textContent = c.range;
  document.getElementById("releasing-note").textContent = c.note;
}

function renderCommunityBanner() {
  const c = SITE_CONTENT.home.communityBanner;
  document.getElementById("community-quote").textContent = c.quote;
  document.getElementById(
    "community-attribution"
  ).textContent = `— ${c.attribution}`;
}

function renderSneakPeeks() {
  const c = SITE_CONTENT.home.sneakPeeks;
  document.getElementById("sneak-eyebrow").textContent = c.eyebrow;
  document.getElementById("sneak-title").textContent = c.title;

  const grid = document.getElementById("sneak-grid");
  grid.innerHTML = c.items
    .map(
      (item, i) => `
      <a class="card" id="sneak-card-${i}">
        <div class="card-media"><img src="${item.image}" alt="${item.name}" /></div>
        <div class="card-label">${item.name}</div>
      </a>`
    )
    .join("");

  c.items.forEach((item, i) => {
    wireLink(document.getElementById(`sneak-card-${i}`), item.detailUrl);
  });
}

function renderAlmostThere() {
  const c = SITE_CONTENT.home.almostThere;
  document.getElementById("almost-eyebrow").textContent = c.eyebrow;
  document.getElementById("almost-title").textContent = c.title;
  document.getElementById("almost-subtitle").textContent = c.subtitle;
}

/**
 * "Keep Scrolling" isn't just a label — scrolling this section
 * into view actually carries you on to the credits page, instead
 * of dead-ending like the original site did.
 *
 * Triggers once the section is mostly in view (60%), so a user
 * has to genuinely scroll down to it rather than getting bounced
 * from a sliver peeking into the viewport.
 */
function initScrollToCredits() {
  const section = document.getElementById("almost-there-section");
  if (!section) return;

  const targetUrl = SITE_CONTENT.home.almostThere.targetUrl;
  if (!targetUrl) return; // no target configured — stay put, don't navigate

  let hasNavigated = false;

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting && entry.intersectionRatio >= 0.6 && !hasNavigated) {
          hasNavigated = true;
          window.location.href = targetUrl;
        }
      });
    },
    { threshold: [0.6] }
  );

  observer.observe(section);
}

document.addEventListener("DOMContentLoaded", () => {
  renderHero();
  renderReleasing();
  renderCommunityBanner();
  renderSneakPeeks();
  renderAlmostThere();
  renderDecoSquares("deco-layer", 6);
  initScrollToCredits();
});
