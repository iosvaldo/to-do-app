import React,{ useState } from 'react'
import TodoForm from './TodoForm'
import Todo from './Todo'
import { FcTodoList } from 'react-icons/fc'

function TodoList() {
  const [todos, setTodos] = useState([]);

  const addTodo = todo => {
    if(!todo.text || /^\s*$/.test(todo.text)) { 
      return;
  }

  const newTodos = [todo, ...todos];

  setTodos(newTodos);
  console.log(todo, ...todos);
};

const updateTodo = (todoId, newValue) => {
  if(!newValue.text || /^\s*$/.test(newValue.text)) { 
    return;
  }
  setTodos(previous => previous.map(item => (item.id === todoId ? newValue : item))
  )
}


const removeTodo = id => {
  const removeArr = [...todos].filter(todo => todo.id !== id)

  setTodos(removeArr)
}

const completeTodo = id => {
  let updatedTodos = todos.map(todo => {
    if(todo.id === id){
      todo.isComplete = !todo.isComplete
    }
    return todo
  })
  setTodos(updatedTodos);
}


  return (
    <div class="todo-app">
      <h1> What's your plan for Today? </h1>
        <FcTodoList className="todo-list-icon"/>
      
      <TodoForm onSubmit={addTodo} />
      <Todo 
      todos={todos}
      completeTodo={completeTodo}
      removeTodo={removeTodo}
      updateTodo={updateTodo}
      />
    </div>
  )
}

export default TodoList