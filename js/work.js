// filter

var btns = $(".w_list li a");
var items = $(".list li");

btns.on("click", function (e) {
  e.preventDefault(); // 기본 동작 방지 (필요한 경우)

  btns.removeClass("active");
  $(this).addClass("active");

  var category = $(this).parent().data("id");

  if (category === "all") {
    items.fadeOut(200, function () {
      items.fadeIn(200);
    });
  } else {
    items.fadeOut(200, function () {
      items.filter("[data-item='" + category + "']").fadeIn(200);
    });
  }
});
