const songs = [{
    name: "Ankhein Khuli",
    artist: "Lata Mangeshkar, Udit Narayan",
    image: "./images/Aankhein_Khuli.png",
    path: "./music/Aankhein_Khuli.mp3",
}, {
    name: "Chand Sifarish",
    artist: "Shaan, Kailash Kher",
    image: "./images/Chand_Sifarish.png",
    path: "./music/Chand_Sifarish.mp3",
}, {
    name: "Hangover",
    artist: "Shreya Ghoshal, Meet Bros Anjjan",
    image: "./images/Hangover.png",
    path: "./music/Hangover.mp3",
}];

var isPlaying = false;
var audio = new Audio();
var trackIndex = 0;

function loadTrack(index) {
    audio.src=songs[index].path;
    audio.load();
    $("#song_img").attr("src", songs[index].image);
    $("#song_name").text(songs[index].name);
    $("#artist").text(songs[index].artist);
 }

$(".status").click(function () {
    var masterButton = $(this);

    if (!isPlaying) {
        audio.play();
        isPlaying = true;

        masterButton.fadeOut(30, function () {
            masterButton.find("img").attr("src", "./images/pause-circle.png");
            masterButton.fadeIn(30);
        });
        console.log("music is playing");
    } else {
        audio.pause();
        isPlaying = false;

        masterButton.fadeOut(30, function () {
            masterButton.find("img").attr("src", "./images/play (1).png");
            masterButton.fadeIn(30);
        });
        console.log("music is paused");
    }
})
loadTrack(trackIndex);

$(".next").click(function(){
    $(this).fadeOut(10).fadeIn(10);
    trackIndex += 1;
    
    if (trackIndex >= songs.length) {
        trackIndex = 0;
    }
    
    loadTrack(trackIndex);
    if (isPlaying) {
        audio.play();
    }
});

$(".previous").click(function(){
    $(this).fadeOut(10).fadeIn(10);
    
    if (trackIndex === 0) {
        trackIndex = songs.length - 1; 
    } else {
        trackIndex -= 1;
    }
    
    loadTrack(trackIndex);
    
    if (isPlaying) {
        audio.play();
    }
});

function formatTime(seconds){
    var min = Math.floor(seconds / 60);
    var sec = Math.floor(seconds % 60);
    if (sec < 10) { 
        sec = "0" + sec;
        }
    return min + ":" + sec;
}

audio.addEventListener("loadedmetadata", function(){
    $(".total-duration").text(formatTime(audio.duration));
})



audio.addEventListener("timeupdate", function(){
    if(audio.duration){
        var percent=(audio.currentTime / audio.duration)*100;
        $(".progress-slider").val(percent);
        $(".current-time").text(formatTime(audio.currentTime));
    }
})
$(".progress-slider").on("input change", function () {
    var sliderValue = $(this).val();
    var newTime = (sliderValue / 100) * audio.duration; 
    audio.currentTime = newTime;
});

audio.addEventListener("ended", function(){
    trackIndex += 1;
    if(trackIndex>= songs.length){
        trackIndex= 0;
    }
    loadTrack(trackIndex);
    audio.play();
})