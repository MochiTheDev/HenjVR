/**
 * ============================================================
 *  SITE CONTENT — the ONE file you edit for text/links/images
 * ============================================================
 * Nothing else in this repo should contain hardcoded copy or
 * URLs. index.html / credits.html just render whatever is in
 * this object. Change a value here, save, refresh — done.
 *
 * Structure notes:
 * - Every link has a `url`. Leave it as "" (empty string) to
 *   mark a button as "not wired up yet" — main.js will grey
 *   it out and disable clicks automatically instead of
 *   silently doing nothing.
 * - Image paths are relative to the site root, e.g.
 *   "assets/images/logo.png". Drop the real files into
 *   assets/images/ and update the path here.
 */

const SITE_CONTENT = {

  // ---- Global / repeats on every page ----------------------
  brand: {
    name: "HENJ",
    accent: "VR",              // rendered in the pink accent color
    logoImage: "assets/images/logo.png",
    homeUrl: "index.html"      // where clicking the logo/name goes
  },

  nav: {
    discord: {
      label: "Discord",
      url: "https://discord.gg/e8nNujkpF"
    }
  },

  footer: {
    tagline: "A community-built fan game inspired by Gorilla Tag. Not affiliated with Another Axiom.",
    columns: [
      {
        heading: "Navigate",
        links: [
          { label: "Credits", url: "credits.html" }
        ]
      },
      {
        heading: "Community",
        links: [
          { label: "Discord", url: "https://discord.gg/e8nNujkpF" }
        ]
      }
    ],
    copyright: "© 2026 HenjVR · Fan Project · Non-Commercial",
    madeBy: "Made by monkeys"
  },

  // ---- Home page ---------------------------------------------
  home: {
    eyebrow: "Gorilla Tag Physics",

    hero: {
      image: "assets/images/logo.png",
      title: { main: "HENJ", accent: "VR" },
      description: "HenjVR stands for Independence, which is what we hope to show this game. — HenjVR Developers",
      // If comingSoonUrl is empty, the button becomes an inert
      // label instead of a dead link.
      comingSoon: {
        label: "Coming Soon",
        url: ""
      },
      scrollHint: "Scroll"
    },

    releasing: {
      title: "Releasing In",
      range: "2 - 4 Months",
      note: "We hope to get it out within this time. — cheese"
    },

    communityBanner: {
      quote: "We hope to grow this community to the best, for real.",
      attribution: "HenjVR"
    },

    sneakPeeks: {
      eyebrow: "Sneak Peeks",
      title: "Sneak peeks that only who come to this website will see... besides the Santa hat",
      items: [
        {
          name: "Storage Crate",
          image: "assets/images/sneak-peek-crate.png",
          // detailUrl left empty on purpose in the original site —
          // fill this in with a real page/lightbox link when ready.
          detailUrl: ""
        },
        {
          name: "Santa Hat",
          image: "assets/images/sneak-peek-santa-hat.png",
          detailUrl: ""
        },
        {
          name: "Gazebo Pt2",
          image: "assets/images/sneak-peek-gazebo.png",
          detailUrl: ""
        }
      ]
    },

    almostThere: {
      eyebrow: "Almost There",
      title: "Keep Scrolling",
      subtitle: "Meet the monkeys behind HenjVR..."
    }
  },

  // ---- Credits / Owners page -----------------------------------
  credits: {
    eyebrow: "Credits",
    title: "The Owners",
    subtitle: "The monkeys behind HenjVR. Built by fans, for fans.",
    backHomeLabel: "Back Home",

    owners: [
      {
        name: "Owner",
        role: "Main Developer",
        image: "assets/images/owner-1.png",
        youtubeUrl: "https://www.youtube.com/@ridecentralofficial",
        badge: ""            // e.g. "Happy B-Day" — leave "" for none
      },
      {
        name: "Owner",
        role: "Main Modeler",
        image: "assets/images/owner-2.png",
        youtubeUrl: "https://www.youtube.com/@CyanKingVR",
        badge: "Happy B-Day"
      },
      {
        name: "Owner",
        role: "Manager",
        image: "assets/images/owner-3.png",
        youtubeUrl: "https://www.youtube.com/@TGGcheese",
        badge: ""
      }
    ]
  }
};

// Export for potential future bundling; also left as a global
// for plain <script> usage in index.html / credits.html.
if (typeof module !== "undefined" && module.exports) {
  module.exports = SITE_CONTENT;
}
