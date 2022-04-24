/*****************************************************************************************
* Universidad del Valle de Guatemala
* Sistemas y Tecnologías Web - Sección 10
*
* Laboratorio 7 - React With Webpack
* 
* ! Initial Page (Página Principal)
*
* @author   Cristian Fernando Laynez Bachez - 201281
* @date     14-Abril-2022
****************************************************************************************/

import React, { useState } from "react";
import ReactDOM from "react-dom";

import MarioSVG from '../img/MarioBackground0.svg'

const InitialPage = ({setStart}) => {    
    
    return ( 
        <>
            <h1 className="title">Super Mario Bros <br/> Labyrinth Version</h1>
            <img className="img-main" src={MarioSVG} alt='Mario'></img>
            <br/>
            <button className="btn-start" onClick={() => setStart(true)}>START</button>
        </> 
    )
}

export default InitialPage