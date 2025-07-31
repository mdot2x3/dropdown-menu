// import css file for css-loader & style-loader
import "./style.css";

function displayMenu() {
  const buttons = document.querySelectorAll(".fa-solid");
  const menu = document.querySelector(".menu");

  buttons.forEach((button) => {
    button.addEventListener("click", () => {
      // unhide menu first so it can be measured
      menu.classList.remove("hidden");
      // use to get the clicked button's position on the screen
      const rect = button.getBoundingClientRect();
      menu.style.top = `${rect.bottom + window.scrollY}px`;
      menu.style.left = `${rect.right + window.scrollX - menu.offsetWidth}px`;
    });
  });
}

displayMenu();
