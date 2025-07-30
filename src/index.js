// import css file for css-loader & style-loader
import "./style.css";

function displayMenu() {
  const buttons = document.querySelectorAll(".fa-solid");
  const menu = document.querySelector(".menu");

  buttons.forEach((button) => {
    button.addEventListener("click", () => {
      menu.classList.remove("hidden");
    });
  });
}

displayMenu();
