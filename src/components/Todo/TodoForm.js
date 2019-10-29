import React from 'react';

function TodoForm(props) {
  return(
    // <form className='todoForm' onSubmit={() => props.onSubmit(props.item)} >
    <form className='todoForm' onSubmit={props.onSubmit} >
      <input value={props.text} onChange={props.onChange}  />
      <button type='submit'>Add</button>
    </form>
  )
}

export default TodoForm