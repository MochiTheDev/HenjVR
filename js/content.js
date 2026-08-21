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
     HERO CONTENT
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

    /* Main content */

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

    /* Coming Soon */

    var actions = el("div", "hero-actions");

    var button = el("button", "coming-soon");

    button.type = "button";
    button.disabled = true;
    button.textContent = "Coming Soon";

    actions.appendChild(button);
    content.appendChild(actions);

    section.appendChild(content);

    /* Scroll hint */

    var hint = el("div", "scroll-hint");

    hint.textContent = "▼ scroll ▼";

    section.appendChild(hint);

    return section;
  }

  /* =========================
     RELEASE CONTENT
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

    var title = el("h2");

    title.textContent = "Releasing In";

    inner.appendChild(title);

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
     COMMUNITY CONTENT
  ========================= */

  function buildCommunity() {
    var section = el("section", "community");

    var background = el("div", "community-bg");
    section.appendChild(background);

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

    /* Decorative pixels */

    var pixel1 = el(
      "div",
      "accent-pixel pixel-border"
    );

    pixel1.style.left = "10%";
    pixel1.style.top = "24%";
    pixel1.style.height = "16px";
    pixel1.style.width = "16px";
    pixel1.style.background = "#ffffff";

    section.appendChild(pixel1);

    var pixel2 = el(
      "div",
      "accent-pixel pixel-border-pink"
    );

    pixel2.style.right = "12%";
    pixel2.style.top = "30%";
    pixel2.style.height = "12px";
    pixel2.style.width = "12px";
    pixel2.style.background = "#ffffff";
    pixel2.style.animationDelay = "0.8s";

    section.appendChild(pixel2);

    /* Text */

    var inner = el("div", "community-inner");

    var title = el("h2");

    title.textContent =
      "We Hope to Grow This Community to the BEST frfr";

    inner.appendChild(title);

    var signature = el("p", "sig");

    signature.textContent = "- HenjVR";

    inner.appendChild(signature);

    section.appendChild(inner);

    return section;
  }

  /* =========================
     SNEAK PEEK CONTENT
  ========================= */

  function buildSneakPeek() {
    var section = el("section", "sneak");

    var scan = el("div", "scanlines");

    scan.style.position = "absolute";
    scan.style.inset = "0";
    scan.style.opacity = "0.3";

    section.appendChild(scan);

    /* Decorative pixels */

    var pixel1 = el(
      "div",
      "accent-pixel pixel-border-pink"
    );

    pixel1.style.left = "8%";
    pixel1.style.top = "20%";
    pixel1.style.height = "12px";
    pixel1.style.width = "12px";
    pixel1.style.background = "#FF3DF0";

    section.appendChild(pixel1);

    var pixel2 = el(
      "div",
      "accent-pixel pixel-border"
    );

    pixel2.style.right = "10%";
    pixel2.style.bottom = "18%";
    pixel2.style.height = "12px";
    pixel2.style.width = "12px";
    pixel2.style.background = "#7F00FF";
    pixel2.style.animationDelay = "0.9s";

    section.appendChild(pixel2);

    var inner = el("div", "sneak-inner");

    /* Header */

    var center = el("div");

    center.style.textAlign = "center";

    var label = el("div", "sneak-label");

    label.textContent = "- Sneak Peaks -";

    center.appendChild(label);

    var description = el("h2", "sneak-desc");

    description.textContent =
      "Sneak peaks that only who come to this website will see... besides the santa hat";

    center.appendChild(description);

    inner.appendChild(center);

    /* Cards */

    var grid = el("div", "sneak-grid");

    SNEAK_ITEMS.forEach(function (item) {
      var card = el("div", "sneak-card");

      var imageWrap = el(
        "div",
        "sneak-img-wrap"
      );

      var image = el(
        "img",
        "pixelated"
      );

      image.src = item.img;
      image.alt = item.label;

      imageWrap.appendChild(image);

      card.appendChild(imageWrap);

      var cardLabel = el(
        "p",
        "sneak-label-row"
      );

      cardLabel.textContent =
        item.label;

      card.appendChild(cardLabel);

      grid.appendChild(card);
    });

    inner.appendChild(grid);

    section.appendChild(inner);

    return section;
  }

  /* =========================
     SCROLL TEASER CONTENT
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

    /* Decorative pixels */

    var pixel1 = el(
      "div",
      "accent-pixel pixel-border-pink"
    );

    pixel1.style.left = "12%";
    pixel1.style.top = "26%";
    pixel1.style.height = "16px";
    pixel1.style.width = "16px";
    pixel1.style.background = "#FF3DF0";

    section.appendChild(pixel1);

    var pixel2 = el(
      "div",
      "accent-pixel pixel-border"
    );

    pixel2.style.right = "14%";
    pixel2.style.top = "32%";
    pixel2.style.height = "12px";
    pixel2.style.width = "12px";
    pixel2.style.background = "#7F00FF";
    pixel2.style.animationDelay = "0.7s";

    section.appendChild(pixel2);

    /* Text */

    var inner = el("div", "teaser-inner");

    var label = el(
      "div",
      "teaser-label"
    );

    label.textContent = "- Almost There -";

    inner.appendChild(label);

    var title = el("h2");

    title.textContent = "Keep Scrolling";

    inner.appendChild(title);

    var description = el("p");

    description.textContent =
      "Meet the monkeys behind HenjVR...";

    inner.appendChild(description);

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
     FOOTER CONTENT
  ========================= */

  function buildFooter() {
    var footer = el("footer", "footer");

    var inner = el(
      "div",
      "footer-inner"
    );

    var grid = el(
      "div",
      "footer-grid"
    );

    /* Brand */

    var brandColumn = el(
      "div",
      "col-span-2"
    );

    var brand = el(
      "div",
      "footer-brand"
    );

    brand.innerHTML =
      '<span class="footer-brand-icon">' +
      '<span></span>' +
      '</span>' +
      '<span class="footer-brand-text">' +
      'HENJ<span style="color:#FF3DF0">VR</span>' +
      '</span>';

    brandColumn.appendChild(brand);

    var about = el(
      "p",
      "footer-about"
    );

    about.textContent =
      "A community-built fan game inspired by Gorilla Tag. Not affiliated with Another Axiom. Made by monkeys, for monkeys.";

    brandColumn.appendChild(about);

    grid.appendChild(brandColumn);

    /* Navigate */

    var navigation = el("div");

    navigation.innerHTML =
      '<div class="footer-title purple">Navigate</div>';

    var navigationList = el(
      "ul",
      "footer-list"
    );

    var navigationItem = el("li");

    var homeLink = el("a");

    homeLink.href = "#top";
    homeLink.textContent = "Home";

    navigationItem.appendChild(homeLink);

    navigationList.appendChild(
      navigationItem
    );

    navigation.appendChild(
      navigationList
    );

    grid.appendChild(navigation);

    /* Community */

    var community = el("div");

    community.innerHTML =
      '<div class="footer-title pink">Community</div>';

    var communityList = el(
      "ul",
      "footer-list"
    );

    var discordItem = el("li");

    var discordLink = el("a");

    discordLink.href =
      "https://discord.gg/e8nNujkpF";

    discordLink.target = "_blank";
    discordLink.rel =
      "noopener noreferrer";

    discordLink.textContent =
      "Discord";

    discordItem.appendChild(
      discordLink
    );

    communityList.appendChild(
      discordItem
    );

    community.appendChild(
      communityList
    );

    grid.appendChild(
      community
    );

    inner.appendChild(grid);

    /* Footer bottom */

    var bottom = el(
      "div",
      "footer-bottom"
    );

    bottom.innerHTML =
      "<p>© 2026 HenjVR · Fan Project · Non-Commercial</p>" +
      "<p>Made by monkeys</p>";

    inner.appendChild(bottom);

    footer.appendChild(inner);

    return footer;
  }

  /* =========================
     ADD CONTENT TO PAGE
  ========================= */

  var root =
    document.getElementById("root");

  if (!root) {
    console.error(
      "HenjVR: #root element not found."
    );
    return;
  }

  var main = document.createElement("main");

  main.appendChild(buildHero());
  main.appendChild(buildRelease());
  main.appendChild(buildCommunity());
  main.appendChild(buildSneakPeek());
  main.appendChild(buildScrollTeaser());

  root.appendChild(main);
  root.appendChild(buildFooter());

})();
