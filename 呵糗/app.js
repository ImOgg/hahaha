// $('#login_icon').click(function () {
//   $('#login_downlist').toggleClass('active');
//   $(this).toggleClass('active');
// })

$("body").click(function () {
  $("#login_downlist").removeClass('active');
  $("#login_icon").removeClass('active');
});

// 點擊DIV時、不向上層冒泡。
$("#login_downlist").click(function (e) {
  e.stopPropagation();
});

// // 點擊按鈕時顯示或隱藏DIV
$("#login_icon").click(function (e) {
  e.stopPropagation();
  $('#login_downlist').toggleClass('active');
  $("#login_icon").toggleClass('active');
});


var mySwiper_first = new Swiper(".mySwiper_first", {
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
});


var swiper = new Swiper(".mySwiper2", {
  navigation: {
    nextEl: ".btn-next",
    prevEl: ".btn-prev",
  },

  breakpoints: {
    375: {
      slidesPerView: 1,
      spaceBetween: 30,
    },
    414: {
      slidesPerView: 2,
      spaceBetween: 30,
    },
    768: {
      slidesPerView: 3,
      spaceBetween: 60,
    },

    768: {
      slidesPerView: 3,
      spaceBetween: 80,
    },


    962: {
      slidesPerView: 4,
      spaceBetween: 60,
    },

    1200: {
      slidesPerView: 4,
      spaceBetween: 60,
    },
    1440: {
      slidesPerView: 5,
      spaceBetween: 60,
    },
  },
});
var swiper = new Swiper(".mySwiper_super", {
  navigation: {
    nextEl: ".swiper-button-next_test",
    prevEl: ".swiper-button-prev_test",
  },
  breakpoints: {
    375: {
      slidesPerView: 1,
      spaceBetween: 0,
    },
    414: {
      slidesPerView: 2,
      spaceBetween: 30,
    },

    768: {
      slidesPerView: 3,
      spaceBetween: 60,
    },

    962: {
      slidesPerView: 4,
      spaceBetween: 60,
    },

    1200: {
      slidesPerView: 5,
      spaceBetween: 60,
    },
    1440: {
      slidesPerView: 6,
      spaceBetween: 60,
    },
  },
});

var mySwiper_first = new Swiper(".mySwiper_saygood", {
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
});

function GoForm() { //這裡要對應到自己的 javascript 名稱
  //宣告欄位
  var field1 = $("[name='email']").val();
  var field2 = $("[name='text']").val();
  $.ajax({
      url: "https://docs.google.com/forms/u/0/d/e/1FAIpQLSd0e7cZv5fRDHzV_t9VOATCqZqMIVCqfTlNVLHgVQ8fiMBl6Q/formResponse", //Google Form 裡面的 form action 網址 ＊＊記得要填＊＊
      data: { //Google Form 裡面的欄位 name ＊＊記得要改＊＊
        "entry.694052018":field1,
        "entry.548843217":field2
      },
      type: "POST",
      dataType: "xml",
      statusCode: {
          0: function () {
              alert("已送出!"); //完成送出表單的警告視窗
              window.location.reload();
          },
          200: function () {
              alert("已送出!"); //完成送出表單的警告視窗
              window.location.reload();
          }
      }
  });
}