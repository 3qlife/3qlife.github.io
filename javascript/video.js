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
  if(!videoDisplay) {
    resizeVideoIframe()
    $(".videoIframe").css("display", "inline");
    if (!videoSound) {
      $(".videoIframe").attr("src", videoUrl);
    }
    videoDisplay = true;
    videoSound = true;
  }
}

function closeIFrame() {
  if(videoDisplay) {
    $(".videoIframe").css("display", "none");
    videoDisplay = false;
  }
}

function clickLeftNavi(videoId,contentId) {
  videoUrl = 'https://www.youtube.com/embed/' + videoId + '?autoplay=1&playsinline=1';
  $(".videoIframe").attr("src", "");
  closeIFrame();
  $.ajaxSetup({cache:false}); 
  $(".contentDiv").load("contents/" + contentId + ".html"); 
  videoDisplay = false;
  videoSound = false;
}

function resizeVideoIframe(){
  if(window.innerWidth<640) {
    $(".videoIframe").css("width", window.innerWidth);
    $(".videoIframe").css("height", window.innerWidth*3/4);
  } else {
    $(".videoIframe").css("width", "640");
    $(".videoIframe").css("height", "360");
  }
}

$(function () {
  $(".aside-1 a:first-child").click();
});

$(window).resize(function() {
  if (videoDisplay) {
    resizeVideoIframe()
  }
});

