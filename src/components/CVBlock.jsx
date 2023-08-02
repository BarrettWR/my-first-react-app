import { useState } from 'react'
import '../styles/component.css'


// CVBlock.defaultProps = {
//     title: "title",
//     t1: "one",
//     t2: "two",
//     t3: "three"
// }

function CVBlock(props) {

    return (
        <div className='container'>
            <h3>{props.title}</h3>
            <p>{props.t1}</p>
            <p>{props.t2}</p>
            <p>{props.t3}</p>
        </div>
    );
};

export default CVBlock;