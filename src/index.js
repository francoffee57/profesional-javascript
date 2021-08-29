const video = document.getElementById('video');
const playButton = document.getElementById('media-play');


import { play } from './mediaPlayer.mjs'


playButton.onclick = () => {
    // Comprobamos si el video esta pausado
    if(video.paused){
         play.playMedia()
         playButton.innerHTML = "pause"
    } 
    else{
         play.pauseMedia()
         playButton.innerHTML = "play"
    }
}
