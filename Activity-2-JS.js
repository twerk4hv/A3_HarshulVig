
//Check if audio is already playing
var bgmusic = document.getElementById("bgmusic");
if (bgmusic.paused) {
    bgmusic.play();
}
var audio = document.getElementById("my-audio");
function toggleMute() {
    if(audio.muted) {
        audio.muted = false;
        document.getElementById("mute-btn").innerHTML = "Mute";
    } else {
        audio.muted = true;
        document.getElementById("mute-btn").innerHTML = "Unmute";
    }
}
