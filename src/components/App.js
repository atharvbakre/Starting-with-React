import { Component } from 'react'
import Header from './Header'
import TodoItem from './TodoItem'
import todoData from '../todoData'

class App extends Component {
  constructor() {
    super()
    this.state = {
      todoItems: todoData
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleAddTask = this.handleAddTask.bind(this)
    this.count = 1
  }

  handleChange(id) {
    const updatedTodoList = this.state.todoItems.map(task => {
      if(task.id === id) task.completed = !task.completed
      return task
    })

    this.setState({ todoItems: updatedTodoList })
  }

  handleAddTask() {
    if(!document.getElementById('task').value) return

    todoData.push({
      id: this.count,
      description: document.getElementById('task').value,
      completed: false
    })
    
    this.setState({ todoItems: todoData })

    document.getElementById('task').value = null
    document.getElementById('task').focus()
    this.count++;
  }
  
  render() {
    const taskList = this.state.todoItems.map(task => <TodoItem key={task.id} task={task} handleChange={this.handleChange} />)
    return (
      <div>
        <Header />
        <div className="add-task">
            <input id="task" type="text" placeholder="Task"/>
            <button type='submit' id="add-task-button" onClick={this.handleAddTask}>Add Task</button>
        </div>
        <div className="todo-list">
          {taskList}
        </div>
      </div>
    );
  }
}

export default App;
