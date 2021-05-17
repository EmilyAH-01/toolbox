import React, { useState, useEffect } from 'react';
import API from '../utils/API';
import { List, ListItem } from '../components/List';

function Todo() {
  const [todos, setTodos] = useState([])
  const [formObject, setFormObject] = useState({})

  useEffect(() => {
    loadTodos()
  }, [])

  function loadTodos() {
    API.getTodos()
      .then(res => setTodos(res.data))
      .catch(err => console.log(err));
  };

  function deleteTodo(id) {
    API.deleteTodo(id)
      .then(res => loadTodos())
      .catch(err => console.log(err));
  }

  function handleInputChange(event) {
    const { name, value } = event.target;
    setFormObject({...formObject, [name]: value})
  };

  function handleFormSubmit(event) {
    event.preventDefault();
    if (formObject.content) {
      API.saveTodo({
        content: formObject.content
      })
        .then(res => loadTodos())
        .catch(err => console.log(err));
    }
    document.getElementById('task-form').reset();
  };

  function handleTaskUpdate(id) {
    API.updateTodo(id, {completed: true})
      .then(res => loadTodos())
      .catch(err => console.log(err));
  };

  return (
    <div>
      <h1>To-Do List</h1>
      <form id='task-form'>
        <input 
          className='task-entry'
          onChange={handleInputChange}
          name='content'
          placeholder='Enter a task'
        />
        <button
          disabled={!(formObject.content)}
          onClick={handleFormSubmit}
        >Enter Task</button>
      </form>
        <div className="task-list">
          <List>
            {todos.map(todo => (
              <ListItem key={todo._id}>
                <strong>{todo.content}  </strong>
                <button onClick={() => deleteTodo(todo._id)}>Delete</button>
                <button onClick={() => handleTaskUpdate(todo._id)}>Completed</button>
              </ListItem>
            ))}
          </List>
        </div>    
    </div>
  )
}

export default Todo;