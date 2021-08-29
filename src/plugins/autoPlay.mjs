import { MediaPlayer } from '../mediaPlayer.mjs'

export class AutoPlay {
    constructor(video) {
      this.player = video
    }
    run() {
      this.player.muted = true
      this.player.play()
    }
}

