$('.btn-menu').click(function () {
  $('.mobilemenu').toggleClass('active');
  $(this).toggleClass('active');
})
var mySwiper_first = new Swiper(".mySwiper_first", {
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
});

var swiper = new Swiper(".mySwiper", {
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
 
    601: {
      slidesPerView: 2,
      spaceBetween: 30,
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 80,
    },
    962: {
      slidesPerView: 3,
      spaceBetween: 30,
    },
    1280: {
      slidesPerView: 3,
      spaceBetween: 60,
    },
    
    1440: {
      slidesPerView: 3,
      spaceBetween: 120,
    },
  },
});

var swiper = new Swiper(".mySwiper2", {
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  breakpoints: {
    375: {
      slidesPerView: 1,
      spaceBetween: 30,
    },
    414: {
      slidesPerView: 2,
      spaceBetween: 60,
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
      spaceBetween: 60,
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

// $('.search').click(function () {
//   $("body").click(function () {
//     $('.other_search').toggleClass('active');
//     $('.search').toggleClass('active');
//   });

// })

// 點擊畫面DIV以外的任何地方就隱藏DIV
// $("body").click(function(){
//   $("#content").hide();
// });
 
// // 點擊DIV時、不向上層冒泡。
// $("#content").click(function(e){
//   e.stopPropagation();
// });
 
// // 點擊按鈕時顯示或隱藏DIV
// $("#btn").click(function(e){
//   e.stopPropagation();
//   $("#content").toggle();
// });