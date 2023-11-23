    var player;
    function onYouTubeIframeAPIReady() {
    player = new YT.Player('myVideo', {
    height: '500',
    width: '760',
    videoId: 'uHt01D6rOLI',
    events: {
      'onReady': onPlayerReady
    }
  });
}

function onPlayerReady(event) {
  event.target.pauseVideo();
}

function playVideo() {
  var video = document.getElementById("myVideo");
  if(video.style.display !== "block"){
    video.style.display = "block";
    player.playVideo();
  }
  else{
    video.style.display = "none";
    player.pauseVideo();
  }

}