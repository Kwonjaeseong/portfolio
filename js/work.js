$(document).ready(function () {
  // 필터링 기능
  var btns = $(".w_list li a");
  var items = $(".list li");
  var btnMore = $(".btn-more");

  // 초기 더보기 설정: All 카테고리에서만 적용
  setupLoadMore("all");

  // 필터링 클릭 이벤트 처리
  btns.on("click", function (e) {
    e.preventDefault();

    btns.removeClass("active");
    $(this).addClass("active");

    var category = $(this).parent().data("id");
    setupLoadMore(category);
  });

  function setupLoadMore(category) {
    var filteredItems;

    if (category === "all") {
      filteredItems = items;
    } else {
      filteredItems = items.filter("[data-item='" + category + "']");
    }

    // 아이템 초기화: 모든 항목 숨기고, 필터된 항목의 첫 6개만 보여줌
    items.hide();
    filteredItems.slice(0, 6).show();

    // 더보기 버튼 초기화
    btnMore.hide();

    // 필터링된 항목이 6개 이상일 경우에만 더보기 버튼 표시
    if (filteredItems.length > 6) {
      btnMore.show();
    }

    // 더보기 버튼 클릭 시 3개씩 추가 표시
    btnMore.off("click").on("click", function () {
      var visibleItems = filteredItems.filter(":visible").length;
      filteredItems.slice(visibleItems, visibleItems + 3).fadeIn();

      // 모든 항목이 표시되면 더보기 버튼 숨기기
      if (filteredItems.filter(":visible").length === filteredItems.length) {
        btnMore.hide();
      }
    });
  }

  // 모달 팝업 기능 (기존 코드 그대로 유지)
  var modals = document.getElementsByClassName("modal");
  var modalBtns = document.getElementsByClassName("btn");
  var closeBtns = document.getElementsByClassName("close");
  var funcs = [];

  function Modal(num) {
    return function () {
      modalBtns[num].onclick = function (e) {
        e.preventDefault();
        modals[num].style.display = "block";
      };

      closeBtns[num].onclick = function () {
        modals[num].style.display = "none";
      };
    };
  }

  for (var i = 0; i < modalBtns.length; i++) {
    funcs[i] = Modal(i);
  }

  for (var j = 0; j < funcs.length; j++) {
    funcs[j]();
  }

  window.onclick = function (event) {
    if (event.target.className === "modal") {
      event.target.style.display = "none";
    }
  };
});
