// src/home.js
// Same visual builders as before — now exported so main.js can
// import and call them, instead of this file grabbing #root
// and rendering itself the moment it loads.

const MONKEY_IMG =
  "https://media.base44.com/images/public/6a84f55d456ff6f1ee0a2e3d/e0e195cd1_Screenshot2026-08-16192822.png";

const SNEAK_ITEMS = [
  {
    img: "https://media.base44.com/images/public/6a84f55d456ff6f1ee0a2e3d/c2f507b4c_Screenshot2026-08-20003722.png",
    label: "Storage Crate"
  },
  {
    img: "https://media.base44.com/images/public/6a84f55d456ff6f1ee0a2e3d/b70de46bd_Screenshot2026-08-17151141.png",
    label: "Santa Hat"
  },
  {
    img: "https://media.base44.com/images/public/6a84f55d456ff6f1ee0a2e3d/841e82be4_Screenshot2026-08-20113515.png",
    label: "Gazebo Pt2"
  }
];

const PARTICLES = [
  [18, 0],
  [13, 13],
  [0, 18],
  [-13, 13],
  [-18, 0],
  [-13, -13],
  [0, -18],
  [13, -13]
];

function el(tag, className, html) {
  const node = document.createElement(tag);
  if (className) node.className = className;
  if (html !== undefined) node.innerHTML = html;
  return node;
}

/* ========================= NAVBAR ========================= */

export function buildNavbar() {
  const header = el("header", "navbar");
  header.id = "navbar";

  const inner = el("div", "navbar-inner");

  const logo = el("a", "navbar-logo");
  logo.href = "#top";
  logo.addEventListener("click", (e) => {
    e.preventDefault();
    window.navigateTo("home");
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
  logo.innerHTML =
    `<img src="${MONKEY_IMG}" alt="HenjVR logo">` +
    `<span>HENJ<span class="accent">VR</span></span>`;

  const nav = el("nav", "navbar-links");

  const discord = el("a", "discord-btn");
  discord.href = "https://discord.gg/e8nNujkpF";
  discord.target = "_blank";
  discord.rel = "noopener noreferrer";
  discord.textContent = "Discord";

  inner.appendChild(logo);
  inner.appendChild(nav);
  inner.appendChild(discord);
  header.appendChild(inner);

  return header;
}

/* ========================= HERO ========================= */

export function buildHero() {
  const section = el("section", "hero");
  section.id = "top";

  const bg = el("div", "hero-bg");
  bg.appendChild(el("div", "hero-gradient"));

  const checker = el("div", "checker-bg");
  checker.style.position = "absolute";
  checker.style.inset = "0";
  checker.style.opacity = "0.4";
  bg.appendChild(checker);

  const scan = el("div", "scanlines");
  scan.style.position = "absolute";
  scan.style.inset = "0";
  scan.style.opacity = "0.5";
  bg.appendChild(scan);

  section.appendChild(bg);

  const accents = [
    { left: "8%", top: "22%", size: "16px", bg: "#FF3DF0", border: "pink", delay: "0s" },
    { right: "10%", top: "30%", size: "12px", bg: "#7F00FF", border: "", delay: "0.8s" },
    { bottom: "18%", left: "14%", size: "12px", bg: "#ffffff", border: "", delay: "1.4s" },
    { bottom: "22%", right: "16%", size: "16px", bg: "#FF3DF0", border: "pink", delay: "0.4s" }
  ];

  accents.forEach((a) => {
    const d = el("div", "accent-pixel " + (a.border === "pink" ? "pixel-border-pink" : "pixel-border"));
    d.style.height = a.size;
    d.style.width = a.size;
    d.style.background = a.bg;
    if (a.left) d.style.left = a.left;
    if (a.right) d.style.right = a.right;
    if (a.top) d.style.top = a.top;
    if (a.bottom) d.style.bottom = a.bottom;
    d.style.animationDelay = a.delay;
    section.appendChild(d);
  });

  const content = el("div", "hero-content");
  content.id = "heroContent";

  const badge = el("div", "hero-badge");
  badge.innerHTML = `<span class="dot"></span><span>Gorilla Tag Physics</span>`;
  content.appendChild(badge);

  const monkeyWrap = el("div", "hero-monkey-wrap");
  monkeyWrap.appendChild(el("div", "hero-monkey-glow"));

  const monkeyImg = el("img", "hero-monkey float-bob");
  monkeyImg.src = MONKEY_IMG;
  monkeyImg.alt = "HenjVR pixel monkey mascot wearing a purple wizard hat";
  monkeyWrap.appendChild(monkeyImg);
  content.appendChild(monkeyWrap);

  const h1 = el("h1");
  h1.innerHTML = 'HENJ<span class="pink">VR</span>';
  content.appendChild(h1);

  const p = el("p");
  p.textContent = "HenjVR stands for Independence, Which is what we hope to show this game, -HenjVR Developers";
  content.appendChild(p);

  const actions = el("div", "hero-actions");
  const btn = el("button", "coming-soon");
  btn.type = "button";
  btn.disabled = true;
  btn.textContent = "Coming Soon";
  actions.appendChild(btn);
  content.appendChild(actions);

  section.appendChild(content);

  const hint = el("div", "scroll-hint");
  hint.textContent = "▼ scroll ▼";
  section.appendChild(hint);

  return section;
}

/* ========================= RELEASE ========================= */

export function buildRelease() {
  const section = el("section", "release");
  section.id = "release";

  const checker = el("div", "checker-bg");
  checker.style.position = "absolute";
  checker.style.inset = "0";
  checker.style.opacity = "0.3";
  section.appendChild(checker);

  const scan = el("div", "scanlines");
  scan.style.position = "absolute";
  scan.style.inset = "0";
  scan.style.opacity = "0.4";
  section.appendChild(scan);

  const inner = el("div", "release-inner");

  const badge = el("div", "hero-badge");
  badge.innerHTML = `<span class="live-dot"></span><span>Coming Soon</span>`;
  inner.appendChild(badge);

  const h2 = el("h2");
  h2.textContent = "Releasing In";
  inner.appendChild(h2);

  const big = el("p", "big");
  big.textContent = "2 - 4 Months";
  inner.appendChild(big);

  const sub = el("p", "sub");
  sub.textContent = "We HOPE to get it out Within this time -cheese";
  inner.appendChild(sub);

  section.appendChild(inner);
  return section;
}

/* ========================= COMMUNITY ========================= */

export function buildCommunity() {
  const section = el("section", "community");
  section.appendChild(el("div", "community-bg"));

  const scan = el("div", "scanlines");
  scan.style.position = "absolute";
  scan.style.inset = "0";
  scan.style.opacity = "0.3";
  section.appendChild(scan);

  const checker = el("div", "checker-bg");
  checker.style.position = "absolute";
  checker.style.inset = "0";
  checker.style.opacity = "0.2";
  section.appendChild(checker);

  const a1 = el("div", "accent-pixel pixel-border");
  a1.style.left = "10%";
  a1.style.top = "24%";
  a1.style.height = "16px";
  a1.style.width = "16px";
  a1.style.background = "#ffffff";
  section.appendChild(a1);

  const a2 = el("div", "accent-pixel pixel-border-pink");
  a2.style.right = "12%";
  a2.style.top = "30%";
  a2.style.height = "12px";
  a2.style.width = "12px";
  a2.style.background = "#ffffff";
  a2.style.animationDelay = "0.8s";
  section.appendChild(a2);

  const inner = el("div", "community-inner");

  const h2 = el("h2");
  h2.textContent = "We Hope to Grow This Community to the BEST frfr";
  inner.appendChild(h2);

  const sig = el("p", "sig");
  sig.textContent = "- HenjVR";
  inner.appendChild(sig);

  section.appendChild(inner);
  return section;
}

/* ========================= SNEAK PEEK ========================= */

export function buildSneakPeek() {
  const section = el("section", "sneak");

  const scan = el("div", "scanlines");
  scan.style.position = "absolute";
  scan.style.inset = "0";
  scan.style.opacity = "0.3";
  section.appendChild(scan);

  const a1 = el("div", "accent-pixel pixel-border-pink");
  a1.style.left = "8%";
  a1.style.top = "20%";
  a1.style.height = "12px";
  a1.style.width = "12px";
  a1.style.background = "#FF3DF0";
  section.appendChild(a1);

  const a2 = el("div", "accent-pixel pixel-border");
  a2.style.right = "10%";
  a2.style.bottom = "18%";
  a2.style.height = "12px";
  a2.style.width = "12px";
  a2.style.background = "#7F00FF";
  a2.style.animationDelay = "0.9s";
  section.appendChild(a2);

  const inner = el("div", "sneak-inner");

  const center = el("div");
  center.style.textAlign = "center";

  const label = el("div", "sneak-label");
  label.textContent = "- Sneak Peaks -";
  center.appendChild(label);

  const desc = el("h2", "sneak-desc");
  desc.textContent = "Sneak peaks that only who come to this website will see... besides the santa hat";
  center.appendChild(desc);

  inner.appendChild(center);

  const grid = el("div", "sneak-grid");

  SNEAK_ITEMS.forEach((item) => {
    const card = el("div", "sneak-card");

    const imgWrap = el("div", "sneak-img-wrap");
    const img = el("img", "pixelated");
    img.src = item.img;
    img.alt = item.label;
    imgWrap.appendChild(img);
    card.appendChild(imgWrap);

    const labelRow = el("p", "sneak-label-row");
    labelRow.textContent = item.label;
    card.appendChild(labelRow);

    grid.appendChild(card);
  });

  inner.appendChild(grid);
  section.appendChild(inner);
  return section;
}

/* ========================= SCROLL TEASER ========================= */

export function buildScrollTeaser() {
  const section = el("section", "teaser");

  const checker = el("div", "checker-bg");
  checker.style.position = "absolute";
  checker.style.inset = "0";
  checker.style.opacity = "0.2";
  section.appendChild(checker);

  const scan = el("div", "scanlines");
  scan.style.position = "absolute";
  scan.style.inset = "0";
  scan.style.opacity = "0.3";
  section.appendChild(scan);

  const a1 = el("div", "accent-pixel pixel-border-pink");
  a1.style.left = "12%";
  a1.style.top = "26%";
  a1.style.height = "16px";
  a1.style.width = "16px";
  a1.style.background = "#FF3DF0";
  section.appendChild(a1);

  const a2 = el("div", "accent-pixel pixel-border");
  a2.style.right = "14%";
  a2.style.top = "32%";
  a2.style.height = "12px";
  a2.style.width = "12px";
  a2.style.background = "#7F00FF";
  a2.style.animationDelay = "0.7s";
  section.appendChild(a2);

  const inner = el("div", "teaser-inner");

  const label = el("div", "teaser-label");
  label.textContent = "- Almost There -";
  inner.appendChild(label);

  const h2 = el("h2");
  h2.textContent = "Keep Scrolling";
  inner.appendChild(h2);

  const p = el("p");
  p.textContent = "Meet the monkeys behind HenjVR...";
  inner.appendChild(p);

  const arrows = el("div", "arrows animate-bounce");
  arrows.textContent = "▼ ▼ ▼";
  inner.appendChild(arrows);

  section.appendChild(inner);
  return section;
}

/* ========================= FOOTER ========================= */

export function buildFooter() {
  const footer = el("footer", "footer");
  const inner = el("div", "footer-inner");
  const grid = el("div", "footer-grid");

  const brandCol = el("div", "col-span-2");
  const brand = el("div", "footer-brand");
  brand.innerHTML =
    `<span class="footer-brand-icon"><span></span></span>` +
    `<span class="footer-brand-text">HENJ<span style="color:#FF3DF0">VR</span></span>`;
  brandCol.appendChild(brand);

  const about = el("p", "footer-about");
  about.textContent = "A community-built fan game inspired by Gorilla Tag. Not affiliated with Another Axiom. Made by monkeys, for monkeys.";
  brandCol.appendChild(about);
  grid.appendChild(brandCol);

  const navCol = el("div");
  navCol.innerHTML = `<div class="footer-title purple">Navigate</div>`;
  const navList = el("ul", "footer-list");
  const navItem = el("li");
  const navLink = el("a");
  navLink.href = "#top";
  navLink.textContent = "Home";
  navLink.addEventListener("click", (e) => {
    e.preventDefault();
    window.navigateTo("home");
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
  navItem.appendChild(navLink);
  navList.appendChild(navItem);
  navCol.appendChild(navList);
  grid.appendChild(navCol);

  const commCol = el("div");
  commCol.innerHTML = `<div class="footer-title pink">Community</div>`;
  const commList = el("ul", "footer-list");
  const commItem = el("li");
  const commLink = el("a");
  commLink.href = "https://discord.gg/e8nNujkpF";
  commLink.target = "_blank";
  commLink.rel = "noopener noreferrer";
  commLink.textContent = "Discord";
  commItem.appendChild(commLink);
  commList.appendChild(commItem);
  commCol.appendChild(commList);
  grid.appendChild(commCol);

  inner.appendChild(grid);

  const bottom = el("div", "footer-bottom");
  bottom.innerHTML =
    "<p>© 2026 HenjVR · Fan Project · Non-Commercial</p><p>Made by monkeys</p>";
  inner.appendChild(bottom);

  footer.appendChild(inner);
  return footer;
}

/* ========================= SETUP FUNCTIONS ========================= */

export function setupNavbarScroll() {
  const navbar = document.getElementById("navbar");
  if (!navbar) return;

  function onScroll() {
    if (window.scrollY > 40) {
      navbar.classList.add("scrolled");
    } else {
      navbar.classList.remove("scrolled");
    }
  }

  onScroll();
  window.addEventListener("scroll", onScroll, { passive: true });
}

export function setupHeroParallax() {
  const content = document.getElementById("heroContent");
  if (!content) return;

  let raf;

  function onScroll() {
    cancelAnimationFrame(raf);
    raf = requestAnimationFrame(() => {
      const y = window.scrollY;
      content.style.transform = `translateY(${y * 0.2}px)`;
      content.style.opacity = String(Math.max(0.15, 1 - y / 900));
    });
  }

  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();
}

/* ========================= PAGE-LEVEL EFFECTS ========================= */
/* These attach to fixed elements outside #root (mouse tracker glow,
   click-pop layer), so they should only be set up ONCE — call these
   from main.js's init(), not from renderHome(). */

export function setupMouseTracker() {
  const glow = document.getElementById("mtGlow");
  const dot1 = document.getElementById("mtDot1");
  const dot2 = document.getElementById("mtDot2");

  let raf;

  document.addEventListener("mousemove", (e) => {
    cancelAnimationFrame(raf);
    raf = requestAnimationFrame(() => {
      const x = e.clientX;
      const y = e.clientY;

      if (glow) glow.style.transform = `translate(${x - 150}px, ${y - 150}px)`;
      if (dot1) dot1.style.transform = `translate(${x - 6}px, ${y - 6}px)`;
      if (dot2) dot2.style.transform = `translate(${x - 3}px, ${y - 3}px)`;
    });
  });
}

export function setupClickPop() {
  const layer = document.getElementById("clickPopLayer");
  if (!layer) return;

  document.addEventListener("click", (e) => {
    const target = e.target;
    if (target.closest("a, button, [role='button'], input, textarea")) return;

    const wrap = el("div", "pop-wrap");
    wrap.style.left = e.clientX + "px";
    wrap.style.top = e.clientY + "px";

    wrap.appendChild(el("span", "pop-ring"));
    wrap.appendChild(el("span", "pop-flash"));

    PARTICLES.forEach((p, i) => {
      const particle = el("span", "pop-particle");
      particle.style.background = i % 2 === 0 ? "#FF3DF0" : "#7F00FF";
      particle.style.setProperty("--tx", p[0] + "px");
      particle.style.setProperty("--ty", p[1] + "px");
      wrap.appendChild(particle);
    });

    layer.appendChild(wrap);

    setTimeout(() => {
      if (wrap.parentNode) wrap.parentNode.removeChild(wrap);
    }, 600);
  });
}
