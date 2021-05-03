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

function clickLeftNavi(url) {
  videoUrl = url;
  videoDisplay = false;
  videoSound = false;
  displayIFrame();
}
