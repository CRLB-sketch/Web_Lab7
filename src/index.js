import React, { useState } from "react";
import ReactDOM from "react-dom";

// Componentes
import Start from './components/Start.jsx'
import Game from "./components/Game.jsx"

const App = () => {
                
    /**
     * [["+", "-", "-", "+", "-", "-", "+", "-", "-", "+", "-", "-", "+"], 
     *  ["|", "p", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", "|"], 
     *  ["+", " ", " ", "+", "-", "-", "+", "-", "-", "+", " ", " ", "+"], 
     *  ["|", " ", " ", "|", " ", " ", " ", " ", " ", " ", " ", " ", "|"], 
     *  ["+", "-", "-", "+", " ", " ", "+", "-", "-", "+", "-", "-", "+"], 
     *  ["|", " ", " ", "|", " ", " ", "|", " ", " ", " ", " ", " ", "|"], 
     *  ["+", " ", " ", "+", " ", " ", "+", "-", "-", "+", " ", " ", "+"], 
     *  ["|", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", "g", "|"], 
     *  ["+", "-", "-", "+", "-", "-", "+", "-", "-", "+", "-", "-", "+"]]
     */
    
    const[startPlay, setStartPlay] = useState(false)    
    const[labyrinth, setLabyrinth] = useState([])   
    
    const createLabyrinth = () => {
        fetch("https://maze.juanelcaballo.club/?type=json&w=4&h=4")
        .then(response => response.json())
        .then(result => {
            setLabyrinth(result)
            setStartPlay(true)
        })
        .catch(error => alert("Error inesperado con los shows" + error))
    }
    
    return (
        <div>

            {!startPlay && <Start
                createLabyrinth={createLabyrinth}
            />}

            {startPlay && <Game
                labyrinth={labyrinth}
            />}
            
        </div>
    )
}

ReactDOM.render(
    <App />,
    document.getElementById('root')
)