import React from 'react';
import { useState } from 'react'
import '../styles/component.css'

function InputBlock(props) {

    return (
        <div className='container'>
            <h1>{props.title}</h1>
            <input type="text" placeholder={props.input1} onChange={e => props.set1(e.target.value)} />
            <input type="text" placeholder={props.input2} onChange={e => props.set2(e.target.value)} />
            <input type="text" placeholder={props.input3} onChange={e => props.set3(e.target.value)} />
        </div>
    );
};

export default InputBlock;