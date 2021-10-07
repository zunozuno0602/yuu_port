// 任意のタブにURLからリンクするための設定
function GethashID(hashIDName){
  if(hashIDName){
    // タブ設定
    // タブ内のaタグ全てを取得
    $('.tab li').find('a').each(function(){  
      var idName = $(this).attr('href');
      if(idName == hashIDName){
        var parentElm = $(this).parent()
        $('.tab li').removeClass("active");
        $(parentElm).addClass("active")
        // 表示させるエリア設定
        $(".area").removeClass("is-active");
        $(hashIDName).addClass("is-active");
      }
    });
  }
}


// タブをクリックしたら
$('.tab a').on('click', function(){
  var idName = $(this).attr('href');
  GethashID(idName);
  return false;
});


// 上記の動きをページが読み込まれたらすぐに動かす
$(window).on('load', function(){
  $('.tab li:first-of-type').addClass("active");
  $('.area:first-of-type').addClass("is-active");
  var hashName = location.hash;
  GethashID(hashName);
});