(function () {
  "use strict";

  var OWNERS = [
    {
      img: "https://yt3.googleusercontent.com/gT19VNPd6INqTeEHsYHdl0JdHbUhoHlaJS8BwoyGRdLyOCbds5vd4ShDigYBL5XV4ihoLG0WjQY=s160-c-k-c0x00ffffff-no-rj",
      channel: "https://www.youtube.com/channel/UCo7XiSXx7lBhLkw9NtHLdRQ",
      name: "Stunt",
      role: "Main Developer"
    },
    {
      img: "https://yt3.googleusercontent.com/qkCuXVi7lBWQbGenxHWPrM4dLm4n8Y74WsH56HkLCCRviP-oMelJ-QPgWFAq6WPUKCpwkaYadw=s160-c-k-c0x00ffffff-no-rj",
      channel: "https://www.youtube.com/@CyanKingVR",
      name: "Cyanking",
      role: "Main Modeler"
    },
    {
      img: "https://cdn.discordapp.com/attachments/1538658994741317785/1540124682479734935/image.png?ex=6a88d062&is=6a877ee2&hm=e4f4be5953028d440a8e520f6213e2b874b72451a14bcf4076d8bef6928f1de7&",
      channel: "https://www.youtube.com/@TGGcheese",
      name: "Cheese",
      role: "Manager"
    }
  ];

  function createElement(tag, className) {
    var element = document.createElement(tag);

    if (className) {
      element.className = className;
    }

    return element;
  }

  function buildCredits() {
    var page = createElement("div", "credits-page");

    var section = createElement(
      "section",
      "credits-section"
    );

    /*
      Header
    */

    var header = createElement(
      "div",
      "credits-header reveal"
    );

    var label = createElement(
      "div",
      "credits-label"
    );

    label.textContent = "- Credits -";

    var title = createElement(
      "h1",
      "credits-title"
    );

    title.textContent = "The Owners";

    var subtitle = createElement(
      "p",
      "credits-sub"
    );

    subtitle.textContent =
      "The monkeys behind HenjVR. Built by fans, for fans.";

    header.appendChild(label);
    header.appendChild(title);
    header.appendChild(subtitle);

    section.appendChild(header);

    /*
      Owner cards
    */

    var grid = createElement(
      "div",
      "credits-grid"
    );

    OWNERS.forEach(function (owner, index) {

      var card = createElement(
        "article",
        "owner-card reveal"
      );

      card.style.transitionDelay =
        (index * 150) + "ms";

      /*
        Birthday badge
      */

      if (index === 1) {

        var birthday = createElement(
          "div",
          "bday-badge"
        );

        var birthdayText =
          createElement("span");

        birthdayText.textContent =
          "Happy B-Day";

        birthday.appendChild(
          birthdayText
        );

        card.appendChild(birthday);
      }

      /*
        Owner image
      */

      var imageWrap = createElement(
        "div",
        "owner-img-wrap"
      );

      var image = createElement("img");

      image.className = "pixelated";
      image.src = owner.img;
      image.alt =
        owner.name + " - HenjVR";

      imageWrap.appendChild(image);

      card.appendChild(imageWrap);

      /*
        Owner name
      */

      var name = createElement(
        "h3",
        "owner-name"
      );

      name.textContent =
        owner.name;

      card.appendChild(name);

      /*
        Owner role
      */

      var role = createElement(
        "p",
        "owner-role"
      );

      role.textContent =
        owner.role;

      card.appendChild(role);

      /*
        YouTube button
      */

      var youtube = createElement(
        "a",
        "yt-btn"
      );

      youtube.href =
        owner.channel;

      youtube.target = "_blank";
      youtube.rel =
        "noopener noreferrer";

      /*
        Animated wave
      */

      var wave = createElement(
        "span",
        "wave"
      );

      youtube.appendChild(wave);

      /*
        YouTube icon
      */

      var icon = createElement(
        "span"
      );

      icon.innerHTML = `
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="14"
          height="14"
          viewBox="0 0 24 24"
          fill="currentColor"
        >
          <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
        </svg>
      `;

      youtube.appendChild(icon);

      /*
        YouTube text
      */

      var youtubeText =
        createElement("span");

      youtubeText.textContent =
        "YouTube";

      youtube.appendChild(
        youtubeText
      );

      card.appendChild(youtube);

      grid.appendChild(card);
    });

    section.appendChild(grid);

    /*
      Back Home
    */

    var backWrapper =
      createElement(
        "div",
        "back-home-wrap reveal"
      );

    backWrapper.style.transitionDelay =
      "300ms";

    var backButton =
      createElement(
        "a",
        "back-home"
      );

    backButton.href = "#top";
    backButton.textContent =
      "← Back Home";

    backButton.addEventListener(
      "click",
      function (event) {

        event.preventDefault();

        window.scrollTo({
          top: 0,
          behavior: "smooth"
        });

      }
    );

    backWrapper.appendChild(
      backButton
    );

    section.appendChild(
      backWrapper
    );

    page.appendChild(section);

    return page;
  }

  /*
    Scroll reveal animation
  */

  function setupReveals(container) {

    var elements =
      container.querySelectorAll(
        ".reveal"
      );

    if (!elements.length) {
      return;
    }

    var observer =
      new IntersectionObserver(
        function (entries) {

          entries.forEach(
            function (entry) {

              if (
                entry.isIntersecting
              ) {

                entry.target.classList.add(
                  "shown"
                );

                observer.unobserve(
                  entry.target
                );
              }

            }
          );

        },
        {
          threshold: 0.15
        }
      );

    elements.forEach(
      function (element) {
        observer.observe(element);
      }
    );
  }

  /*
    Render Credits
  */

  var root =
    document.getElementById("root");

  if (!root) {
    console.error(
      "Credits JS: #root was not found."
    );

    return;
  }

  root.innerHTML = "";

  var credits =
    buildCredits();

  root.appendChild(credits);

  setupReveals(credits);

})();
