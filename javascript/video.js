var playVideo = false;
var videoUrl = "https://www.youtube.com/embed/_Xbubk0c9uQ?autoplay=1&playsinline=1";

function changeVideoDisplay() {
  if(playVideo) {
    closeIFrame();
  } else {
    displayIFrame();
  }
}

function displayIFrame() {
    $(".videoIframe").css("width", "640");
    $(".videoIframe").css("height", "360");
    $(".video").css("visibility", "visible");
    $(".videoIframe").attr("src", videoUrl);
    playVideo = true;
  }
  
  function closeIFrame() {
    $(".video").css("visibility", "hidden");
    playVideo = false;
  }
  