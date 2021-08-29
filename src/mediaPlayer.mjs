
class MediaPlayer{
    constructor(config) {
        this.media = config.el;
        this.plugins = config.plugins || [];
    }

    playMedia(){
        this.media.play();
    }
    pauseMedia(){
       this.media.pause();
    }
}


export const play = new MediaPlayer({ el : video });

