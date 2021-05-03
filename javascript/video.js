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
  $(".content_iframe").height($(".content_iframe").height()-$(".videoIframe").height());
}

function closeIFrame() {
  $(".content_iframe").height($(".content_iframe").height()+$(".videoIframe").height());
  $(".videoIframe").css("display", "none");
  $(".change_display_button").text("表示");
  videoDisplay = false;
}

function clickLeftNavi(video_url,content_uri) {
  videoUrl = video_url;
  videoDisplay = false;
  videoSound = false;
  $(".videoIframe").attr("src", videoUrl);
  closeIFrame();

  

  var elm = document.getElementById("parentframe");
  elm.src="contents/" + content_uri;
  elm.style.height = elm.contentDocument.body.scrollHeight + "px";

  console.log("elm.style.height=" + elm.style.height);

}

$(function () {
  $(".middle").height(window.innerHeight-$(".middle").offset().top-$(".footer").height()-20);
  $(".content_iframe").height($(".middle").height()-25);
  $(".left-navi a:first-child").click();
});

$(window).resize(function() {
  $(".middle").height(window.innerHeight-$(".middle").offset().top-$(".footer").height());
  $(".content_iframe").height($(".middle").height()-25);
  if (videoDisplay) {
    $(".content_iframe").height($(".content_iframe").height()-$(".videoIframe").height());
  }
});