import { AutoPlay } from './plugins/autoPlay.mjs'

export class MediaPlayer{
    constructor({ video, plugins }) {
        this.media = video
        this.plugins = plugins || []
        this._initPlugins()
      }

    _initPlugins() {
      this.plugins.forEach(plugin => {
        plugin.run()
      })
    }
    playMedia(){
        console.log(this.media)
        this.media.play()
    }
    pauseMedia(){
        console.log(this.media)
       this.media.pause()
    }

    mute(){
        this.media.muted = true
        console.log('mute');
    }
    unMute(){
        this.media.muted = false
        console.log('unMute');
    }

}


export const play = new MediaPlayer({ video, plugins: [new AutoPlay(video)] })//[ new AutoPlay(video) ] 
