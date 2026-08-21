// src/credits.js
// Same credits page builder as before — exported (instead of an
// IIFE that grabbed #root itself), and renamed from buildCredits
// to buildCreditsPage so it matches what main.js looks for.

const OWNERS = [
  {
    img: "assets/images/owner-1.png",   // was Stunt's yt3.googleusercontent.com URL
    channel: "https://www.youtube.com/channel/UCo7XiSXx7lBhLkw9NtHLdRQ",
    name: "Stunt",
    role: "Main Developer"
  },
  {
    img: "assets/images/owner-2.png",   // was Cyanking's yt3.googleusercontent.com URL
    channel: "https://www.youtube.com/@CyanKingVR",
    name: "Cyanking",
    role: "Main Modeler"
  },
  {
    img: "assets/images/owner-3.png",   // was Cheese's discordapp.com URL
    channel: "https://www.youtube.com/@TGGcheese",
    name: "Cheese",
    role: "Manager"
  }
];

function createElement(tag, className) {
  const element = document.createElement(tag);
  if (className) element.className = className;
  return element;
}

export function buildCreditsPage() {
  const page = createElement("div", "credits-page");
  const section = createElement("section", "credits-section");

  const header = createElement("div", "credits-header reveal");

  const label = createElement("div", "credits-label");
  label.textContent = "- Credits -";

  const title = createElement("h1", "credits-title");
  title.textContent = "The Owners";

  const subtitle = createElement("p", "credits-sub");
  subtitle.textContent = "The monkeys behind HenjVR. Built by fans, for fans.";

  header.appendChild(label);
  header.appendChild(title);
  header.appendChild(subtitle);
  section.appendChild(header);

  const grid = createElement("div", "credits-grid");

  OWNERS.forEach((owner, index) => {
    const card = createElement("article", "owner-card reveal");
    card.style.transitionDelay = index * 150 + "ms";

    if (index === 1) {
      const birthday = createElement("div", "bday-badge");
      const birthdayText = createElement("span");
      birthdayText.textContent = "Happy B-Day";
      birthday.appendChild(birthdayText);
      card.appendChild(birthday);
    }

    const imageWrap = createElement("div", "owner-img-wrap");
    const image = createElement("img");
    image.className = "pixelated";
    image.src = owner.img;
    image.alt = owner.name + " - HenjVR";
    imageWrap.appendChild(image);
    card.appendChild(imageWrap);

    const name = createElement("h3", "owner-name");
    name.textContent = owner.name;
    card.appendChild(name);

    const role = createElement("p", "owner-role");
    role.textContent = owner.role;
    card.appendChild(role);

    const youtube = createElement("a", "yt-btn");
    youtube.href = owner.channel;
    youtube.target = "_blank";
    youtube.rel = "noopener noreferrer";

    youtube.appendChild(createElement("span", "wave"));

    const icon = createElement("span");
    icon.innerHTML = `
      <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
        <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
      </svg>
    `;
    youtube.appendChild(icon);

    const youtubeText = createElement("span");
    youtubeText.textContent = "YouTube";
    youtube.appendChild(youtubeText);

    card.appendChild(youtube);
    grid.appendChild(card);
  });

  section.appendChild(grid);

  const backWrapper = createElement("div", "back-home-wrap reveal");
  backWrapper.style.transitionDelay = "300ms";

  const backButton = createElement("a", "back-home");
  backButton.href = "#top";
  backButton.textContent = "← Back Home";
  backButton.addEventListener("click", (event) => {
    event.preventDefault();
    window.navigateTo("home");
    window.scrollTo({ top: 0, behavior: "smooth" });
  });

  backWrapper.appendChild(backButton);
  section.appendChild(backWrapper);
  page.appendChild(section);

  return page;
}

export function setupReveals(container) {
  const elements = container.querySelectorAll(".reveal");
  if (!elements.length) return;

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("shown");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.15 }
  );

  elements.forEach((element) => observer.observe(element));
}
