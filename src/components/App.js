import { useState } from 'react'
import Header from './Header'
import TodoItem from './TodoItem'
import todoData from '../todoData'

function App() {

  const [state, setState] = useState({ todoItems: todoData, count: 1 });
  
  const handleChange = (id) => {
    const updatedTodoList = state.todoItems.map(task => {
      if(task.id === id) task.completed = !task.completed;
      return task;
    })
    
    setState({ todoItems: updatedTodoList });
  }
  
  const handleAddTask = () => {
    if(!document.getElementById('task').value) return;
    
    todoData.push({
      id: state.count,
      description: document.getElementById('task').value,
      completed: false
    })
    setState({ todoItems: todoData, count: state.count+1 });
    
    document.getElementById('task').value = null
    document.getElementById('task').focus()
  }
  
  return (
    <div>
      <Header />
      <div className="add-task">
          <input id="task" type="text" placeholder="Task"/>
          <button type='submit' id="add-task-button" onClick={(e) => handleAddTask(e)}>Add Task</button>
      </div>
      <div className="todo-list">
        {state.todoItems.map(task => <TodoItem key={task.id} task={task} handleChange={handleChange} />)}
      </div>
    </div>
  );
}

export default App;
