import React, { useState, useEffect } from "react";
import reactDom from 'react-dom';
import InputForLabyrinth from "./Input.jsx";

import Mario from './Mario.jsx'

// Cargar las imagenes
import Champinion from '../img/Champinion.jpg'  
import Block from '../img/Block.jpg'
import YoshiDance from '../img/YoshiDance.gif'

const Game = () => {
                        
    const[labyrinth, setLabyrinth] = useState([])   
    const[ready, setReady] = useState(false)
    const[finish, setFinish] = useState(false)
    const[weight, setWeight] = useState(4)
    const[height, setHeight] = useState(4)
    const[sprite, setSprite] = useState(0)
    const[position, setPosition] = useState(true)

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
            return (<Mario sprite={sprite} position={position} />)
        }

        if(element === '+' || element === '-' || element === '|'){
            return(<td><img className="block" src={Block} alt="BLOCK"></img></td>)
        }

        if(element === 'g'){
            return(<td className="td-img"><img className="champinion" src={Champinion} alt="GOAL"></img></td>)
        }
        
        return(
            <td className="ground">{element}</td>
        )
    }    

    const changuePosition = (defX, defY, x, y) => {
        if(!finish){
            const element = labyrinth[x][y]
            if(element === ' '){
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
            changuePosition(posPlayerX, posPlayerY, posPlayerX-1, posPlayerY)
            setSprite((sprite > 1) ? 0 : sprite + 1)
        }    
        
        else if((e.key === "s" || e.key === "S") && ready){
            changuePosition(posPlayerX, posPlayerY, posPlayerX+1, posPlayerY)
            setSprite((sprite > 1) ? 0 : sprite + 1)
        }    
        
        else if((e.key === "d" || e.key === "D") && ready){
            changuePosition(posPlayerX, posPlayerY, posPlayerX, posPlayerY+1)
            setSprite((sprite > 1) ? 0 : sprite + 1)
            setPosition(true)
        }    
        
        else if((e.key === "a" || e.key === "A") && ready){
            changuePosition(posPlayerX, posPlayerY, posPlayerX, posPlayerY-1)
            setSprite((sprite > 1) ? 0 : sprite + 1)
            setPosition(false)
        }    
    }

    const Loding = () => {
        return(<>
            <br/>
            <br/>
            <img className="img-load" src={YoshiDance} alt="YOSHI DANCE"></img>
            <h1 className="loading">Cargando...</h1>
        </>)
    }
    
    const StartGame = () => {
        return (
            <div>
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
        )
    }
        
    return (
        <div onKeyDown={handleKeyDown} tabIndex="0">
            {!ready && <Loding/>}
            {ready && <StartGame/>}
        </div>        
    )
}

export default Game