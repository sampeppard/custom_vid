
var video = document.getElementById("video");

// Buttons
var playButton = $("#play-pause");
var fullScreenButton = $("#full-screen");
var muteButton = $("#mute");

// Sliders
var volumeBar = document.getElementById("volume-bar");

$(".grabber").hover(function() {
    $(".controls").slideToggle();
    return false;
});



// Event listener for the play/pause button
playButton.click(function() {
  if (video.paused === true) {
    // Play the video
    video.play();

    // Update the button text to 'Pause'
    playButton.attr("src", "icons/pause-icon.png");
  } else {
    // Pause the video
    video.pause();

    // Update the button text to 'Play'
    playButton.attr("src", "icons/play-icon.png");
  }
});

//Time format converter - 00:00
var timeFormat = function(seconds){
  var m = Math.floor(seconds/60)<10 ? "0" + Math.floor(seconds/60) : Math.floor(seconds/60);
  var s = Math.floor(seconds-(m*60))<10 ? "0" + Math.floor(seconds-(m*60)) : Math.floor(seconds-(m*60));
  return m+":"+s;
};

//get HTML5 video time duration
video.addEventListener('loadedmetadata', function() {
    $('.duration').text(timeFormat(video.duration));
});
 
//update HTML5 video current play time
video.addEventListener('timeupdate', function() {
    $('.current').text(timeFormat(video.currentTime));
    var currentPos = video.currentTime;
    var maxDuration = video.duration;
    var percentage = 100 * currentPos / maxDuration;
    $('.timeBar').css('width', percentage+'%');
    
});

var timeDrag = false;   /* Drag status */
$('.progressBar').mousedown(function(e) {
    timeDrag = true;
    updatebar(e.pageX);
});
$(document).mouseup(function(e) {
    if(timeDrag) {
        timeDrag = false;
        updatebar(e.pageX);
    }
});
$(document).mousemove(function(e) {
    if(timeDrag) {
        updatebar(e.pageX);
    }
});
 
//update Progress Bar control
var updatebar = function(x) {
    var progress = $('.progressBar');
    var maxduration = video.duration; //Video duraiton
    var position = x - progress.offset().left; //Click pos
    var percentage = 100 * position / progress.width();
 
    //Check within range
    if(percentage > 100) {
        percentage = 100;
    }
    if(percentage < 0) {
        percentage = 0;
    }
 
    //Update progress bar and video currenttime
    $('.timeBar').css('width', percentage+'%');
    video.currentTime = maxduration * percentage / 100;
};

// Event listener for the mute button
muteButton.click( function() {
  if (video.muted === false) {
    // Mute the video
    video.muted = true;
    muteButton.attr("src", "icons/volume-on-icon.png");
  } else {
    // Unmute the video
    video.muted = false;
    muteButton.attr("src", "icons/volume-off-icon.png");
  }
});

// Event listener for the volume bar
volumeBar.addEventListener("change", function() {
  // Update the video volume
  video.volume = volumeBar.value;
});

// Event listener for the full-screen button
fullScreenButton.click(function() {
  if (video.requestFullscreen) {
    video.requestFullscreen();
  } else if (video.mozRequestFullScreen) {
    video.mozRequestFullScreen(); // Firefox
  } else if (video.webkitRequestFullscreen) {
    video.webkitRequestFullscreen(); // Chrome and Safari
  }
});





