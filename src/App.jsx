import React, { useState } from "react";
import ReactDOM from "react-dom";

import './styles/styles.css';

import InitialPage from "./components/InitialPage.jsx";
import Game from "./components/Game.jsx"


const App = () => {    

    const[start, setStart] = useState(false)
    
    return (
        <>
            {!start && <InitialPage setStart={setStart} />}
            {start && <Game/>}
        </>
    )
}

const rootElement = document.getElementById("root")

ReactDOM.render(<App/>, rootElement)

export default App