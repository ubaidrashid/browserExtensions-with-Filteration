let cardsJson = [
  {
    "logo": "./assets/images/logo-devlens.svg",
    "name": "DevLens",
    "description": "Quickly inspect page layouts and visualize element boundaries.",
    "isActive": true
  },
  {
    "logo": "./assets/images/logo-style-spy.svg",
    "name": "StyleSpy",
    "description": "Instantly analyze and copy CSS from any webpage element.",
    "isActive": true
  },
  {
    "logo": "./assets/images/logo-speed-boost.svg",
    "name": "SpeedBoost",
    "description": "Optimizes browser resource usage to accelerate page loading.",
    "isActive": false
  },
  {
    "logo": "./assets/images/logo-json-wizard.svg",
    "name": "JSONWizard",
    "description": "Formats, validates, and prettifies JSON responses in-browser.",
    "isActive": true
  },
  {
    "logo": "./assets/images/logo-tab-master-pro.svg",
    "name": "TabMaster Pro",
    "description": "Organizes browser tabs into groups and sessions.",
    "isActive": true
  },
  {
    "logo": "./assets/images/logo-viewport-buddy.svg",
    "name": "ViewportBuddy",
    "description": "Simulates various screen resolutions directly within the browser.",
    "isActive": false
  },
  {
    "logo": "./assets/images/logo-markup-notes.svg",
    "name": "Markup Notes",
    "description": "Enables annotation and notes directly onto webpages for collaborative debugging.",
    "isActive": true
  },
  {
    "logo": "./assets/images/logo-grid-guides.svg",
    "name": "GridGuides",
    "description": "Overlay customizable grids and alignment guides on any webpage.",
    "isActive": false
  },
  {
    "logo": "./assets/images/logo-palette-picker.svg",
    "name": "Palette Picker",
    "description": "Instantly extracts color palettes from any webpage.",
    "isActive": true
  },
  {
    "logo": "./assets/images/logo-link-checker.svg",
    "name": "LinkChecker",
    "description": "Scans and highlights broken links on any page.",
    "isActive": true
  },
  {
    "logo": "./assets/images/logo-dom-snapshot.svg",
    "name": "DOM Snapshot",
    "description": "Capture and export DOM structures quickly.",
    "isActive": false
  },
  {
    "logo": "./assets/images/logo-console-plus.svg",
    "name": "ConsolePlus",
    "description": "Enhanced developer console with advanced filtering and logging.",
    "isActive": true
  }
]

let cardsContainer = document.querySelector(".cardsContainer");
let all = document.querySelector(".all");
let active = document.querySelector(".active");
let inactive = document.querySelector(".inactive");

let darkMode = localStorage.getItem("theme") === "dark";

// Function to apply theme on initial load
const applyInitialTheme = () => {
  logoLight.classList.toggle("none", darkMode);
  logoDark.classList.toggle("none", !darkMode);
  themeChangerIcon.src = darkMode ? iconSrcDark : iconSrcLight;

  body.classList.toggle("darkBody", darkMode);
  body.classList.toggle("lightBody", !darkMode);
  Nav.style.backgroundColor = darkMode ? "hsl(225, 23%, 24%)" : "hsl(200, 60%, 99%)";
  themeChanger.style.backgroundColor = darkMode ? "hsl(226, 11%, 37%)" : "hsl(217, 61%, 90%)";

  [all, active, inactive].forEach((btn) => {
    btn.classList.add(darkMode ? "liDark" : "liLight");
  });
};

// Create a single card HTML
const createCard = (card) => `
  <div class="Card ${darkMode ? "darkCard" : "lightCard"}">
      <div class="up">
        <div class="cardImg">
          <img src="${card.logo}" alt="${card.name}">
        </div>
        <div class="cardText">
          <div class="title">${card.name}</div>
          <p class="${darkMode ? "darkPara" : "lightPara"}">${card.description}</p>
        </div>
      </div>
      <div class="down">
        <button class="removeBtn ${darkMode ? "darkRemove" : "lightRemove"}">Remove</button>
        <div class="form-check form-switch">
          <input 
            style="width: 40px;" 
            class="form-check-input" 
            type="checkbox" 
            role="switch" 
            id="${card.name}-switch" 
            ${card.isActive ? "checked" : ""} 
            onchange="toggleActive('${card.name}')">
        </div>
      </div>
  </div>`;

// Toggle card active/inactive state
const toggleActive = (name) => {
  const card = cardsJson.find((c) => c.name === name);
  if (card) {
    card.isActive = !card.isActive;
    console.log(`${name} toggled to ${card.isActive ? "Active" : "Inactive"}`);
  }
};

// Reset active classes of filter buttons
const resetClasses = () => {
  [all, active, inactive].forEach((btn) => {
    btn.classList.remove("liDarkActive", "liLightActive");
  });
};

// Filter & display cards based on active/inactive status
const filterAndRender = (filterType) => {
  resetClasses();
  let filteredCards = [];

  if (filterType === "all") filteredCards = cardsJson;
  else if (filterType === "active") filteredCards = cardsJson.filter((c) => c.isActive);
  else filteredCards = cardsJson.filter((c) => !c.isActive);

  const filterClass = darkMode ? "liDarkActive" : "liLightActive";
  document.querySelector(`.${filterType}`).classList.add(filterClass);
  renderFilteredCards(filteredCards);
};

const renderFilteredCards = (cards) => {
  cardsContainer.innerHTML = cards.map((card) => createCard(card)).join("");
};

// Theme toggling functionality
const logoLight = document.querySelector(".logoLight");
const logoDark = document.querySelector(".logoDark");
const Nav = document.querySelector(".Nav");
const body = document.querySelector("body");
const themeChanger = document.querySelector(".themeChanger");
const themeChangerIcon = document.querySelector(".themeChanger img");

const iconSrcDark = "assets/images/icon-sun.svg";
const iconSrcLight = "assets/images/icon-moon.svg";

themeChanger.addEventListener("click", () => {
  darkMode = !darkMode;
  localStorage.setItem("theme", darkMode ? "dark" : "light");

  logoLight.classList.toggle("none", darkMode);
  logoDark.classList.toggle("none", !darkMode);
  themeChangerIcon.src = darkMode ? iconSrcDark : iconSrcLight;

  body.classList.toggle("darkBody", darkMode);
  body.classList.toggle("lightBody", !darkMode);
  Nav.style.backgroundColor = darkMode ? "hsl(225, 23%, 24%)" : "hsl(200, 60%, 99%)";
  themeChanger.style.backgroundColor = darkMode ? "hsl(226, 11%, 37%)" : "hsl(217, 61%, 90%)";

  [all, active, inactive].forEach((btn) => {
    btn.classList.remove("liDark", "liLight"); // pehle dono remove karo
    btn.classList.add(darkMode ? "liDark" : "liLight"); // phir correct wali add karo
  });
  

  filterAndRender("all");
});

// Apply theme and show all cards on first load
applyInitialTheme();
filterAndRender("all");

// Filter button listeners
all.addEventListener("click", () => filterAndRender("all"));
active.addEventListener("click", () => filterAndRender("active"));
inactive.addEventListener("click", () => filterAndRender("inactive"));