import React from "react";
import "./todo.scss";
import TodoForm from "./TodoForm";
import TodoItems from "./TodoItems";

class Todo extends React.Component {
  constructor() {
    super();
    this.state = {
      text: "",
      todos: [
        {
          id: 1,
          text: 'water the plant',
          completed: false,
          edit: false
        },
        {
        id: 2,
        text: 'walk the dog',
        completed: false,
        edit: false
        },
        {
          id: 3,
          text: 'finish the todo',
          completed: false,
          edit: false
        }
      ]
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleEdit = this.handleEdit.bind(this);
    this.onChange = this.onChange.bind(this);
    this.onChangeEvent = this.onChangeEvent.bind(this);
    this.onRemove = this.onRemove.bind(this);
  }

  handleChange(e) {
    if (typeof e === "number") {
      this.setState(prevState => {
        const updatedTodos = prevState.todos.map(todo => {
          if (todo.id === e) {
            todo.completed = !todo.completed;
          }
          return todo;
        });
        return {
          todos: updatedTodos
        };
      });
    } else {
      this.setState(prevState => {
        const updatedTodos = prevState.todos.map(todo => {
          if (todo.id === e.id) {
            todo.edit = !todo.edit;
          }
          return todo;
        });
        return {
          todos: updatedTodos
        };
      });
    }
  }

  handleEdit(input, value) {
    this.setState({
      todos: this.state.todos.map(item =>
        item.id === input.id ? { ...item, text: value } : item
      )
    });
  }

  onChangeEvent(value, event) {
    if (event.key === "Enter") {
      this.setState({
        todos: this.state.todos.map(item =>
          item.id === value.id ? { ...item, edit: false } : item
        )
      });
    }
  }

  onChange(event) {
    this.setState({ text: event.target.value });
  }

  onSubmit = event => {
    event.preventDefault();

    const object= {
      id: Date.now(),
      text: this.state.text,
      completed: false,
      edit: false
    };

    this.setState({
      text: "",
      todos: [...this.state.todos, object]
    });
  };

  onRemove(id) {
    const filteredArray = this.state.todos.filter(item => item.id !== id);
    this.setState({ todos: filteredArray });
  }

  render() {
    const todoItems = this.state.todos.map(item => (
      <TodoItems
        key={item.id}
        item={item}
        onRemove={this.onRemove}
        handleChange={this.handleChange}
        handleEdit={this.handleEdit}
        onChangeEvent={this.onChangeEvent}
      />
    ));

    return (
      <>
        <TodoForm
          text={this.state.text}
          onSubmit={this.onSubmit}
          onChange={this.onChange}
        />
        <div className="todo-list">
          <h3>List</h3>
          <div>{todoItems}</div>
        </div>
      </>
    );
  }
}

export default Todo;
