import { useState } from 'react'
import '../styles/component.css'

function Education() {


    return (
        <div className='container'>
            <h1>Education</h1>
            <input type="text" placeholder='Degree'></input>
            <input type="text" placeholder='School Name'></input>
            <input type="text" placeholder='Date graduated'></input>
        </div>
    );
};

export default Education;