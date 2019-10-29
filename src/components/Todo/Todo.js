import React from "react";
import "./todo.scss";
import TodoForm from "./TodoForm";
import TodoItems from "./TodoItems";

class Todo extends React.Component {
  constructor() {
    super();
    this.state = {
      text: "",
      todos: []
    };

    this.handleChange = this.handleChange.bind(this);
    this.onChange = this.onChange.bind(this);
    this.onRemove = this.onRemove.bind(this);
  }

  handleChange(id) {
    this.setState(prevState => {
      const updatedTodos = prevState.todos.map(todo => {
        if (todo.id === id) {
          todo.completed = !todo.completed;
        }
        return todo;
      });
      return {
        todos: updatedTodos
      };
    });
  }

  onChange(event){
    this.setState({text: event.target.value});
  }

  onSubmit = event => {
    event.preventDefault()
    const object = {
      id: Date.now(),
      text: this.state.text,
      completed: false
    };

    this.setState({
      text: '',
      todos: [...this.state.todos, object]
    });
  };

  onRemove(id) {
    const filteredArray = this.state.todos.filter(item => item.id !== id)
    this.setState({todos: filteredArray});
  }

  render() {

    const todoItems = this.state.todos.map(item => (
      <TodoItems key={item.id} item={item} onRemove={this.onRemove} handleChange={this.handleChange} />
    ));

    return (
      <>
        <TodoForm text={this.state.text} onSubmit={this.onSubmit} onChange={this.onChange} />

        <div className="todo-list">{todoItems}</div>
      </>
    );
  }
}

export default Todo;
