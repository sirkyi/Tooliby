import React from 'react';
import ToolForm from './ToolForm';

const NewTool = (props) => {
const saveToolDataHandler = (enteredToolData) => {
    const toolData = {
        ...enteredToolData,
        id: Math.random().toString()
    };
    props.onAddTool(toolData);
};

    return (
    <div>
        <ToolForm onSaveToolData={saveToolDataHandler}></ToolForm>
    </div>
    );
};

export default NewTool;