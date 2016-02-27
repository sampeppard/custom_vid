var video = document.getElementById("video");
var currentPos = video.currentTime;

video.addEventListener('timeupdate', function() {
	if (video.currentTime > 0 && video.currentTime < 4) {
        $(".caption-block").css("color", "#777");
        $("#caption-block_1").css("color", "tomato");
    } 
    if (video.currentTime > 4 && video.currentTime < 7) {
        $(".caption-block").css("color", "#777");
        $("#caption-block_2").css("color", "tomato");
    }
    if (video.currentTime > 8 && video.currentTime < 11) {
        $(".caption-block").css("color", "#777");
        $("#caption-block_3").css("color", "tomato");
    }
    if (video.currentTime > 11 && video.currentTime < 14) {
        $(".caption-block").css("color", "#777");
        $("#caption-block_4").css("color", "tomato");
    }
    if (video.currentTime > 14 && video.currentTime < 18) {
        $(".caption-block").css("color", "#777");
        $("#caption-block_5").css("color", "tomato");
    }
    if (video.currentTime > 18 && video.currentTime < 22) {
        $(".caption-block").css("color", "#777");
        $("#caption-block_6").css("color", "tomato");
    }
    if (video.currentTime > 22 && video.currentTime < 27) {
        $(".caption-block").css("color", "#777");
        $("#caption-block_7").css("color", "tomato");
    }
    if (video.currentTime > 27 && video.currentTime < 31) {
        $(".caption-block").css("color", "#777");
        $("#caption-block_8").css("color", "tomato");
    }
    if (video.currentTime > 32 && video.currentTime < 35) {
        $(".caption-block").css("color", "#777");
        $("#caption-block_9").css("color", "tomato");
    }
    if (video.currentTime > 35 && video.currentTime < 39) {
        $(".caption-block").css("color", "#777");
        $("#caption-block_10").css("color", "tomato");
    }
    if (video.currentTime > 39 && video.currentTime < 41) {
        $(".caption-block").css("color", "#777");
        $("#caption-block_11").css("color", "tomato");
    }
    if (video.currentTime > 42 && video.currentTime < 46) {
        $(".caption-block").css("color", "#777");
        $("#caption-block_12").css("color", "tomato");
    }
    if (video.currentTime > 46 && video.currentTime < 49) {
        $(".caption-block").css("color", "#777");
        $("#caption-block_13").css("color", "tomato");
    }
    if (video.currentTime > 49 && video.currentTime < 54) {
        $(".caption-block").css("color", "#777");
        $("#caption-block_14").css("color", "tomato");
    }
    if (video.currentTime > 54 && video.currentTime < 58) {
        $(".caption-block").css("color", "#777");
        $("#caption-block_15").css("color", "tomato");
    }
    if (video.currentTime > 58 && video.currentTime < 60) {
        $(".caption-block").css("color", "#777");
        $("#caption-block_16").css("color", "tomato");
    }
});