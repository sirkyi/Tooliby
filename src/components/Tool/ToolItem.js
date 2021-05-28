import React, { useState } from 'react';
import './ToolItem.css';
import drill from '../../img/drill.png';

const ToolItem = (props) => {
    const [status, setStatus] = useState(props.status);

    // console.log(this.porps);
    const checkOutHandler = () => {
    setStatus('Checked Out');

    };

    return (
        <div className="tool-item">
            <div className="tool-image">
                <img src={drill} alt="Drill"></img>
                <p>{props.type}</p>
            </div>
            <div className="tool-body">
                <h1>{props.title}</h1>
                <p>Status: {status}</p> 
                <p>discription</p>
                
                <button onClick={checkOutHandler}>Check Out</button>
            </div>
            
            
            
            
        </div>
    );
}

export default ToolItem; 