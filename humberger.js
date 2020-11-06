// 　ハンバーガーメニューの操作
$(function(){
  // 初期状態でハンバーガーメニューを非表示
  $("#humberger-menu").hide();
  // ハンバーガーメニューをクリックしたときの処理
  $("#humberger").click(function(){
    $("#humberger-menu").slideDown(300);
    $("html").addClass("scroll-lock");
  });
  // ハンバーガーメニュー内の閉じるボタンをクリックしたときの処理
  $("#close-button").click(function(){
    $("#humberger-menu").slideUp(300);
    $("html").removeClass("scroll-lock");
  });
  $(".humberger-menu__link>a").click(function(){
    $("#humberger-menu").slideUp(300);
    $("html").removeClass("scroll-lock");
  });
});
