import React from 'react'

const Input = (props) => {
  return (
    <div>
        <label>Name:</label>
        <input type="text" name="name" value={props.value} onChange={props.changeHandler} />
    </div>
  )
}

export default Input;
