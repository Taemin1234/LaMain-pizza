/*!
 * Start Bootstrap - Agency v7.0.11 (https://startbootstrap.com/theme/agency)
 * Copyright 2013-2022 Start Bootstrap
 * Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-agency/blob/master/LICENSE)
 */
//
// Scripts
//

window.addEventListener("DOMContentLoaded", (event) => {
  // Navbar shrink function
  var navbarShrink = function () {
    const navbarCollapsible = document.body.querySelector("#mainNav");
    if (!navbarCollapsible) {
      return;
    }
    if (window.scrollY === 0) {
      navbarCollapsible.classList.remove("navbar-shrink");
      $(".nav-link").css("color", "#fff");
    } else {
      navbarCollapsible.classList.add("navbar-shrink");
      $(".nav-link").css("color", "#000");
    }
  };

  // Shrink the navbar
  navbarShrink();

  // Shrink the navbar when page is scrolled
  document.addEventListener("scroll", navbarShrink);

  // Activate Bootstrap scrollspy on the main nav element
  const mainNav = document.body.querySelector("#mainNav");
  if (mainNav) {
    new bootstrap.ScrollSpy(document.body, {
      target: "#mainNav",
      offset: 74,
    });
  }

  // Collapse responsive navbar when toggler is visible
  const navbarToggler = document.body.querySelector(".navbar-toggler");
  const responsiveNavItems = [].slice.call(
    document.querySelectorAll("#navbarResponsive .nav-link")
  );
  responsiveNavItems.map(function (responsiveNavItem) {
    responsiveNavItem.addEventListener("click", () => {
      if (window.getComputedStyle(navbarToggler).display !== "none") {
        navbarToggler.click();
      }
    });
  });
});

$(function () {
  $(".slide-box").slick({
    dots: true,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 2000,
    slidesToShow: 1,
    adaptiveHeight: true,
  });
});

//메뉴바 설정
$(function () {
  var idx;
  $(".nav-item").mouseover(function () {
    idx = $(this).index();
    $(".nav-link").eq(idx).css("color", "#ffc800");
  });
});

$(function () {
  var idx;
  $(".nav-item").mouseout(function () {
    idx = $(this).index();
    if ($("#mainNav").hasClass("navbar-shrink") == true) {
      $(".nav-link").eq(idx).css("color", "#000000");
    } else {
      $(".nav-link").eq(idx).css("color", "#ffffff");
    }
  });
});
