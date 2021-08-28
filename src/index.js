const video = document.getElementById('video');
const playButton = document.getElementById('media-play');

class MediaPlayer{
 constructor(config){
     this.media = config.el;
 }
 playMedia(){
     this.media.play();
 }
 pauseMedia(){
    this.media.pause();
 }
}

const play = new MediaPlayer({ el : video });

playButton.onclick = () => {
    // Comprobamos si el video esta pausado
    if(video.paused){
         play.playMedia()
    } 
    else{
         play.pauseMedia()
    }
}