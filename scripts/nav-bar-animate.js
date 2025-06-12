const hamburgerMenu = document.querySelector(".js-hamburger-menu");
const closingMenu = document.querySelector(".js-close-button");
const hamLinks = document.querySelector(".js-ham-links");
const header = document.querySelector(".nav-bar");
const mainContainer = document.querySelector(".js-main-content");
const socialLinks = document.querySelector(".js-social-links-responsive");

hamburgerMenu.addEventListener("click", () => {
  hamburgerMenu.classList.add("hamburger-menu-inactive");
  hamLinks.classList.add("ham-links-active");
  header.classList.remove("blur-off");
  header.classList.add("blur-on");
  socialLinks.classList.remove("blur-off");
  socialLinks.classList.add("blur-on");

  closingMenu.addEventListener("click", () => {
    hamburgerMenu.classList.remove("hamburger-menu-inactive");
    hamLinks.classList.remove("ham-links-active");
    header.classList.remove("blur-on");
    header.classList.add("blur-off");
    socialLinks.classList.remove("blur-on");
    socialLinks.classList.add("blur-off");
  });
});
