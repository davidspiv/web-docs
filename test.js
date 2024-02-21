(function () {
  "use strict";

  function SlideOutMenu(id) {
    this.el = document.querySelector(id);
    this.curtain = document.getElementsByClassName("header-nav__curtain")[0];
    this.closeButton = document.getElementsByClassName("header-nav__close")[0];
    this.openButton = document.getElementsByClassName("header-nav__open")[0];
    this.main = document.querySelector("main");

    // Find all focusable children
    const focusableElementsString =
      'a[href], area[href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), button:not([disabled]), iframe, object, embed, [tabindex="0"], [contenteditable]';
    let focusableElements = this.el.querySelectorAll(focusableElementsString);
    focusableElements = Array.prototype.slice.call(focusableElements);
    this.firstTabStop = focusableElements[0];
    this.lastTabStop = focusableElements[focusableElements.length - 1];

    // Add event listeners
    this.closeButton.addEventListener("click", this.menuClose.bind(this));
    this.curtain.addEventListener("click", this.menuClose.bind(this));
    this.openButton.addEventListener("click", this.menuOpen.bind(this));
    this.el.addEventListener("transitionend", this.setFocus.bind(this));
    this.el.addEventListener("keydown", this.keydownEvent.bind(this));
  }

  SlideOutMenu.prototype.menuOpen = function (e) {
    e.preventDefault();
    this.el.classList.add("nav-opening");
    this.el.classList.add("nav-opened");
    this.openButton.setAttribute("aria-hidden", "true");
    this.openButton.setAttribute("aria-expanded", "true");
    this.main.setAttribute("aria-hidden", "true");
  };

  SlideOutMenu.prototype.menuClose = function (e) {
    e.preventDefault();
    this.el.classList.remove("nav-opened");
    this.main.removeAttribute("aria-hidden");
    this.openButton.removeAttribute("aria-hidden");
  };

  SlideOutMenu.prototype.setFocus = function (e) {
    if (e.target == this.el && e.propertyName == "opacity") {
      const compStyles = window.getComputedStyle(this.el);
      if (compStyles.opacity == 1) {
        this.firstTabStop.focus();
      } else {
        this.openButton.focus();
        this.el.classList.remove("nav-opening");
      }
    }
  };

  SlideOutMenu.prototype.keydownEvent = function (e) {
    // Escape key should close the menu
    if (e.key === "Escape") {
      this.menuClose(e);
    }

    // Tab key check for first or last tab stop
    if (e.key === "Tab") {
      // Tab + Shift (reverse tabbing)
      if (e.shiftKey) {
        // If the current item is the first tab stop, or it shares a name with it (for example a set of radio buttons)
        if (
          document.activeElement === this.firstTabStop ||
          (document.activeElement.name !== "" &&
            document.activeElement.name === this.firstTabStop.name)
        ) {
          e.preventDefault();
          this.lastTabStop.focus();
        }
      } else if (document.activeElement === this.lastTabStop) {
        e.preventDefault();
        this.firstTabStop.focus();
      }
    }
  };

  const menu = new SlideOutMenu("#menu");
})();
