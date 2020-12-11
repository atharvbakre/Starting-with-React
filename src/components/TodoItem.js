function TodoItem(props) {
    const completedStyle = {
        color: "#cdcdcd",
        textDecoration: "line-through"
    }

    return (
        <div className="todo-item">
            <input type="checkbox" checked={props.task.completed} onChange={() => props.handleChange(props.task.id)} />
            <p style={props.task.completed ? completedStyle: null }>{props.task.description}</p>
        </div>
    )
}

export default TodoItem