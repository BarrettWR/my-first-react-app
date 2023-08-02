import { useState } from 'react'
import '../styles/Button.css'


function Button() {

    return (
        <button onClick={() => 
            alert("hi")
        }>
            Submit
        </button>
    )
}

export default Button