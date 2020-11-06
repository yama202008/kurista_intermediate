// ページ読み込み時に実行したい処理
// contactページからのジャンプ
$(window).on('load', function(){
  var query = location.search;
  if(query) {
    var value = decodeURIComponent(query).split('=');
    // 到着地点を取得
    var target = $(value[1]);

    // 移動先を0px調整する。0を30にすると30px下にずらすことができる。
    const offset = -30;
    // 到着地点を数値で取得
    var position = target.offset().top + offset;
    // スムーズスクロール
    $('body,html').animate({scrollTop:position}, 400, 'swing');
    return false;
  }
});

// ページ内スクロール
$(function(){
   // #で始まる出発地点をクリックした場合に処理を実行
  $('a[href^="#"]').click(function() {
    // 移動先を0px調整する。0を30にすると30px下にずらすことができる。
    const offset = -30;
    // 出発地点の値を取得
    var href= $(this).attr("href");
    // 到着地点を取得
    var target = $(href == "#" || href == "" ? 'html' : href);
    // 到着地点を数値で取得
    var position = target.offset().top + offset;
    // スムーススクロール
    $('body,html').animate({scrollTop:position}, 400, 'swing');
    return false;
  });
});

// スクロール量で背景色付与
$(window).scroll(function(){
  var scrollJumbotron = $('.jumbotron').offset().top + $('.jumbotron').height(); // ターゲットの位置取得
  if($(window).scrollTop() > scrollJumbotron){ //jumbotronが画面外になったら
    $('.header').css('position', 'fixed'); // 背景固定
    $('.header').css('background-color', '#282F35'); // 背景色付与
  }else{
    $('.header').css('position', 'absolute'); // 背景上部に
    $('.header').css('background-color', ''); // 背景色無効
  }
})