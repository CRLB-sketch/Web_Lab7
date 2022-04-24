import React, { useState } from "react";
import ReactDOM from "react-dom";

import '../styles/styles.css';

import MarioJPG from "../img/MarioBackground.jpg"
import MarioSVG from '../img/MarioBackground0.svg'

const InitialPage = ({setStart}) => {    
    
    return ( 
        <>
            <h1 className="title">SUPER MARIO BROS - Labyrinth Version</h1>
            <img src={MarioJPG} alt='Mario'></img>
            <img src={MarioSVG} alt='Mario'></img>
            <button onClick={() => setStart(true)}>START</button>
        </> 
    )
}

export default InitialPage