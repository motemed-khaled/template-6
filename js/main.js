
$(document).ready(function () {
  "use strict";
//  start carousel
  var myCarousel = document.querySelector('#myCarousel')
  var carousel = new bootstrap.Carousel(myCarousel, {
    interval: 5000,
    wrap: false
  })
  //  end carousel
  // start option box
  $(".check").click(function () {
    $(".color-option").fadeToggle();
  })
  //end option box
  //change li color
  $(".color-option ul li").eq(0).css("backgroundColor", "#198754").end()
  $(".color-option ul li").eq(1).css("backgroundColor", "#e426d5").end()
  $(".color-option ul li").eq(2).css("backgroundColor", "#e41b17").end()
  $(".color-option ul li").eq(3).css("backgroundColor", "#009aff").end()
  $(".color-option ul li").eq(4).css("backgroundColor", "#ffd500");
  $(".color-option ul li").click(function () {
    $("link[href*='theme']").attr("href", $(this).attr("data-value"));
  })
  //end change color
// scroll to top
  $(window).scroll(function () {
  $(this).scrollTop() >= 700 ? $("#scroll").fadeIn() : $("#scroll").fadeOut();
  });
  $("#scroll").click(function () {
    $("html ,body").animate({ scrollTop: 0 }, 600);
  });
// end scroll to top
});

//loading page
$(window).on("load", function () {
  $("body").css("overflow","auto");
  $(".load-overlay , .load-overlay .sk-fading-circle").fadeOut(3000, function () {
    $(this).remove();
  });
});
//scroll to top
