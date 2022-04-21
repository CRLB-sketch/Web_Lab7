import React, { useState, useEffect } from "react";
import reactDom from 'react-dom';
import InputForLabyrinth from "./Input.jsx";

/* [["+", "-", "-", "+", "-", "-", "+", "-", "-", "+", "-", "-", "+"], 
    ["|", "p", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", "|"], 
    ["+", "-", "-", "+", "-", "-", "+", "-", "-", "+", " ", " ", "+"], 
    ["|", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", "|"], 
    ["+", " ", " ", "+", "-", "-", "+", "-", "-", "+", "-", "-", "+"], 
    ["|", " ", " ", " ", " ", " ", "|", " ", " ", " ", " ", " ", "|"], 
    ["+", " ", " ", "+", " ", " ", "+", " ", " ", "+", " ", " ", "+"], 
    ["|", " ", " ", "|", " ", " ", " ", " ", " ", "|", " ", "g", "|"], 
    ["+", "-", "-", "+", "-", "-", "+", "-", "-", "+", "-", "-", "+"]] */

const Game = () => {
                        
    const[labyrinth, setLabyrinth] = useState([])   
    const[ready, setReady] = useState(false)
    const[weight, setWeight] = useState(4)
    const[height, setHeight] = useState(4)

    let testX = -1
    let testY = -1
    const[player, setPlayer] = useState({
        posX: -1,
        posY: -1,        
    })

    const[goal, setGoal] = useState({
        posX: -2,
        posY: -2,
    })
    
    const CreateNewLabyrinth = () => {
        setReady(false)
        fetch(`https://maze.juanelcaballo.club/?type=json&w=${weight}&h=${height}`)
        .then(response => response.json())
        .then(result => {            
            setLabyrinth(result)
            setReady(true)
        })
        .catch(error => alert("Error inesperado con los shows" + error))
    }
    
    useEffect(() => {
        CreateNewLabyrinth()
    }, [])    
    
    const InsertElement = ({element, i, j}) => {

        if(element === 'p'){
            console.log("JUGADOR UBICADO EN: " + i + " - " + j)
            testX = i
            testY = j
        }
        if(element === 'g'){                                                
            console.log("META UBICADO EN: " + i + " - " + j)            
        }
        
        return(
            <td>{element}</td>
        )
    }    

    document.onkeydown = function(e) {
        if(e.key === "Enter"){                
            console.log("EMPEZAR | X = " + labyrinth[testX][testY])
        }    
    
        if(e.key === "w" || e.key === "W"){
            console.log("ARRIBA | X = " + labyrinth[testX-1][testY])
        }    
        
        if(e.key === "s" || e.key === "S"){
            console.log("ABAJO | X = " + labyrinth[testX+1][testY])
        }    
        
        if(e.key === "d" || e.key === "D"){
            console.log("DERECHA | X = " + labyrinth[testX][testY+1])
        }    
        
        if(e.key === "a" || e.key === "A"){
            console.log("IZQUIERDA | X = " + labyrinth[testX][testY-1])
        }    
    };
    
    return (
        <>
            {!ready && <h1>Cargando...</h1>}
            {ready && 
                <div>
                    <h1>¡QUE EMPIECE EL JUEGO!</h1>            

                    <form>
                        <InputForLabyrinth field={"Ancho:"} value={weight} setValue={setWeight} />
                        <InputForLabyrinth field={"Alto:"} value={height} setValue={setHeight} />
                    </form>

                    <button onClick={CreateNewLabyrinth}>CREAR NUEVO LABERINTO</button>
                    
                    <h2>POS X: {player.posX} + POS Y: {player.posY}</h2>       

                    <table>
                        <tbody>
                            {labyrinth.slice(0, labyrinth.length).map((item, i) => (
                                <tr>
                                    {item.map((element, j) => (
                                        <InsertElement element={element} i={i} j={j} />
                                    ))}
                                </tr>
                            ))}
                        </tbody>
                    </table>                    
                </div>            
            }
        </>
        
    )
}

export default Game