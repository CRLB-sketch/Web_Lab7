import React, { useState } from "react";
import ReactDOM from "react-dom";

import Start from './components/Start.jsx'
import Game from "./components/Game.jsx"

// import './styles/style.css'

const App = () => {

    const[startPlay, setStartPlay] = useState(true)
    
    return (
        <>
            {!startPlay && <Start setStartPlay={setStartPlay} />}

            {startPlay && <Game/>}
        </>
    )
}

const rootElement = document.getElementById("root")

ReactDOM.render(<App/>, rootElement)

export default App