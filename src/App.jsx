import React, { useState } from "react";
import ReactDOM from "react-dom";

import Game from "./components/Game.jsx"

const App = () => {    
    return ( <Game/> )
}

const rootElement = document.getElementById("root")

ReactDOM.render(<App/>, rootElement)

export default App