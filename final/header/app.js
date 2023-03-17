$("body").click(function () {
  $('.downlist').removeClass('active');
  $("#login_icon").removeClass('active');
  $('.moba_list_item').removeClass('active');
});

// 點擊DIV時、不向上層冒泡。
$("#login_downlist").click(function (e) {
  e.stopPropagation();
});

// // 點擊按鈕時顯示或隱藏DIV
$("#login_icon").click(function (e) {
  e.stopPropagation();
  $('.downlist').toggleClass('active');
  $(this).toggleClass('active');
});

$("#moba_list").click(function (e) {
  e.stopPropagation();
  $('.moba_list_item').toggleClass('active');
});
window.addEventListener("scroll", function () {
  var header = document.querySelector(".header");
  header.classList.toggle("sticky", window.scrollY > 0);
})