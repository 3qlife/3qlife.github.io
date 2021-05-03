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
    $(".videoIframe").css("width", "640");
    $(".videoIframe").css("height", "360");
    $(".videoIframe").css("display", "inline");
    if (!videoSound) {
      $(".videoIframe").attr("src", videoUrl);
    }
    $(".content_iframe").height($(".content_iframe").height()-$(".videoIframe").height());
    if($(".content_iframe").height()<200) {
      $(".middle").height($(".videoIframe").height() + 200);
      $(".content_iframe").height(200);
    }
    videoDisplay = true;
    videoSound = true;
  }
}

function closeIFrame() {
  if(videoDisplay) {
    $(".videoIframe").css("display", "none");
    $(".content_iframe").height($(".content_iframe").height()+$(".videoIframe").height());
    if($(".content_iframe").height()<200) {
      $(".middle").height($(".videoIframe").height() + 200);
      $(".content_iframe").height(200);
    }
    videoDisplay = false;
  }
}

function clickLeftNavi(video_url,content_uri) {
  videoUrl = video_url;
  $(".videoIframe").attr("src", "");
  closeIFrame();
  $(".content_iframe").attr("src", "contents/" + content_uri);
  videoDisplay = false;
  videoSound = false;
}

$(function () {
  $(".middle").height(window.innerHeight-$(".middle").offset().top-$(".footer").height()-20);
  $(".content_iframe").height($(".middle").height()-25);
  if($(".content_iframe").height()<200) {
    $(".middle").height($(".videoIframe").height() + 200);
    $(".content_iframe").height(200);
  }
  $(".left-navi a:first-child").click();
});

$(window).resize(function() {
  $(".middle").height(window.innerHeight-$(".middle").offset().top-$(".footer").height());
  $(".content_iframe").height($(".middle").height()-25);
  if (videoDisplay) {
    $(".content_iframe").height($(".content_iframe").height()-$(".videoIframe").height());
  }
  if($(".content_iframe").height()<200) {
    $(".middle").height($(".videoIframe").height() + 200);
    $(".content_iframe").height(200);
  }
});
