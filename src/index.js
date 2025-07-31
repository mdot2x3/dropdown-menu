// import css file for css-loader & style-loader
import "./style.css";

function displayMenu() {
  let activeButton = null;

  const buttons = document.querySelectorAll(".fa-solid");
  const menu = document.querySelector(".menu");
  const body = document.body;

  buttons.forEach((button) => {
    button.addEventListener("click", () => {
      // if clicking the same button again, toggle menu visibility
      if (activeButton === button && !menu.classList.contains("hidden")) {
        hideMenu();
        return;
      }
      // otherwise...
      activeButton = button;

      // unhide menu first so it can be measured
      menu.classList.remove("hidden");
      // use to get the clicked button's position on the screen
      const rect = button.getBoundingClientRect();
      // set menu position according to button location
      menu.style.top = `${rect.bottom + window.scrollY}px`;
      menu.style.left = `${rect.right + window.scrollX - menu.offsetWidth}px`;

      // disable pointer events for everything except menu and button
      body.style.pointerEvents = "none";
      menu.style.pointerEvents = "auto";
      button.style.pointerEvents = "auto";
    });
  });

  // hide menu when clicking outside the div or button
  document.addEventListener("mousedown", (event) => {
    if (
      !menu.classList.contains("hidden") &&
      !menu.contains(event.target) &&
      event.target !== activeButton
    ) {
      hideMenu();
    }
  });

  function hideMenu() {
    menu.classList.add("hidden");
    // re-enable pointer events
    body.style.pointerEvents = "";
    if (activeButton) activeButton.style.pointerEvents = "";
    menu.style.pointerEvents = "";
    activeButton = null;
  }
}

displayMenu();
