import React from "react";
import Task from "./Task";

const Tasks = ({tasks}) => {
    
    return (
        <>
            {tasks.map((tasks) => (
                 <Task task= { tasks } />
                 ))}

        </>
    );
};

export default Tasks;