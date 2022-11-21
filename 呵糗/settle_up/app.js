$(function(){
    var $li = $('ul.tab-title li');
        $($li. eq(0) .addClass('active').find('a').attr('href')).siblings('.tab-inner').hide();
    
        $li.click(function(){
            $($(this).find('a'). attr ('href')).show().siblings ('.tab-inner').hide();
            $(this).addClass('active'). siblings ('.active').removeClass('active');
        });
    });

    $("html").click(function () {
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
    