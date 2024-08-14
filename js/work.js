$(document).ready(function () {
  // 필터링 기능
  var btns = $(".w_list li a");
  var items = $(".list li");

  btns.on("click", function (e) {
    e.preventDefault();

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

  // 모달 팝업 기능
  var modals = document.getElementsByClassName("modal");
  var modalBtns = document.getElementsByClassName("btn");
  var closeBtns = document.getElementsByClassName("close");
  var funcs = [];

  // Modal을 띄우고 닫는 클릭 이벤트를 정의한 함수
  function Modal(num) {
    return function () {
      // 모달 열기
      modalBtns[num].onclick = function (e) {
        e.preventDefault();
        modals[num].style.display = "block";
      };

      // 모달 닫기
      closeBtns[num].onclick = function () {
        modals[num].style.display = "none";
      };
    };
  }

  // 원하는 Modal 수만큼 Modal 함수를 호출해서 funcs 배열에 함수 정의
  for (var i = 0; i < modalBtns.length; i++) {
    funcs[i] = Modal(i);
  }

  // funcs 배열에 정의된 함수 실행
  for (var j = 0; j < funcs.length; j++) {
    funcs[j]();
  }

  // 모달 바깥 클릭 시 닫기 기능
  window.onclick = function (event) {
    if (event.target.className === "modal") {
      event.target.style.display = "none";
    }
  };
});
