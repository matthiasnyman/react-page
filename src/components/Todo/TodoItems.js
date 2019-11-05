import React from "react";

function TodoItem(props) {
  const completedStyle = {
    fontStyle: "italic",
    color: "#c4c4c4",
    textDecoration: "line-through"
  };


  return (
    <div className="todo-item">


      <div onClick={() => props.handleChange(props.item, true)}>
        {props.item.completed ? <>&#10003;</> : <>&#6464;</>}
      </div>

      {props.item.edit ? (

        <input value={props.item.text} 
          onChange={(e) => props.handleEdit(props.item, e.target.value)}  
          onKeyPress={(key) => props.onChangeEvent(props.item, key)}
        />

      ) : (
        <p
          style={props.item.completed ? completedStyle : null}
          onClick={(key) => props.handleChange(props.item, key)}
        >
          {props.item.text}
        </p>

      )}

      <small onClick={() => props.onRemove(props.item)}>X</small>
    </div>
  );
}

export default TodoItem;
