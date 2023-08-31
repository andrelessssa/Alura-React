import React, { useState } from 'react';
import Button from './Button';
import './AddTask.css';


const AddTask = ({handkeTaskAddition}) => {
    const [ inputData, setInputData] = useState("")

    const handleInputChange = (e) => {
        
        setInputData(e.target.value);

    };
            const handleAddTaskClik = () => {
                handkeTaskAddition(inputData)

            }

    return ( 
    <div className='add-Task-Container'>
        <input 
        onChange={handleInputChange} 
        value={inputData}
        className='add-Task-input' 
        type="text" 
        />;
        <div className="add-Task-button-Container">
        <Button onClick={handleAddTaskClik}>Adicionar</Button>
        </div>
    </div>

     );
};
 
export default AddTask;
