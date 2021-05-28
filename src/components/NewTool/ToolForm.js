import React, { useState } from 'react';

const ToolForm = (props) => {
    const [enteredTitle, setEnteredTitle] = useState('');
    const [enteredType, setEnteredType] = useState('');
    const [enteredDiscription, setEnteredDiscription] = useState('');
    const [enteredStatus, setEnteredStatus] = useState('');
    
    const titleChangeHandler = (event) => {
        setEnteredTitle(event.target.value);

    };
    const typeChangeHandler = (event) => {
        setEnteredType(event.target.value);

    };

    const statusChangeHandler = (event) => {
        setEnteredStatus(event.target.value);

    };

    const discriptionChangeHandler = (event) => {
        setEnteredDiscription(event.target.value);

    };

    const submitHandler = (event) => {
        event.preventDefault();

        const toolData = {
            title: enteredTitle,
            type: enteredType,
            discription: enteredDiscription,
            status: enteredStatus
        };

        props.onSaveToolData(toolData);
        setEnteredTitle('');
        setEnteredType('');
        setEnteredStatus('');
        setEnteredDiscription('');
        

    }
return <form onSubmit={submitHandler}>
    <div>
        <div>
            <label>Title</label>
            <input type="text" value={enteredTitle} onChange={titleChangeHandler}></input>
        </div>
        <div>
            <label for="type" >Type</label>
            <select id="type" name="type" onChange={typeChangeHandler}>
                <option value="select">Select</option>
                <option value="power">Power Tool</option>
                <option value="plugin">Plugin Power Tool</option>
                <option value="Hand">Hand Tool</option>
            </select>
        </div> 
        <div>
            <label>Discription</label>
            <input type="text" onChange={discriptionChangeHandler}></input>
        </div>
        <div>
            <label for="status">Status</label>
            <select id="status" name="status" onChange={statusChangeHandler}>
                <option value="select">Select</option>
                <option value="checkedin">Checked in</option>
                <option value="checkedout">Checked out</option>
            </select>
        </div>
        <div>
            <button>Add New Tool</button>
        </div>
    </div>
</form>

};

export default ToolForm;
