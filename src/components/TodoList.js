import React, { useState } from 'react';
import TodoForm from './TodoForm';
import Todo from './Todo';
import Grid from '@material-ui/core/Grid'
import Box from '@material-ui/core/Box';
import Container from '@material-ui/core/Container';
import { ThemeProvider, makeStyles, useTheme } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    root: {
      height: '100vh',
      backgroundColor: theme.palette.background.dark,
    },
    btn:{
        background: theme.background,
        border: 0,
        fontSize: 16,
        borderRadius: 3,
        boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
        color: 'white',
        height: 48,
        padding: '0 30px',
    }
  }));

function TodoList({ darkMode, setDarkMode }) {
    const [todos, setTodos] = useState([]);
    const classes = useStyles();
    const theme = useTheme();

    const addTodo = todo => {
        if (!todo.text || /^\s*$/.test(todo.text || !todo.description || /^\s*$/.test(todo.description))) {
            return;
        }

        const newTodos = [todo, ...todos];

        setTodos(newTodos);
        console.log(...todos);
    };

    const updateTodo = (todoId, newValue) => {
        if (!newValue.text || /^\s*$/.test(newValue.text)) {
            return;
        }

        setTodos(prev => prev.map(item => (item.id === todoId ? newValue : item)));
    };

    const removeTodo = id => {
        const removedArr = [...todos].filter(todo => todo.id !== id);

        setTodos(removedArr);
    };

    const completeTodo = (todoId, newValue) => {

        setTodos(prev => prev.map(item => (item.id === todoId ? newValue : item)));
    };

    return (
        <div className={classes.root} >
            <Container>
                <Grid container spacing={2} >
                    <Grid container direction="row" justify="center" alignItems="center" item lg={12} md={12} sm={12} xs={12}>
                        <Box className="mt-2">
                            <TodoForm onSubmit={addTodo} />
                        </Box>
                    </Grid>
                    <Todo
                        todos={todos}
                        completeTodo={completeTodo}
                        removeTodo={removeTodo}
                        updateTodo={updateTodo}
                    />
                </Grid>
            </Container>
        </div>
    );
}

export default TodoList;