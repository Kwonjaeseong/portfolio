// isotope 필터

$(document).ready(function () {
  // Isotope 초기화
  var $grid = $(".grid").isotope({
    itemSelector: ".element-item",
    layoutMode: "fitRows",
  });

  // 필터 버튼 클릭 이벤트 처리
  $(".w_list").on("click", "li", function () {
    var filterValue = $(this).attr("data-filter");
    $grid.isotope({ filter: filterValue });

    // 버튼 활성화 상태 업데이트
    $(".w_list li").removeClass("is-checked");
    $(this).addClass("is-checked");
  });

  // 모달 팝업 기능
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

  // 모달 버튼 이벤트 설정
  for (var i = 0; i < modalBtns.length; i++) {
    funcs[i] = Modal(i);
  }

  for (var j = 0; j < funcs.length; j++) {
    funcs[j]();
  }

  // 모달 외부 클릭 시 닫기
  window.onclick = function (event) {
    if (event.target.className === "modal") {
      event.target.style.display = "none";
    }
  };
});
