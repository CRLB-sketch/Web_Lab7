/**
 * Universidad del Valle de Guatemala
 * Sistemas y Tecnologías Web - Sección 10
 *
 * Laboratorio 7 - React With Webpack
 *
 * ! Mario : Realmente este tendrá un poco de lógica para cambiar los sprites
 *
 * @author   Cristian Fernando Laynez Bachez - 201281
 * @date     14-Abril-2022
 */

import React from 'react'
import PropTypes from 'prop-types'

// Sprites de Mario
import MarioS1 from '../img/MarioS1.jpg'
import MarioS2 from '../img/MarioS2.jpg'
import MarioS3 from '../img/MarioS3.jpg'

const Mario = ({ sprite, position }) => {
  return (
    <>
      {position && (
        <>
          {sprite === 0 && (
            <td className='td-img'>
              <img className='position-right' src={MarioS1} alt='MARIO'></img>
            </td>
          )}
          {sprite === 1 && (
            <td className='td-img'>
              <img className='position-right' src={MarioS2} alt='MARIO'></img>
            </td>
          )}
          {sprite === 2 && (
            <td className='td-img'>
              <img className='position-right' src={MarioS3} alt='MARIO'></img>
            </td>
          )}
        </>
      )}
      {!position && (
        <>
          {sprite === 0 && (
            <td className='td-img'>
              <img className='position-left' src={MarioS1} alt='MARIO'></img>
            </td>
          )}
          {sprite === 1 && (
            <td className='td-img'>
              <img className='position-left' src={MarioS2} alt='MARIO'></img>
            </td>
          )}
          {sprite === 2 && (
            <td className='td-img'>
              <img className='position-left' src={MarioS3} alt='MARIO'></img>
            </td>
          )}
        </>
      )}
    </>
  )
}

Mario.propTypes = {
  sprite: PropTypes.number,
  position: PropTypes.bool,
}

export default Mario
