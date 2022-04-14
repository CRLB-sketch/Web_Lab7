import React, { useState } from "react";
import reactDom from 'react-dom';

const Start = ({ createLabyrinth }) => {
    
    const start = () => {        
        createLabyrinth()
    }
    
    return (
        <div>
            <h1>Laberinto</h1>
            <button onClick={start}>JUGAR</button>
        </div>
    )
}

export default Start