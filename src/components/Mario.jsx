import React, { useState, useEffect } from "react";

import MarioS1 from "../img/MarioS1.jpg"
import MarioS2 from "../img/MarioS2.jpg"
import MarioS3 from "../img/MarioS3.jpg"

const Mario = ({ sprite, position }) => {                    
    return (
        <>
            {position && <>
                {(sprite === 0) && <td className="td-img"><img className="position-right" src={MarioS1} alt="MARIO"></img></td>}
                {(sprite === 1) && <td className="td-img"><img className="position-right" src={MarioS2} alt="MARIO"></img></td>}
                {(sprite === 2) && <td className="td-img"><img className="position-right" src={MarioS3} alt="MARIO"></img></td>}                    
            </>}
            {!position && <>
                {(sprite === 0) && <td className="td-img"><img className="position-left" src={MarioS1} alt="MARIO"></img></td>}
                {(sprite === 1) && <td className="td-img"><img className="position-left" src={MarioS2} alt="MARIO"></img></td>}
                {(sprite === 2) && <td className="td-img"><img className="position-left" src={MarioS3} alt="MARIO"></img></td>}                    
            </>}

        </>
    )
}

export default Mario