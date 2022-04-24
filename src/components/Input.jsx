import React, { useState, useEffect } from "react";

const InputForLabyrinth = ({field, value, setValue}) => {

    return (
        <>
            <label>
                {field}
            </label>
            <input                            
                type="number"
                required
                value={value}
                min="4"
                max="8"
                onChange={(e) => setValue(e.target.value)}
            />
        </>
    )
}

export default InputForLabyrinth