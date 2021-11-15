import './App.css';
import Todo from './todo';
import {useState} from "react";
import React from 'react'

function App() {


    var tlist = [
                  {
                    "name" : "Learn React",
                    "status" : true,
                  },
                  {
                    "name" : "Test script",
                    "status" : true,
                  },
                  {
                    "name" : "Do assignment 1",
                    "status" : true,
                  },
                  {
                    "name" : "zzzzz",
                    "status" : true,
                  }
                ];


    const [todoData , updateTodo ] = useState(tlist);

    function del(){
      todoData[this.index].status = false;
      updateTodo([...todoData]);
    }


  return (
    <div>
      <h1>My Todos</h1>
    
    {
          todoData.map( (task,index) => {
          if(task.status === true){
              return <Todo key={index} index={index} title={task.name}  deleteTodo={ del } />
          }else{
            return "";
          }
        })
    }
      {
        /* {isTodoShown ? <Todo index="2" title="zzzzzzzzzzzz" deleteTodo={del} /> : null }
        {isTodoShown ? <Todo index="3" title="Sha3toosssss" deleteTodo={del} /> : null }
        {isTodoShown ? <Todo index="4" title="skk" deleteTodo={del} /> : null }
        {isTodoShown ? <Todo index="5" title="gkgkgk" deleteTodo={del} /> : null } */
      }

      

     </div>
  );
}

export default App;
