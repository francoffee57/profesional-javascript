const video = document.getElementById('video')
const playButton = document.getElementById('media-play')
const muteButton = document.getElementById('media-mute')
const sound = document.getElementById('sound')

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
//Volumen
sound.addEventListener('input', (e) => {
     console.log('sonido: ', e.target.value)
})



 //Saber si el navegador le da apoyo a los seviceWorker
 if('serviceWorker' in navigator){
     //registramos un archivo llamado sw
     navigator.serviceWorker.register('./sw.js').catch(error =>{ console.error(error.message)})
}