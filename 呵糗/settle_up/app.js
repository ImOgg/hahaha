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

    // 支出 開啟 關閉的部分
    $("#creat_newpay").click(function(){
      $('#new_pay_container').addClass('active');
    });

    $("#newpay_close").click(function(){
      $('#new_pay_container').removeClass('active');
    });
    $("#newpay_save").click(function(){
      $('#new_pay_container').removeClass('active');
    });

     // 負債 開啟 關閉的部分
     $("#clearpay_btn").click(function(){
      $('#clear_pay_88').addClass('active');
    });

    $("#clear_cancel").click(function(){
      $('#clear_pay_88').removeClass('active');
    });
    $("#clear_save").click(function(){
      $('#clear_pay_88').removeClass('active');
    });
   // 新增成員 開啟 關閉的部分
   $("#plus_member").click(function(){
    $('#group_member_plus').addClass('active');
  });

  $("#group_close").click(function(){
    $('#group_member_plus').removeClass('active');
  });

  $("#group_member_save").click(function(){
    $('#group_member_plus').removeClass('active');
  });

     // 編輯群組 開啟 關閉的部分
     $("#update_group_btn").click(function(){
      $('#update_group').addClass('active');
    });
  
    $("#update_group_close").click(function(){
      $('#update_group').removeClass('active');
    });
  
    $("#update_group_save").click(function(){
      $('#update_group').removeClass('active');
    });
  
  