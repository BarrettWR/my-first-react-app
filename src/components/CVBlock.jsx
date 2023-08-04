import { useState } from 'react'


function CVBlock(props) {
    return (
        <div className='CVBlockContainer'>
            <h1>{props.title}</h1>
            <p>{props.input1}</p>
            <p>{props.input2}</p>
            <p>{props.input3}</p>
        </div>
    );
};

export default CVBlock;