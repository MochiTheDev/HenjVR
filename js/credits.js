/**
 * credits.js — renders credits.html from SITE_CONTENT.credits.
 * Edit content.js, not this file.
 */

function renderCredits() {
  const c = SITE_CONTENT.credits;
  document.getElementById("credits-eyebrow").textContent = c.eyebrow;
  document.getElementById("credits-title").textContent = c.title;
  document.getElementById("credits-subtitle").textContent = c.subtitle;
  document.getElementById("back-home-label").textContent = c.backHomeLabel;
  document
    .getElementById("back-home-link")
    .setAttribute("href", SITE_CONTENT.brand.homeUrl);

  const grid = document.getElementById("owner-grid");
  grid.innerHTML = c.owners
    .map(
      (owner, i) => `
      <div class="owner-card">
        ${owner.badge ? `<div class="owner-badge">${owner.badge}</div>` : ""}
        <div class="owner-avatar"><img src="${owner.image}" alt="${owner.name}" /></div>
        <h3>${owner.name}</h3>
        <div class="role">${owner.role}</div>
        <a class="btn" id="owner-youtube-${i}">YouTube</a>
      </div>`
    )
    .join("");

  c.owners.forEach((owner, i) => {
    wireLink(document.getElementById(`owner-youtube-${i}`), owner.youtubeUrl);
  });
}

document.addEventListener("DOMContentLoaded", () => {
  renderCredits();
  renderDecoSquares("deco-layer", 4);
});
