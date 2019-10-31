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
    this.handleEdit = this.handleEdit.bind(this);
    this.onChange = this.onChange.bind(this);
    this.onChangeEvent = this.onChangeEvent.bind(this);
    this.onRemove = this.onRemove.bind(this);
  }

  componentDidMount() {
    this.getTodos();
  }

  getTodos() {
    fetch("http://localhost:4000/todos")
      .then(res => res.json())
      .then(
        result => {
          this.setState({
            todos: result
          });
        },

        error => {
          this.setState({
            error
          });
        }
      );
  }

  handleChange(e) {
    if (typeof e === "number") {
      // this.setState(prevState => {
      //   const updatedTodos = prevState.todos.map(todo => {
      //     if (todo.id === e) {
      //       todo.completed = !todo.completed;
      //     }
      //     return todo;
      //   });
      //   return {
      //     todos: updatedTodos
      //   };
      // });

      fetch(`http://localhost:4000/todos/${e}`, {
        method: "PATCH",
        body: JSON.stringify({
          completed: !this.state.completed
        }),
        headers: {
          "Content-type": "application/json; charset=UTF-8"
        }
      })
        .then(response => response.json())
        .then(json => this.getTodos());

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
      // this.setState({
      //   todos: this.state.todos.map(item =>
      //     item.id === value.id ? { ...item, edit: false } : item
      //     )
      //   });
      //   console.log(value.text);

      fetch(`http://localhost:4000/todos/${value.id}`, {
        method: "PATCH",
        body: JSON.stringify({
          text: value.text,
          edit: false
        }),
        headers: {
          "Content-type": "application/json; charset=UTF-8"
        }
      })
        .then(response => response.json())
        .then(json => this.getTodos());
    }
  }

  onChange(event) {
    this.setState({ text: event.target.value });
  }

  onSubmit = event => {
    event.preventDefault();

    this.setState({
      text: ""
    });

    fetch("http://localhost:4000/todos", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        id: Date.now(),
        text: this.state.text,
        completed: false,
        edit: false
      })
    })
      .then(response => response.json())
      .then(json => this.getTodos());
  };

  onRemove(id) {
    // const filteredArray = this.state.todos.filter(item => item.id !== id);
    // this.setState({ todos: filteredArray });

    fetch(`http://localhost:4000/todos/${id}`, {
      method: "DELETE"
    }).then(() => this.getTodos());
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
