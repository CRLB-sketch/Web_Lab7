import React, { useState } from "react";
import reactDom from 'react-dom';

const Start = ({ setStartPlay }) => {
                    
    return (
        <div>
            <h1>Laberinto</h1>
            <button onClick={() => setStartPlay(true)}>JUGAR</button>            
        </div>
    )
}

export default Start

