import React, { useState } from 'react';
import './App.css';

function Todo({todo, index, completeTodo, deleteTodo}) {
  return(
    <div style={{textDecoration: todo.isCompleted ? 'line-through' : ''}}  className="todo">
      {todo.text}
      <div>
        <button onClick= {() => completeTodo(index)}>Complete</button>
        <button className="remove" onClick= {() => deleteTodo(index)}>Delete</button>
      </div>
    </div>
  );
}

function TodoForm({addTodo}) {
  const [value, setValue] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
    if(!value) return;
    addTodo(value);
    setValue("");
  }


  return (
    <form onSubmit={handleSubmit}>
      <input 
        type= "text" 
        className= "input" 
        value={value}
        placeholder="Add Todo..." 
        onChange={e =>setValue(e.target.value)}/>
    </form>
  )
}

function App() 
{
  const [todos, setTodos] = useState ([
    {
      text: "Prepare for Presentation",
      isCompleted: false
    },
    {
      text: "React Udacity Course nanodegree",
      isCompleted: false
    },
    {
      text: "Finish fylo landing-page challege on Frontend mentor",
      isCompleted: false
    },
    {
      text: "Update Ife on React Hooks",
      isCompleted: false
    },
    {
      text: "Search for a cool react challenge on frontend mentor",
      isCompleted: false
    }
  ]);

  const addTodo = text => {
    const newTodos = [...todos, {text}];
    setTodos(newTodos);
  };
  
  const completeTodo = index => {
    const newTodos = [...todos];
    newTodos[index].isCompleted = true;
    setTodos(newTodos);
  };

  const deleteTodo = index => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);

  }


  return (
    <div className="app">
      <div className="todo-list">
        {todos.map((todo,index) => (
          <Todo 
            key={index} 
            index={index} 
            todo={todo}
            completeTodo={completeTodo}
            deleteTodo= {deleteTodo}
          />
        ))
        }
        <TodoForm addTodo={addTodo}/>
      </div>
    </div>
  );
}


export default App
