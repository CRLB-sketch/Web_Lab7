/*****************************************************************************************
* Universidad del Valle de Guatemala
* Sistemas y Tecnologías Web - Sección 10
*
* Laboratorio 7 - React With Webpack
* 
* ! App : Se conectará la página inical y el Juego
*
* @author   Cristian Fernando Laynez Bachez - 201281
* @date     14-Abril-2022
****************************************************************************************/

import React, { useState } from 'react'
import ReactDOM from 'react-dom'

import './styles/styles.css'

import InitialPage from './components/InitialPage.js'
import Game from './components/Game.js'


const App = () => {    

    const[start, setStart] = useState(false)
    
    return (
        <>
            {!start && <InitialPage setStart={setStart} />}
            {start && <Game/>}
        </>
    )
}

const rootElement = document.getElementById('root')

ReactDOM.render(<App/>, rootElement)

export default App