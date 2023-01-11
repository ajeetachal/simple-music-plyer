function playSong(){
    var audio = document.getElementById("song1");
    audio.play();
}
function pauseSong(){
    var audio = document.getElementById("song1");
    audio.pause();
}
function volumeRange(){
    var audio = document.getElementById("song1");
    audio.volume = document.getElementById("control").value;
}
