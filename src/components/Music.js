/**
 * Universidad del Valle de Guatemala
 * Sistemas y Tecnologías Web - Sección 10
 *
 * Laboratorio 7 - React With Webpack
 *
 * ! Music : Pequeño reproductor de música
 *
 * @author   Cristian Fernando Laynez Bachez - 201281
 * @date     14-Abril-2022
 */

// Importar las canciones a reproducir
import themesong from '../music/Super Mario Bros. Theme Song.mp3'
import victorysong from '../music/Super Mario Bros. Level Complete.mp3'

class Music {
  constructor() {
    this.sound_main = new Audio(themesong)
    this.sound_victory = new Audio(victorysong)
  }

  // ! Main theme sound
  play_main_sound() {
    this.sound_main.play()
  }

  stop_main_sound() {
    this.sound_main.pause()
    this.sound_main.currentTime = 0
  }

  // ! Level complete sound
  play_victory_sound() {
    this.sound_victory.play()
  }

  stop_victory_sound() {
    this.sound_victory.pause()
    this.sound_victory.currentTime = 0
  }
}

export default Music
// PD: Yo sé que este diseño de esta clase no es ideal ya que se puede volver repetitivo :(
