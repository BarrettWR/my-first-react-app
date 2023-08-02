import { useState } from 'react'
import '../styles/component.css'

function Experience() {


    return (
        <div className='container'>
            <h1>Experience</h1>
            <input type="text" placeholder='Position'></input>
            <input type="text" placeholder='Company'></input>
            <input type="text" placeholder='Company Phone number'></input>
        </div>
    );
};

export default Experience;