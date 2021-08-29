const video = document.getElementById('video');
const playButton = document.getElementById('media-play');
const muteButton = document.getElementById('media-mute')

import { play } from './mediaPlayer.mjs'

//Play - Pause
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

//Mute - UnMute
muteButton.onclick = () => {
     // Comprobamos si el video tiene silencio
     if(video.muted){
          play.unMute()
          muteButton.innerText = 'mute'
     }else{
          play.mute()
          muteButton.innerText = 'unmute'
     }
 }
