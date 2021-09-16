import { AutoPlay } from './plugins/autoPlay.mjs'
import { AutoPause } from './plugins/autoPause.mjs'

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
        this.media.play()
    }
    pauseMedia(){
       this.media.pause()
    }

    mute(){
        this.media.muted = true
    }
    unMute(){
        this.media.muted = false
    }
    sound(volumen){
      this.media.volume = (volumen * 0.1) ** 2
    }
}


export const play = new MediaPlayer({ 
  video, 
  plugins: [ new AutoPlay(video) , new AutoPause(video) ] 
})//[ new AutoPlay(video) ] 

