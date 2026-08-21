// src/main.js
"use strict";

import {
  buildNavbar,
  buildHero,
  buildRelease,
  buildCommunity,
  buildSneakPeek,
  buildScrollTeaser,
  buildFooter,
  setupNavbarScroll,
  setupHeroParallax,
  setupMouseTracker,
  setupClickPop
} from "./home.js";

import { buildCreditsPage, setupReveals } from "./credits.js";

// ============================================================
// App State
// ============================================================

let currentView = "home";
const appRoot = document.getElementById("root");

// ============================================================
// Navigation
// ============================================================

function navigateTo(view) {
  currentView = view;
  window.scrollTo({ top: 0, behavior: "instant" });

  if (view === "home") renderHome();
  if (view === "credits") renderCredits();
}

// ============================================================
// Home Renderer
// ============================================================

function renderHome() {
  if (!appRoot) return;
  appRoot.innerHTML = "";

  const wrapper = document.createElement("div");
  wrapper.appendChild(buildNavbar());

  const main = document.createElement("main");
  main.appendChild(buildHero());
  main.appendChild(buildRelease());
  main.appendChild(buildCommunity());
  main.appendChild(buildSneakPeek());
  main.appendChild(buildScrollTeaser());
  wrapper.appendChild(main);

  wrapper.appendChild(buildFooter());
  appRoot.appendChild(wrapper);

  setupNavbarScroll();
  setupHeroParallax();
}

// ============================================================
// Credits Renderer
// ============================================================

function renderCredits() {
  if (!appRoot) return;
  appRoot.innerHTML = "";

  const wrapper = document.createElement("div");
  wrapper.appendChild(buildNavbar());
  wrapper.appendChild(buildCreditsPage());
  wrapper.appendChild(buildFooter());
  appRoot.appendChild(wrapper);

  setupNavbarScroll();
  setupReveals(wrapper);
}

// ============================================================
// Automatic "keep scrolling" -> Credits trigger
// ============================================================
// Only active on the home view. Fires once you scroll close to
// the bottom of the page (past the "Keep Scrolling" teaser).

function setupCreditsScrollTrigger() {
  let triggered = false;

  window.addEventListener(
    "scroll",
    () => {
      if (triggered || currentView !== "home") return;

      const scrollBottom = window.scrollY + window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;

      if (window.scrollY > 120 && scrollBottom >= documentHeight - 40) {
        triggered = true;
        navigateTo("credits");
        // Reset the trigger once we've left, so it can fire again
        // if the user navigates back home and scrolls down again.
        setTimeout(() => { triggered = false; }, 1000);
      }
    },
    { passive: true }
  );
}

// ============================================================
// Global Navigation (used by onclick handlers in home.js / credits.js)
// ============================================================

window.navigateTo = navigateTo;

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

  // Page-level effects that live outside #root — set up once,
  // not on every render.
  setupMouseTracker();
  setupClickPop();
}

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", init);
} else {
  init();
}
