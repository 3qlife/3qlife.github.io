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

    if(window.innerWidth<640) {
      $(".videoIframe").css("width", window.innerWidth);
      $(".videoIframe").css("height", window.innerWidth*3/4);
    } else {
      $(".videoIframe").css("width", "640");
      $(".videoIframe").css("height", "360");
    }

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

function clickLeftNavi(videoId,contentId) {
  
  videoUrl = 'https://www.youtube.com/embed/' + videoId + '?autoplay=1&playsinline=1';
  $(".videoIframe").attr("src", "");
  closeIFrame();
  $(".content_iframe").attr("src", "contents/" + contentId + ".html");
  videoDisplay = false;
  videoSound = false;
}

$(function () {
  if(window.innerWidth<640) {
    $(".middle").height(window.innerHeight-$(".middle").offset().top-$(".footer").height());
  } else {
    $(".middle").height(window.innerHeight-$(".middle").offset().top-$(".footer").height()-20);
  }
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
    if(window.innerWidth<640) {
      $(".videoIframe").css("width", window.innerWidth);
      $(".videoIframe").css("height", window.innerWidth*3/4);
    } else {
      $(".videoIframe").css("width", "640");
      $(".videoIframe").css("height", "360");
    }
  }
  if($(".content_iframe").height()<200) {
    $(".middle").height($(".videoIframe").height() + 200);
    $(".content_iframe").height(200);
  }
});
