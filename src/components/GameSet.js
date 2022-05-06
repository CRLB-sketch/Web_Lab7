import React from 'react'

const GameSet = ({weight, height, ConfigLabyrinth}) => {
    return(
        <div className='game-set'>
            <ConfigLabyrinth description={'¡PLEASE PERSONALIZATE YOUR NEXT LABYRINTH!'}/>
            <h1 className='congratulations'><strong>CONGRATULATIONS :D</strong></h1>
            <h2 className='details'>You have already complete a labyrinth of {weight} x {height}</h2>
            <br/>
        </div>
    )
}

export default GameSet