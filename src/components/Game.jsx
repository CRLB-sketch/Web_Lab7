import React, { useState, useEffect } from "react";
import reactDom from 'react-dom';
import InputForLabyrinth from "./Input.jsx";

const Game = () => {
                        
    const[labyrinth, setLabyrinth] = useState([])   
    const[ready, setReady] = useState(false)
    const[finish, setFinish] = useState(false)
    const[weight, setWeight] = useState(4)
    const[height, setHeight] = useState(4)

    let posPlayerX = -1
    let posPlayerY = -1
    
    const CreateNewLabyrinth = () => {
        setReady(false)
        fetch(`https://maze.juanelcaballo.club/?type=json&w=${weight}&h=${height}`)
        .then(response => response.json())
        .then(result => {            
            setLabyrinth(result)
            setFinish(false)
            setReady(true)
        })
        .catch(error => alert("Error inesperado con los shows" + error))
    }
    
    useEffect(() => {
        CreateNewLabyrinth()
    }, [])    
    
    const InsertElement = ({element, i, j}) => {

        if(element === 'p'){
            posPlayerX = i
            posPlayerY = j
        }
        
        return(
            <td>{element}</td>
        )
    }    

    const changuePosition = (defX, defY, x, y) => {
        if(!finish){
            const element = labyrinth[x][y]
            if(element === ' '){
                console.log("CAMINAR")
                const renderNewLabyrinth = [...labyrinth]
                renderNewLabyrinth[defX][defY] = ' '
                renderNewLabyrinth[x][y] = 'p'
                posPlayerX = x
                posPlayerY = y
                setLabyrinth(renderNewLabyrinth)
            }
            else if(element === 'g'){
                alert("JUEGO TERMINADO")
                setFinish(true)
            }
        }
    }

    const handleKeyDown = (e) => {        
        if((e.key === "w" || e.key === "W") && ready){
            console.log("ARRIBA = " + labyrinth[posPlayerX-1][posPlayerY])
            changuePosition(posPlayerX, posPlayerY, posPlayerX-1, posPlayerY)
        }    
        
        else if((e.key === "s" || e.key === "S") && ready){
            console.log("ABAJO = " + labyrinth[posPlayerX+1][posPlayerY])
            changuePosition(posPlayerX, posPlayerY, posPlayerX+1, posPlayerY)
        }    
        
        else if((e.key === "d" || e.key === "D") && ready){
            console.log("DERECHA = " + labyrinth[posPlayerX][posPlayerY+1])
            changuePosition(posPlayerX, posPlayerY, posPlayerX, posPlayerY+1)
        }    
        
        else if((e.key === "a" || e.key === "A") && ready){
            console.log("IZQUIERDA = " + labyrinth[posPlayerX][posPlayerY-1])
            changuePosition(posPlayerX, posPlayerY, posPlayerX, posPlayerY-1)
        }    
    }
    
    // const title = {
    //     color: 'red'
    // }
    
    return (
        <div onKeyDown={handleKeyDown} tabIndex="0">
            {!ready && <h1>Cargando...</h1>}
            {ready && 
                <div>
                    {/* <h1 style={title}>¡QUE EMPIECE EL JUEGO!</h1>             */}
                    <h1>¡QUE EMPIECE EL JUEGO!</h1>            

                    <form>
                        <InputForLabyrinth field={"Ancho:"} value={weight} setValue={setWeight} />
                        <InputForLabyrinth field={"Alto:"} value={height} setValue={setHeight} />
                    </form>
                    <br/>
                    <button onClick={CreateNewLabyrinth}>CREAR NUEVO LABERINTO</button>
                    
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
        </div>        
    )
}

export default Game