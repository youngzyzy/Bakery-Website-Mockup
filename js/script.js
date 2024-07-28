document.addEventListener("DOMContentLoaded", function () {
  const toggleButton = document.querySelector(
    ".navbar-bottom__mobile-menu-toggle"
  );
  const mobileMenu = document.querySelector(
    ".navbar-bottom__mobile-menu-items"
  );
  const toggleButtonClose = document.querySelector(
    ".navbar-bottom__mobile-menu-close"
  );
  toggleButton.addEventListener("click", function () {
    mobileMenu.classList.toggle("active");
  });
  toggleButtonClose.addEventListener("click", function () {
    mobileMenu.classList.toggle("active");
  });
});
