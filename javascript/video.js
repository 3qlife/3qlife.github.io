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
  $(".videoIframe").css("visibility", "visible");
  if (!videoSound) {
    $(".videoIframe").attr("src", videoUrl);
  }
  $(".change_display_button").text("動画非表示");
  videoDisplay = true;
  videoSound = true;
}

function closeIFrame() {
  $(".videoIframe").css("visibility", "hidden");
  $(".change_display_button").text("動画表示");
  videoDisplay = false;
}

function clickLeftNavi(url) {
  videoUrl = url;
  videoDisplay = false;
  videoSound = false;
  displayIFrame();
}
