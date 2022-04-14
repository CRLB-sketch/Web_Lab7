import React, { useState } from "react";
import reactDom from 'react-dom';

const Game = ({ labyrinth }) => {
                    
    const renderLabyrinth = () => {
        console.log("JEJE")
    }
    
    return (
        <div>
            <h1>{labyrinth}</h1>                   
            {labyrinth.map((item) => <p>{item}</p>)}                 
        </div>
    )
}

export default Game