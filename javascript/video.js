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
    resizeContentIframe(-$(".videoIframe").height());
    videoDisplay = true;
    videoSound = true;
  }
}

function closeIFrame() {
  if(videoDisplay) {
    $(".videoIframe").css("display", "none");
    resizeContentIframe($(".videoIframe").height());
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
 $(".main").height(window.innerHeight-$(".main").offset().top-$(".footer").height()-28);
 $(".content_iframe").height($(".main").height()-25);
 if($(".content_iframe").height()<200) {
   $(".main").height($(".videoIframe").height() + 200);
   $(".content_iframe").height(200);
 }
  $(".aside-1 a:first-child").click();
});

$(window).resize(function() {
  $(".main").height(window.innerHeight-$(".main").offset().top-$(".footer").height());
  $(".content_iframe").height($(".main").height()-25);
  if($(".content_iframe").height()<200) {
    $(".main").height($(".videoIframe").height() + 200);
    $(".content_iframe").height(200);
  }
  if (videoDisplay) {
    resizeContentIframe(-$(".videoIframe").height());
    resizeVideoIframe()
  }
});

function resizeVideoIframe(){

  if(window.innerWidth<640) {
    $(".videoIframe").css("width", window.innerWidth);
    $(".videoIframe").css("height", window.innerWidth*3/4);
  } else {
    $(".videoIframe").css("width", "640");
    $(".videoIframe").css("height", "360");
  }
}

function resizeContentIframe(px){
  $(".content_iframe").height($(".content_iframe").height()+px);
  if($(".content_iframe").height()<200) {
    $(".main").height($(".videoIframe").height() + 200);
    $(".content_iframe").height(200);
  }
}
