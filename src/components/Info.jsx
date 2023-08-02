import { useState } from 'react'
import '../styles/component.css'

function Info() {


    return (
        <div className='container'>
            <h1>Personal Info</h1>
            <input type="text" placeholder='Name'></input>
            <input type="text" placeholder='Email'></input>
            <input type="text" placeholder='Phone number'></input>
        </div>
    );
};

export default Info;