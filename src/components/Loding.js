/**
 * Universidad del Valle de Guatemala
 * Sistemas y Tecnologías Web - Sección 10
 *
 * Laboratorio 7 - React With Webpack
 *
 * ! Loding : Componente de carga
 *
 * @author   Cristian Fernando Laynez Bachez - 201281
 * @date     14-Abril-2022
 */

import React from 'react'

import YoshiDance from '../img/YoshiDance.gif'

const Loding = () => {
  return (
    <>
      <br />
      <br />
      <img className='img-load' src={YoshiDance} alt='YOSHI DANCE'></img>
      <h1 className='loading'>Cargando...</h1>
    </>
  )
}

export default Loding
