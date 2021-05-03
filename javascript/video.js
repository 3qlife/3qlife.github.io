var videoDisplay = false;
var videoSound = false;
var videoUrl;

function changeDisplay() {
  if (videoDisplay) {
    closeIFrame();
  } else {
    displayIFrame();
  }
}

function displayIFrame() {
  $(".videoIframe").css("width", "640");
  $(".videoIframe").css("height", "360");
  $(".videoIframe").css("display", "inline");
  if (!videoSound) {
    $(".videoIframe").attr("src", videoUrl);
  }
  $(".change_display_button").text("非表示");
  videoDisplay = true;
  videoSound = true;
}

function closeIFrame() {
  $(".videoIframe").css("display", "none");
  $(".change_display_button").text("表示");
  videoDisplay = false;
}

function clickLeftNavi(video_url,content_uri) {
  videoUrl = video_url;
  videoDisplay = false;
  videoSound = false;
  displayIFrame();

  

  var elm = document.getElementById("parentframe");
  elm.src="contents/" + content_uri;
  elm.style.height = elm.contentDocument.body.scrollHeight + "px";

  console.log("elm.style.height=" + elm.style.height);

}

/*
// 子画面の要素を取得
var elm = document.getElementById("parentframe");
 
// 子画面のコンテンツサイズに合わせてサイズを変更する関数
function changeParentHeight(){
  elm.style.height = elm.contentWindow.document.body.scrollHeight + "px";
}
 
// 親画面 iframe の高さを変更するイベント
// 1. 子画面の読み込み完了時点で処理を行う
elm.contentWindow.onload = function(){ changeParentHeight(); };
 
// 2. 子画面のウィンドウサイズ変更が完了した時点で処理を行う
var timer = 0;
elm.contentWindow.onresize = function () {
  if (timer > 0) {
    clearTimeout(timer);
  }
  timer = setTimeout(function () {
    changeParentHeight();
  }, 100);
};
*/