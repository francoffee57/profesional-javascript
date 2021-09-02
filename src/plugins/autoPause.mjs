import { MediaPlayer , play } from '../mediaPlayer.mjs'

export class AutoPause{

    constructor( player ){
        this.threshold = 0.25
        this.player = player
        //Definimos this permanente
        this.handleIntersection = this.handleIntersection.bind(this)

        this.handleVisibilityChange = this.handleVisibilityChange.bind(this)
    }

    run(player){
        this.player = video
        
        //sintax
        // const observer = new IntersectionObserver(hanbler, config)
        //Creamos un Intersection Observer
        const observer = new IntersectionObserver(this.handleIntersection, {
            //Le pasamos un umbral que nos dice que porciento del objeto debe tener intecección con el contenedor para que nos abece
            //En este caso el 25%
            threshold: this.threshold
        })
        //Observamos si esta dentro del contenedor (Toda la pantalla)
        // observer.observe(this.player.media)
        observer.observe(video)
        
        //Que el video se pause cuando cambiamos de pestaña:
        //Con esto sabemos si esta en la pestaña de nuestro contenido
        document.addEventListener('visibilitychange', this.handleVisibilityChange)
    }
    //Nos dice si ubo una intercepcion  (entris son todos los objetos que estamos observendo)
    handleIntersection(entries){
        //Como aqui solo es uno 
        const entry = entries[0]

        const isVisible = entry.intersectionRatio >= this.threshold

        if(isVisible){
            this.player.play()
        } else{
            this.player.pause()
        }
    // console.log(`El entry vale: ${entries[0].IntersectionRatio}.
    // El threshold vale: ${this.threshold}.
    // por ende es ${isVisible}`);
    }
    //Que va a pasar si esta o no en la pestaña de nuestra web
    handleVisibilityChange(){
        //Preguntamos si esta o no en la pantalla
        const isVisible = document.visibilityState === 'visible'

        if(isVisible){
            this.player.play()
        } else{
            this.player.pause()
        }
    }
}