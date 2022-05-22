/**
 * Universidad del Valle de Guatemala
 * Sistemas y Tecnologías Web - Sección 10
 *
 * Laboratorio 7 - React With Webpack
 *
 * ! Game Set : Componente que mostrara victoria
 *
 * @author   Cristian Fernando Laynez Bachez - 201281
 * @date     14-Abril-2022
 */

import PropTypes from 'prop-types'
import React from 'react'

const GameSet = ({ weight, height, ConfigLabyrinth }) => {
  return (
    <div className='game-set'>
      <ConfigLabyrinth
        description={'¡PLEASE PERSONALIZATE YOUR NEXT LABYRINTH!'}
      />
      <h1 className='congratulations'>
        <strong>CONGRATULATIONS :D</strong>
      </h1>
      <h2 className='details'>
        You have already complete a labyrinth of {weight} x {height}
      </h2>
      <br />
    </div>
  )
}

GameSet.propTypes = {
  weight: PropTypes.number,
  height: PropTypes.number,
  ConfigLabyrinth: PropTypes.func,
}

export default GameSet
