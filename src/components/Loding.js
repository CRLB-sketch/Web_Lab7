import React from 'react'

import YoshiDance from '../img/YoshiDance.gif'

const Loding = () => {
    return(<>
        <br/>
        <br/>
        <img className='img-load' src={YoshiDance} alt='YOSHI DANCE'></img>
        <h1 className='loading'>Cargando...</h1>
    </>)
}

export default Loding