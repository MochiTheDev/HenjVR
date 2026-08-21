// main.js

"use strict";

// ============================================================
// App State
// ============================================================

let currentView = "home";

const appRoot = document.getElementById("root");


// ============================================================
// Navigation
// ============================================================

function navigateTo(view, withReveal = false) {
  currentView = view;

  window.scrollTo({
    top: 0,
    behavior: "instant"
  });

  if (view === "home") {
    renderHome();
  }

  if (view === "credits") {
    renderCredits(withReveal);
  }
}


// ============================================================
// Home Renderer
// ============================================================

function renderHome() {
  if (!appRoot) return;

  appRoot.innerHTML = "";

  const wrapper = document.createElement("div");

  // Navbar
  if (typeof buildNavbar === "function") {
    wrapper.appendChild(buildNavbar());
  }

  // Home content
  const main = document.createElement("main");

  if (typeof buildHero === "function") {
    main.appendChild(buildHero());
  }

  if (typeof buildRelease === "function") {
    main.appendChild(buildRelease());
  }

  if (typeof buildCommunity === "function") {
    main.appendChild(buildCommunity());
  }

  if (typeof buildSneakPeek === "function") {
    main.appendChild(buildSneakPeek());
  }

  if (typeof buildScrollTeaser === "function") {
    main.appendChild(buildScrollTeaser());
  }

  wrapper.appendChild(main);

  // Footer
  if (typeof buildFooter === "function") {
    wrapper.appendChild(buildFooter());
  }

  appRoot.appendChild(wrapper);

  // Setup home functionality
  if (typeof setupNavbarScroll === "function") {
    setupNavbarScroll();
  }

  if (typeof setupHeroParallax === "function") {
    setupHeroParallax();
  }

  if (typeof setupScrollToCredits === "function") {
    setupScrollToCredits();
  }
}


// ============================================================
// Credits Renderer
// ============================================================

function renderCredits(withReveal = false) {
  if (!appRoot) return;

  appRoot.innerHTML = "";

  const wrapper = document.createElement("div");

  // Optional transition
  if (withReveal && typeof buildWaveReveal === "function") {
    const wave = buildWaveReveal(() => {
      if (wave.parentNode) {
        wave.parentNode.removeChild(wave);
      }
    });

    wrapper.appendChild(wave);
  }

  // Navbar
  if (typeof buildNavbar === "function") {
    wrapper.appendChild(buildNavbar());
  }

  // Credits page
  if (typeof buildCreditsPage === "function") {
    wrapper.appendChild(buildCreditsPage());
  }

  // Footer
  if (typeof buildFooter === "function") {
    wrapper.appendChild(buildFooter());
  }

  appRoot.appendChild(wrapper);

  // Setup credits functionality
  if (typeof setupNavbarScroll === "function") {
    setupNavbarScroll();
  }

  if (typeof setupReveals === "function") {
    setupReveals(wrapper);
  }
}


// ============================================================
// Credits Transition
// ============================================================

function openCredits() {
  if (typeof buildCreditsTransition !== "function") {
    navigateTo("credits", true);
    return;
  }

  const overlay = buildCreditsTransition();

  document.body.appendChild(overlay);

  setTimeout(() => {
    navigateTo("credits", true);

    if (overlay && overlay.parentNode) {
      overlay.parentNode.removeChild(overlay);
    }
  }, 900);
}


// ============================================================
// Automatic Credits Trigger
// ============================================================

function setupCreditsScrollTrigger() {
  let triggered = false;

  window.addEventListener(
    "scroll",
    () => {
      if (triggered) return;

      const scrollBottom =
        window.scrollY + window.innerHeight;

      const documentHeight =
        document.documentElement.scrollHeight;

      if (
        window.scrollY > 120 &&
        scrollBottom >= documentHeight - 40
      ) {
        triggered = true;

        openCredits();
      }
    },
    { passive: true }
  );
}


// ============================================================
// Global Navigation
// ============================================================

window.navigateTo = navigateTo;
window.openCredits = openCredits;
window.renderHome = renderHome;
window.renderCredits = renderCredits;


// ============================================================
// Start App
// ============================================================

function init() {
  if (!appRoot) {
    console.error("HenjVR: #root element was not found.");
    return;
  }

  renderHome();

  setupCreditsScrollTrigger();
}


// ============================================================
// DOM Ready
// ============================================================

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", init);
} else {
  init();
}
