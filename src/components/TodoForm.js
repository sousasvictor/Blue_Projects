import React, { useState, useEffect, useRef } from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';


function TodoForm(props) {
  const [inputTitle, setInputTitle] = useState(props.edit ? props.edit.title : '');
  const [input, setInput] = useState(props.edit ? props.edit.description : '');
  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current.focus();
  });

  const handleChangeTitle = e => {
    setInputTitle(e.target.value);
  };

  const handleChange = e => {
    setInput(e.target.value);
  };

  const handleSubmit = e => {
    e.preventDefault();

    props.onSubmit({
      id: Math.floor(Math.random() * 10000),
      text: inputTitle,
      description:input
    });
    setInputTitle('');
    setInput('');
  };

  return (
    <form onSubmit={handleSubmit} className='todo-form'>
      {props.edit ? (
        <>
          <TextField
            label="Change Idea?" 
            variant="outlined"
            value={inputTitle}
            onChange={handleChangeTitle}
            name='text'
            ref={inputRef}
            size="small"
            className="m-1"
          />
          <TextField
            label="Description" 
            variant="outlined"
            value={input}
            onChange={handleChange}
            name='text'
            size="small"
            className="m-1"
          />
          <Button className="m-1" variant="contained" color="secondary" onClick={handleSubmit}>
            Update
          </Button>
         
        </>
      ) : (
        <>
          <TextField
            label="Your Plan" 
            variant="outlined"
            value={inputTitle}
            onChange={handleChangeTitle}
            name='text'
            ref={inputRef}
            size="small"
            className="m-1"
          />
          <TextField
            label="Description" 
            variant="outlined"
            value={input}
            onChange={handleChange}
            name='text'
            ref={inputRef}
            size="small"
            className="m-1"
          />
          <Button className="m-1" variant="contained" color="primary" onClick={handleSubmit}>
            Add a task
          </Button>
        </>
      )}

    </form>
  );
}

export default TodoForm;