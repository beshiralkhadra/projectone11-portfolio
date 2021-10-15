let toggle = document.getElementById("toggleBtns");

let navMenu = document.getElementById("navSide");

let burgers = document.getElementById("burgerToggle");

toggle.addEventListener("click", toggleMenu);

function toggleMenu() {
  if (navMenu.style.visibility === "hidden") {
    navMenu.style.cssText = "visibility:visible;width:10em;  ";
  } else {
    navMenu.style.visibility = "hidden";
  }
}
