import React, { useState } from "react";

import Tasks from "./components/Tasks";
import AddTask from "./components/AddTask";


import "./App.css";


//arrow

const App = () => {
  const [tasks, setTasks] = useState( [

    {
      id:'1',
      title: 'Estudar Porgramação',
      completed: false,

    },

    {
      id:'2',
      title: 'Ler Livros',
      completed: false,

    },
    {
      id:'2',
      title: 'Ler Livros',
      completed: false,

    },

  ]);

  const handkeTaskAddition = (taskTitle) => {
    const newTasks = [
      ... tasks, 
      {
        title: taskTitle,
        id: Math.random(10),
        completed: false,
    }
  ];
      setTasks(newTasks);
  };


  return (
      <>
        <div className="container"> 
            <AddTask handkeTaskAddition= {handkeTaskAddition} /> 
            <Tasks tasks = {tasks}/>
        </div>
       
      </>
        );        
};
export default App;




//const App = () => {
//  return(
//    <h1>Hello World</h1>
//  )
//ou
 // const mensagem = "hello World";
 //   return <div className="container">
   //   
       
                  // com chave estou usando javaScript
  //    </div> 
      
//};
//export default App;