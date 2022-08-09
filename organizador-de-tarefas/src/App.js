import React, { useState } from "react";
import Tasks from "./components/Tasks"

import './App.css'





const App = () => {
  // let message = "Hello World!"
// USE STATE ATUALIZA O COMPONENTE

const [tasks, setTasks] = useState([
    {
      id: '1', 
      title: 'Estudar Porgramação',
      completed: false,

    },
    {
      id: '2', 
      title: 'Ler livros',
      completed: true,
    }
]) 


  return (
      <>  
        <div className="container">
          <Tasks tasks={tasks}/>
        </div>
      </>
  )
}

export default App