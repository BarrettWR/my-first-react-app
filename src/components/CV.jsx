import { useState } from 'react'
import '../styles/component.css'
import CVBlock from './CVBlock';



function CV() {
    return (
        <div className='container'>
            <h1>CV</h1>
            <CVBlock title="Personal Info" />
            <CVBlock title="Education" />
            <CVBlock title="Experience" />
        </div>
    );
};


export default CV;