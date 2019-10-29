import React from "react";

function TodoItem(props) {
  const completedStyle = {
    fontStyle: "italic",
    color: "#cdcdcd",
    textDecoration: "line-through"
  };

  return (
    <div className="todo-item">

        <div onClick={ () => props.handleChange(props.item.id) } >
            {props.item.completed ? <p>&#10003;</p> : <p>&#6464;</p> }
        </div>

        <p style={props.item.completed ? completedStyle : null}>
            {props.item.text}
        </p>

        <small onClick={() => props.onRemove(props.item.id)}>X</small>
    </div>
  );
}

export default TodoItem;
