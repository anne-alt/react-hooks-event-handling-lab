// Code Keypad Component Here
import React from "react";

function HandleChange() {
    console.log('Entering password...')
}

function Keypad (){
    return (
        <div>
            <input type="password" onChange={HandleChange}/>
        </div>
    )
}

export default Keypad;