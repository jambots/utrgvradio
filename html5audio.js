
var isPlaying = false;
var readyStateInterval = null;
var audioReadyState=0;

var html5audio = {
  play: function(){
    isPlaying = true;
    myaudio.play();
    readyStateInterval = setInterval(function(){
      if(myaudio.readyState != audioReadyState){
        audioReadyState =myaudio.readyState;
        dbuga("audioReadyState ="+myaudio.readyState);
      }    
      if (myaudio.readyState <= 2) {
         //document.getElementById('page_listen_content_djDiv').innerHTML="Connecting...";
         //retrying=true;
         //buttonOn("listen", "playpause");
         //textPosition.innerHTML = 'loading...';
       }
    },1000);
    myaudio.addEventListener("error", function() {
       dbuga('myaudio ERROR');
       if(uiPlaying){connectStream();}
    }, false);


    myaudio.addEventListener("playing", function() {
       dbuga('playing fired');
       isPlaying = true;
       buttonOn("listen", "playpause");
       retrying=false;
       updateNowPlaying();
       if(singing){
         singMedia.stop();
         singing=false;
       }
    }, false);

    myaudio.addEventListener("ended", function() {
       dbuga('myaudio ENDED');
       //isPlaying=false;
    }, false);
    myaudio.addEventListener("stalled", function() {
       dbuga('myaudio stalled so isPlaying=false');
       //isPlaying=false;
    }, false);
    myaudio.addEventListener("waiting", function() {// doesn't fire on android for a minute :(
       dbuga('myaudio WAITING');
    }, false);

  },
  pause: function() {
    isPlaying = false;
    clearInterval(readyStateInterval);
    myaudio.pause();
    buttonOff("listen", "playpause");
    updateNowPlaying();
  },
  stop: function() {
    isPlaying = false;
    clearInterval(readyStateInterval);
    myaudio.pause();
         buttonOff("listen", "playpause");
         updateNowPlaying();
    myaudio = null;
    myaudio = new Audio(myaudioURL);
    //textPosition.innerHTML = '';
  }

};
