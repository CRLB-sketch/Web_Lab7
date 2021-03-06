/**
 * Universidad del Valle de Guatemala
 * Sistemas y Tecnologías Web - Sección 10
 *
 * Laboratorio 7 - React With Webpack
 *
 * ! Game / Juego : Estará toda la lógica para llevar a cabo exitosamente el juego
 *
 * @author   Cristian Fernando Laynez Bachez - 201281
 * @date     14-Abril-2022
 */

import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'

// Cargar las imagenes
import Champinion from '../img/Champinion.jpg'
import Block from '../img/Block.jpg'

// Importar componentes
import Mario from './Mario.js'
import InputForLabyrinth from './Input.js'
import Loding from './Loding.js'
import GameSet from './GameSet.js'

// Importar clase de música
import Music from './Music.js'

const music = new Music()

const Game = () => {
  const [labyrinth, setLabyrinth] = useState([])
  const [ready, setReady] = useState(false)
  const [finish, setFinish] = useState(false)
  const [weight, setWeight] = useState(4)
  const [height, setHeight] = useState(4)
  const [sprite, setSprite] = useState(0)
  const [position, setPosition] = useState(true)
  const [finished, setFinished] = useState(false)

  let posPlayerX = -1
  let posPlayerY = -1

  const CreateNewLabyrinth = () => {
    // Tocará que verificar de nuevo de todos modos por sí acaso
    if (weight > 8 || height > 8) {
      alert(
        'La cantidad ingresada es invalida, porfavor ingresar valores menores a 8'
      )
    } else {
      setFinished(false)
      setReady(false)
      music.stop_main_sound()
      music.stop_victory_sound()
      fetch(
        `https://maze.juanelcaballo.club/?type=json&w=${weight}&h=${height}`
      )
        .then((response) => response.json())
        .then((result) => {
          setLabyrinth(result)
          setFinish(false)
          setReady(true)
          music.play_main_sound()
        })
        .catch((error) => alert('Error inesperado con los shows' + error))
    }
  }

  useEffect(() => {
    CreateNewLabyrinth()
  }, [])

  const ConfigLabyrinth = ({ description }) => {
    return (
      <div className='camp-create'>
        <br />
        <h1 className='text-lab'>{description}</h1>
        <form>
          <InputForLabyrinth
            field={'Weight:'}
            value={weight}
            setValue={setWeight}
          />
          <InputForLabyrinth
            field={'Height:'}
            value={height}
            setValue={setHeight}
          />
        </form>
        <br />
        <button className='btn-create' onClick={CreateNewLabyrinth}>
          CREATE NEW LABYRINTH
        </button>
        <br />
      </div>
    )
  }

  const InsertElement = ({ element, i, j }) => {
    if (element === 'p') {
      posPlayerX = i
      posPlayerY = j
      return <Mario sprite={sprite} position={position} />
    }

    if (element === '+' || element === '-' || element === '|') {
      return (
        <td>
          <img className='block' src={Block} alt='BLOCK'></img>
        </td>
      )
    }

    if (element === 'g') {
      return (
        <td className='td-img'>
          <img className='champinion' src={Champinion} alt='GOAL'></img>
        </td>
      )
    }

    return <td className='ground'>{element}</td>
  }

  const changuePosition = (defX, defY, x, y) => {
    if (!finish) {
      const element = labyrinth[x][y]
      if (element === ' ') {
        const renderNewLabyrinth = [...labyrinth]
        renderNewLabyrinth[defX][defY] = ' '
        renderNewLabyrinth[x][y] = 'p'
        posPlayerX = x
        posPlayerY = y
        setLabyrinth(renderNewLabyrinth)
      } else if (element === 'g') {
        setFinished(true)
        music.stop_main_sound()
        music.play_victory_sound()
      }
    }
  }

  const handleKeyDown = (e) => {
    if ((e.key === 'w' || e.key === 'W') && ready) {
      changuePosition(posPlayerX, posPlayerY, posPlayerX - 1, posPlayerY)
      setSprite(sprite > 1 ? 0 : sprite + 1)
    } else if ((e.key === 's' || e.key === 'S') && ready) {
      changuePosition(posPlayerX, posPlayerY, posPlayerX + 1, posPlayerY)
      setSprite(sprite > 1 ? 0 : sprite + 1)
    } else if ((e.key === 'd' || e.key === 'D') && ready) {
      changuePosition(posPlayerX, posPlayerY, posPlayerX, posPlayerY + 1)
      setSprite(sprite > 1 ? 0 : sprite + 1)
      setPosition(true)
    } else if ((e.key === 'a' || e.key === 'A') && ready) {
      changuePosition(posPlayerX, posPlayerY, posPlayerX, posPlayerY - 1)
      setSprite(sprite > 1 ? 0 : sprite + 1)
      setPosition(false)
    }
  }

  const StartGame = () => {
    return (
      <div>
        <ConfigLabyrinth description={'¡LETS GET STARTED!'} />
        <br />
        <table>
          <tbody>
            {labyrinth.slice(0, labyrinth.length).map((item, i) => (
              <tr key={i + ''}>
                {item.map((element, j) => (
                  <InsertElement key={j + ''} element={element} i={i} j={j} />
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    )
  }

  return (
    <div onKeyDown={handleKeyDown} tabIndex='0'>
      {!ready && <Loding />}
      {ready && !finished && <StartGame />}
      {finished && (
        <GameSet
          weight={weight}
          height={height}
          ConfigLabyrinth={ConfigLabyrinth}
        />
      )}
    </div>
  )
}

Game.propTypes = {
  description: PropTypes.string,
  element: PropTypes.string,
  i: PropTypes.number,
  j: PropTypes.number,
  key: PropTypes.function,
}

export default Game
