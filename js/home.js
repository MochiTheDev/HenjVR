(function () {
  "use strict";

  var MONKEY_IMG =
    "https://media.base44.com/images/public/6a84f55d456ff6f1ee0a2e3d/e0e195cd1_Screenshot2026-08-16192822.png";

  var SNEAK_ITEMS = [
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

  var PARTICLES = [
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
    var node = document.createElement(tag);

    if (className) {
      node.className = className;
    }

    if (html !== undefined) {
      node.innerHTML = html;
    }

    return node;
  }

  /* =========================
     NAVBAR
  ========================= */

  function buildNavbar() {
    var header = el("header", "navbar");
    header.id = "navbar";

    var inner = el("div", "navbar-inner");

    var logo = el("a", "navbar-logo");
    logo.href = "#top";

    logo.addEventListener("click", function (e) {
      e.preventDefault();
      window.scrollTo({
        top: 0,
        behavior: "smooth"
      });
    });

    logo.innerHTML =
      '<img src="' +
      MONKEY_IMG +
      '" alt="HenjVR logo">' +
      '<span>HENJ<span class="accent">VR</span></span>';

    var nav = el("nav", "navbar-links");

    var discord = el("a", "discord-btn");
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

  /* =========================
     HERO
  ========================= */

  function buildHero() {
    var section = el("section", "hero");
    section.id = "top";

    var bg = el("div", "hero-bg");

    var gradient = el("div", "hero-gradient");
    bg.appendChild(gradient);

    var checker = el("div", "checker-bg");
    checker.style.position = "absolute";
    checker.style.inset = "0";
    checker.style.opacity = "0.4";

    bg.appendChild(checker);

    var scan = el("div", "scanlines");
    scan.style.position = "absolute";
    scan.style.inset = "0";
    scan.style.opacity = "0.5";

    bg.appendChild(scan);

    section.appendChild(bg);

    /* Floating pixels */

    var accents = [
      {
        left: "8%",
        top: "22%",
        size: "16px",
        bg: "#FF3DF0",
        border: "pink",
        delay: "0s"
      },
      {
        right: "10%",
        top: "30%",
        size: "12px",
        bg: "#7F00FF",
        border: "",
        delay: "0.8s"
      },
      {
        bottom: "18%",
        left: "14%",
        size: "12px",
        bg: "#ffffff",
        border: "",
        delay: "1.4s"
      },
      {
        bottom: "22%",
        right: "16%",
        size: "16px",
        bg: "#FF3DF0",
        border: "pink",
        delay: "0.4s"
      }
    ];

    accents.forEach(function (a) {
      var d = el(
        "div",
        "accent-pixel " +
          (a.border === "pink"
            ? "pixel-border-pink"
            : "pixel-border")
      );

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

    /* Hero content */

    var content = el("div", "hero-content");
    content.id = "heroContent";

    var badge = el("div", "hero-badge");

    badge.innerHTML =
      '<span class="dot"></span>' +
      '<span>Gorilla Tag Physics</span>';

    content.appendChild(badge);

    /* Monkey */

    var monkeyWrap = el("div", "hero-monkey-wrap");

    var glow = el("div", "hero-monkey-glow");
    monkeyWrap.appendChild(glow);

    var monkeyImg = el("img", "hero-monkey float-bob");

    monkeyImg.src = MONKEY_IMG;
    monkeyImg.alt =
      "HenjVR pixel monkey mascot wearing a purple wizard hat";

    monkeyWrap.appendChild(monkeyImg);

    content.appendChild(monkeyWrap);

    /* Title */

    var h1 = el("h1");

    h1.innerHTML =
      'HENJ<span class="pink">VR</span>';

    content.appendChild(h1);

    /* Description */

    var p = el("p");

    p.textContent =
      "HenjVR stands for Independence, Which is what we hope to show this game, -HenjVR Developers";

    content.appendChild(p);

    /* Button */

    var actions = el("div", "hero-actions");

    var btn = el("button", "coming-soon");

    btn.type = "button";
    btn.disabled = true;
    btn.textContent = "Coming Soon";

    actions.appendChild(btn);
    content.appendChild(actions);

    section.appendChild(content);

    /* Scroll hint */

    var hint = el("div", "scroll-hint");

    hint.textContent = "▼ scroll ▼";

    section.appendChild(hint);

    return section;
  }

  /* =========================
     RELEASE
  ========================= */

  function buildRelease() {
    var section = el("section", "release");
    section.id = "release";

    var checker = el("div", "checker-bg");

    checker.style.position = "absolute";
    checker.style.inset = "0";
    checker.style.opacity = "0.3";

    section.appendChild(checker);

    var scan = el("div", "scanlines");

    scan.style.position = "absolute";
    scan.style.inset = "0";
    scan.style.opacity = "0.4";

    section.appendChild(scan);

    var inner = el("div", "release-inner");

    var badge = el("div", "hero-badge");

    badge.innerHTML =
      '<span class="live-dot"></span>' +
      '<span>Coming Soon</span>';

    inner.appendChild(badge);

    var h2 = el("h2");
    h2.textContent = "Releasing In";

    inner.appendChild(h2);

    var big = el("p", "big");
    big.textContent = "2 - 4 Months";

    inner.appendChild(big);

    var sub = el("p", "sub");

    sub.textContent =
      "We HOPE to get it out Within this time -cheese";

    inner.appendChild(sub);

    section.appendChild(inner);

    return section;
  }

  /* =========================
     COMMUNITY
  ========================= */

  function buildCommunity() {
    var section = el("section", "community");

    var bg = el("div", "community-bg");
    section.appendChild(bg);

    var scan = el("div", "scanlines");

    scan.style.position = "absolute";
    scan.style.inset = "0";
    scan.style.opacity = "0.3";

    section.appendChild(scan);

    var checker = el("div", "checker-bg");

    checker.style.position = "absolute";
    checker.style.inset = "0";
    checker.style.opacity = "0.2";

    section.appendChild(checker);

    /* Floating pixels */

    var a1 = el(
      "div",
      "accent-pixel pixel-border"
    );

    a1.style.left = "10%";
    a1.style.top = "24%";
    a1.style.height = "16px";
    a1.style.width = "16px";
    a1.style.background = "#ffffff";

    section.appendChild(a1);

    var a2 = el(
      "div",
      "accent-pixel pixel-border-pink"
    );

    a2.style.right = "12%";
    a2.style.top = "30%";
    a2.style.height = "12px";
    a2.style.width = "12px";
    a2.style.background = "#ffffff";
    a2.style.animationDelay = "0.8s";

    section.appendChild(a2);

    var inner = el("div", "community-inner");

    var h2 = el("h2");

    h2.textContent =
      "We Hope to Grow This Community to the BEST frfr";

    inner.appendChild(h2);

    var sig = el("p", "sig");

    sig.textContent = "- HenjVR";

    inner.appendChild(sig);

    section.appendChild(inner);

    return section;
  }

  /* =========================
     SNEAK PEEK
  ========================= */

  function buildSneakPeek() {
    var section = el("section", "sneak");

    var scan = el("div", "scanlines");

    scan.style.position = "absolute";
    scan.style.inset = "0";
    scan.style.opacity = "0.3";

    section.appendChild(scan);

    /* Floating pixels */

    var a1 = el(
      "div",
      "accent-pixel pixel-border-pink"
    );

    a1.style.left = "8%";
    a1.style.top = "20%";
    a1.style.height = "12px";
    a1.style.width = "12px";
    a1.style.background = "#FF3DF0";

    section.appendChild(a1);

    var a2 = el(
      "div",
      "accent-pixel pixel-border"
    );

    a2.style.right = "10%";
    a2.style.bottom = "18%";
    a2.style.height = "12px";
    a2.style.width = "12px";
    a2.style.background = "#7F00FF";
    a2.style.animationDelay = "0.9s";

    section.appendChild(a2);

    var inner = el("div", "sneak-inner");

    var center = el("div");

    center.style.textAlign = "center";

    var label = el("div", "sneak-label");

    label.textContent = "- Sneak Peaks -";

    center.appendChild(label);

    var desc = el("h2", "sneak-desc");

    desc.textContent =
      "Sneak peaks that only who come to this website will see... besides the santa hat";

    center.appendChild(desc);

    inner.appendChild(center);

    /* Sneak peek grid */

    var grid = el("div", "sneak-grid");

    SNEAK_ITEMS.forEach(function (item) {
      var card = el("div", "sneak-card");

      var imgWrap = el("div", "sneak-img-wrap");

      var img = el("img", "pixelated");

      img.src = item.img;
      img.alt = item.label;

      imgWrap.appendChild(img);

      card.appendChild(imgWrap);

      var labelRow = el("p", "sneak-label-row");

      labelRow.textContent = item.label;

      card.appendChild(labelRow);

      grid.appendChild(card);
    });

    inner.appendChild(grid);

    section.appendChild(inner);

    return section;
  }

  /* =========================
     SCROLL TEASER
  ========================= */

  function buildScrollTeaser() {
    var section = el("section", "teaser");

    var checker = el("div", "checker-bg");

    checker.style.position = "absolute";
    checker.style.inset = "0";
    checker.style.opacity = "0.2";

    section.appendChild(checker);

    var scan = el("div", "scanlines");

    scan.style.position = "absolute";
    scan.style.inset = "0";
    scan.style.opacity = "0.3";

    section.appendChild(scan);

    /* Floating pixels */

    var a1 = el(
      "div",
      "accent-pixel pixel-border-pink"
    );

    a1.style.left = "12%";
    a1.style.top = "26%";
    a1.style.height = "16px";
    a1.style.width = "16px";
    a1.style.background = "#FF3DF0";

    section.appendChild(a1);

    var a2 = el(
      "div",
      "accent-pixel pixel-border"
    );

    a2.style.right = "14%";
    a2.style.top = "32%";
    a2.style.height = "12px";
    a2.style.width = "12px";
    a2.style.background = "#7F00FF";
    a2.style.animationDelay = "0.7s";

    section.appendChild(a2);

    var inner = el("div", "teaser-inner");

    var label = el("div", "teaser-label");

    label.textContent = "- Almost There -";

    inner.appendChild(label);

    var h2 = el("h2");

    h2.textContent = "Keep Scrolling";

    inner.appendChild(h2);

    var p = el("p");

    p.textContent =
      "Meet the monkeys behind HenjVR...";

    inner.appendChild(p);

    var arrows = el(
      "div",
      "arrows animate-bounce"
    );

    arrows.textContent = "▼ ▼ ▼";

    inner.appendChild(arrows);

    section.appendChild(inner);

    return section;
  }

  /* =========================
     FOOTER
  ========================= */

  function buildFooter() {
    var footer = el("footer", "footer");

    var inner = el("div", "footer-inner");

    var grid = el("div", "footer-grid");

    /* Brand */

    var brandCol = el("div", "col-span-2");

    var brand = el("div", "footer-brand");

    brand.innerHTML =
      '<span class="footer-brand-icon">' +
      '<span></span>' +
      '</span>' +
      '<span class="footer-brand-text">' +
      'HENJ<span style="color:#FF3DF0">VR</span>' +
      '</span>';

    brandCol.appendChild(brand);

    var about = el("p", "footer-about");

    about.textContent =
      "A community-built fan game inspired by Gorilla Tag. Not affiliated with Another Axiom. Made by monkeys, for monkeys.";

    brandCol.appendChild(about);

    grid.appendChild(brandCol);

    /* Navigate */

    var navCol = el("div");

    navCol.innerHTML =
      '<div class="footer-title purple">Navigate</div>';

    var navList = el("ul", "footer-list");

    var navItem = el("li");

    var navLink = el("a");

    navLink.href = "#top";
    navLink.textContent = "Home";

    navLink.addEventListener("click", function (e) {
      e.preventDefault();

      window.scrollTo({
        top: 0,
        behavior: "smooth"
      });
    });

    navItem.appendChild(navLink);
    navList.appendChild(navItem);
    navCol.appendChild(navList);

    grid.appendChild(navCol);

    /* Community */

    var commCol = el("div");

    commCol.innerHTML =
      '<div class="footer-title pink">Community</div>';

    var commList = el("ul", "footer-list");

    var commItem = el("li");

    var commLink = el("a");

    commLink.href =
      "https://discord.gg/e8nNujkpF";

    commLink.target = "_blank";
    commLink.rel = "noopener noreferrer";

    commLink.textContent = "Discord";

    commItem.appendChild(commLink);

    commList.appendChild(commItem);

    commCol.appendChild(commList);

    grid.appendChild(commCol);

    inner.appendChild(grid);

    /* Bottom */

    var bottom = el("div", "footer-bottom");

    bottom.innerHTML =
      "<p>© 2026 HenjVR · Fan Project · Non-Commercial</p>" +
      "<p>Made by monkeys</p>";

    inner.appendChild(bottom);

    footer.appendChild(inner);

    return footer;
  }

  /* =========================
     NAVBAR SCROLL
  ========================= */

  function setupNavbarScroll() {
    var navbar = document.getElementById("navbar");

    if (!navbar) return;

    function onScroll() {
      if (window.scrollY > 40) {
        navbar.classList.add("scrolled");
      } else {
        navbar.classList.remove("scrolled");
      }
    }

    onScroll();

    window.addEventListener(
      "scroll",
      onScroll,
      { passive: true }
    );
  }

  /* =========================
     HERO PARALLAX
  ========================= */

  function setupHeroParallax() {
    var content =
      document.getElementById("heroContent");

    if (!content) return;

    var raf;

    function onScroll() {
      cancelAnimationFrame(raf);

      raf = requestAnimationFrame(function () {
        var y = window.scrollY;

        content.style.transform =
          "translateY(" +
          y * 0.2 +
          "px)";

        content.style.opacity =
          String(
            Math.max(
              0.15,
              1 - y / 900
            )
          );
      });
    }

    window.addEventListener(
      "scroll",
      onScroll,
      { passive: true }
    );

    onScroll();
  }

  /* =========================
     MOUSE TRACKER
  ========================= */

  function setupMouseTracker() {
    var glow =
      document.getElementById("mtGlow");

    var dot1 =
      document.getElementById("mtDot1");

    var dot2 =
      document.getElementById("mtDot2");

    var raf;

    document.addEventListener(
      "mousemove",
      function (e) {
        cancelAnimationFrame(raf);

        raf = requestAnimationFrame(
          function () {
            var x = e.clientX;
            var y = e.clientY;

            if (glow) {
              glow.style.transform =
                "translate(" +
                (x - 150) +
                "px, " +
                (y - 150) +
                "px)";
            }

            if (dot1) {
              dot1.style.transform =
                "translate(" +
                (x - 6) +
                "px, " +
                (y - 6) +
                "px)";
            }

            if (dot2) {
              dot2.style.transform =
                "translate(" +
                (x - 3) +
                "px, " +
                (y - 3) +
                "px)";
            }
          }
        );
      }
    );
  }

  /* =========================
     CLICK POP
  ========================= */

  function setupClickPop() {
    var layer =
      document.getElementById(
        "clickPopLayer"
      );

    if (!layer) return;

    document.addEventListener(
      "click",
      function (e) {
        var target = e.target;

        if (
          target.closest(
            "a, button, [role='button'], input, textarea"
          )
        ) {
          return;
        }

        var wrap =
          el("div", "pop-wrap");

        wrap.style.left =
          e.clientX + "px";

        wrap.style.top =
          e.clientY + "px";

        var ring =
          el("span", "pop-ring");

        wrap.appendChild(ring);

        var flash =
          el("span", "pop-flash");

        wrap.appendChild(flash);

        PARTICLES.forEach(
          function (p, i) {
            var particle =
              el(
                "span",
                "pop-particle"
              );

            particle.style.background =
              i % 2 === 0
                ? "#FF3DF0"
                : "#7F00FF";

            particle.style.setProperty(
              "--tx",
              p[0] + "px"
            );

            particle.style.setProperty(
              "--ty",
              p[1] + "px"
            );

            wrap.appendChild(
              particle
            );
          }
        );

        layer.appendChild(wrap);

        setTimeout(function () {
          if (wrap.parentNode) {
            wrap.parentNode.removeChild(
              wrap
            );
          }
        }, 600);
      }
    );
  }

  /* =========================
     BUILD HOME PAGE
  ========================= */

  function renderHome() {
    var appRoot =
      document.getElementById("root");

    if (!appRoot) return;

    var wrap = el("div");

    /* Navbar */

    wrap.appendChild(
      buildNavbar()
    );

    /* Main */

    var main = el("main");

    main.appendChild(
      buildHero()
    );

    main.appendChild(
      buildRelease()
    );

    main.appendChild(
      buildCommunity()
    );

    main.appendChild(
      buildSneakPeek()
    );

    main.appendChild(
      buildScrollTeaser()
    );

    wrap.appendChild(main);

    /* Footer */

    wrap.appendChild(
      buildFooter()
    );

    appRoot.innerHTML = "";

    appRoot.appendChild(wrap);

    /* Setup */

    setupNavbarScroll();
    setupHeroParallax();
  }

  /* =========================
     START
  ========================= */

  renderHome();

  setupMouseTracker();
  setupClickPop();

})();
