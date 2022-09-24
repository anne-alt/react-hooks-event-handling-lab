// Code EyesOnMe Component Here
import React from "react";

function HandleFocus() {
    console.log('Good!')
}

function HandleBlur() {
    console.log('Hey! Eyes on me!')
}


function EyesOnMe() {
    return(
        <button onFocus={HandleFocus} onBlur={HandleBlur}>Eyes on me</button>
    )
}

export default EyesOnMe
