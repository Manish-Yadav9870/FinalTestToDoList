import React, { useState } from 'react';
import './ToDoList.scss'
const  TodoList=()=> {
  const [todos, setTodos] = useState([]);
  const [inputValue, setInputValue] = useState('');

  const handleChange=(e)=> {
    setInputValue(e.target.value);
  }

  const handleSubmit=(e)=> {
    e.preventDefault();
    if (inputValue === '') {
      alert('Please enter a task');
    } else {
      setTodos([...todos, { text: inputValue, isChecked: false }]);
      setInputValue('');
    }
  }

  const handleDelete=(index)=> {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  }

  const handleCheck=(index)=> {
    const newTodos = [...todos];
    newTodos[index].isChecked = !newTodos[index].isChecked;
    setTodos(newTodos);
  }

  return (
    <div className='Main_Container'>
     <div className='h1_Cont'> <h1>Just do it.</h1></div>
     <div className='form_Cont'> <form onSubmit={handleSubmit} className='form'>
        <div className='input_Btn_Cont'>
        <div className='Input_Cont'>
        <input className='input'
          type="text"
          placeholder=' Add A Text'
          value={inputValue}
          onChange={handleChange}
        /></div> 
        <div className='Btn_Cont'>
         <button className='button' type="submit">I Got This!</button></div></div>
      
      </form></div>
     <div className='ul_Cont'> <ul className='ul'>
        <p className='p'>Number Of Tasks: {todos.length}</p>
      <div className='Return_Main_Cont'> {todos.map((todo, index) => (
         <div className='Return_Cont'><div> <li className='li' key={index} style={{ textDecoration: todo.isChecked ? 'line-through' : 'none' }}>
           
           <div className='text_Cont'>{todo.text}</div> 
<div className='Btn2_And_Input'><div className='input2_Cont'><input 
              type="checkbox"
              checked={todo.isChecked}
              onChange={() => handleCheck(index)}
            /></div> 
           <div className='Button_Cont'> <button className='button2' onClick={() => handleDelete(index)}>Delete</button></div></div>
          </li>
          </div></div>
          
        ))}
        </div> 
        
      </ul></div>
    </div>
  );
}

export default TodoList;