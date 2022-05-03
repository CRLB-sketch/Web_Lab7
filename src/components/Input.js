/*****************************************************************************************
* Universidad del Valle de Guatemala
* Sistemas y Tecnologías Web - Sección 10
*
* Laboratorio 7 - React With Webpack
* 
* ! Input: Para ingresar el limite de los inputs para crear un nuevo laberinto
*
* @author   Cristian Fernando Laynez Bachez - 201281
* @date     14-Abril-2022
****************************************************************************************/

import React from 'react'

const InputForLabyrinth = ({field, value, setValue}) => {

    return (
        <div className='lab'>
            <label className='label-lab'>
                {field}
            </label>
            <input     
                className='inp-number'                       
                type='number'
                required
                value={value}
                min='4'
                max='8'
                onChange={(e) => setValue(e.target.value)}
            />
        </div>
    )
}

export default InputForLabyrinth