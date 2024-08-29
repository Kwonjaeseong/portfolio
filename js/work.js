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

  // 모달 콘텐츠 로드 및 이벤트 핸들러 설정
  $(".modal_list").load("/page/graphic.html", function () {
    // 로드 후 모달 버튼 이벤트 재설정
    $("a.btn").on("click", function (e) {
      e.preventDefault(); // 기본 링크 동작 방지

      var modalId = $(this).attr("data-modal-id"); // 버튼의 data-modal-id 속성에서 모달 ID 가져오기
      $("#" + modalId).show(); // 해당 모달 표시
    });

    // 모달 닫기 버튼 클릭 이벤트 설정
    $(".close").on("click", function () {
      $(this).closest(".modal").hide(); // 닫기 버튼이 포함된 모달 숨기기
    });
  });

  // 모달 외부 클릭 시 닫기
  $(window).on("click", function (event) {
    if ($(event.target).hasClass("modal")) {
      $(event.target).hide();
    }
  });
});
