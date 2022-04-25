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

//소개 페이지 메뉴바 설정
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

//예약 시스템 메뉴 바 설정
$(function () {
  $(".btn-menu").on("click", function () {
    $(".menu-slide-wrap").toggle();
  });
});

//예약 달력 페이지

//피자 예약하기 클릭시 달력 페이지 나타나기

$(function () {
  $(".main-box")
    .eq(0)
    .on("click", function () {
      $(".reserv-page").show();
      $(".main-contents").hide();
      $("footer").hide();
    });
});

//피자 달력에서 <를 누르면 사라지기

$(function () {
  $(".calender-close-btn").on("click", function () {
    $(".reserv-page").hide();
    $(".main-contents").show();
    $("footer").show();
  });
});

//예약 상세 페이지

$(function () {
  $(".food-img-wrap").slick({
    dots: true,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 2000,
    slidesToShow: 1,
    adaptiveHeight: true,
    arrows: false,
  });
});

// 피자 수량 선택 페이지

//주문하러가기 클릭시 주문창 슬라이드업
$(function () {
  $(".order-btn").on("click", function () {
    $(".select-quantity-page").show();
    $(".footer").fadeOut();
    $(".select-quantity-page").animate({ top: 80 }, 300, "linear");
  });

  $(".quant-close-btn").on("click", function () {
    $(".select-quantity-page").hide();
    $(".footer").show();
    $(".select-quantity-page").animate({ top: 990 }, 500);
  });
});

// 수량 증가, 감소
$(function () {
  $(".minus-amount").on("click", function (e) {
    e.preventDefault();
    var stat = $(".amount").val();
    var num = parseInt(stat, 10);
    num--;

    if (num <= -1) {
      alert("최소 수량은 0입니다.");
      num = 0;
    }

    $(".amount").val(num);
  });

  $(".plus-amount").on("click", function (e) {
    e.preventDefault();
    var stat = $(".amount").val();
    var num = parseInt(stat, 10);
    num++;

    $(".amount").val(num);
  });
});
