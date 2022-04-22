import React, { useState } from "react";
import ReactDOM from "react-dom";

import InitialPage from "./components/InitialPage.jsx";
import Game from "./components/Game.jsx"

// import styl'./styles/style.css'
// import Styles from 'style-loader!css-loader?modules!./styles/style.css';

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