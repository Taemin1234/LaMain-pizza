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
    $(".menu-slide-wrap").slideToggle();
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

  $(".call-calendar").on("click", function () {
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

//스크롤을 내리면 주문하기가 나옴

$(window).on("scroll", function () {
  if ($(window).scrollTop() >= 643) {
    $(".order-btn-float").show();
  } else {
    $(".order-btn-float").hide();
  }
});

// 피자 수량 선택 페이지

//주문하러가기 클릭시 주문창 슬라이드업
$(function () {
  $(".order-btn, .order-btn-float").on("click", function () {
    $(".select-quantity-page").css({ bottom: 0 });
  });

  $(".quant-close-btn").on("click", function () {
    $(".select-quantity-page").css({ bottom: "-100%" });
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
