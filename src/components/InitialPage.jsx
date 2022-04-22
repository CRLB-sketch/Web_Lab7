import React, { useState } from "react";
import ReactDOM from "react-dom";

// import Mario from "../img/MarioBackground.jpg"
import Mario from '../img/MarioBackground0.svg'

const InitialPage = ({setStart}) => {    
    
    return ( 
        <>
            <h1 className="title">SUPER MARIO BROS - Labyrinth Version</h1>
            <img src={Mario} alt='Mario'></img>
            <button onClick={() => setStart(true)}>START</button>
        </> 
    )
}

export default InitialPage