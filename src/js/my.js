$(document).ready(function(){
    $('.slider-box').slick({
        dots: true,
        arrows: false,
        autoplay: true,
    });
    $("ul.tabs-caption").on("click", "li:not(.active)", function() {
      $(this)
        .addClass("active")
        .siblings()
        .removeClass("active")
        .closest("div.tabs")
        .find("div.tabs-content")
        .removeClass("active")
        .eq($(this).index())
        .addClass("active");
    });
  });
