import React, { useState } from 'react';
import TodoForm from './TodoForm';
import 'bootstrap/dist/css/bootstrap.css';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import 'bootstrap/dist/css/bootstrap.css';

const Todo = ({ todos, removeTodo, updateTodo }) => {
    const [edit, setEdit] = useState({
        id: null,
        title: '',
        description: ''
    });

    const submitUpdate = value => {
        updateTodo(edit.id, value);
        setEdit({
            id: null,
            title: '',
            description: ''
        });
    };

    if (edit.id) {

        return (
            <Grid container direction="row" justify="center" alignItems="center" item lg={12} md={12} sm={12} xs={12}>
                <Box className="mt-5">
                    <TodoForm edit={edit} onSubmit={submitUpdate} />
                </Box>
            </Grid>
        );
    }

    return todos.map((todo, index) => (

        <Grid item lg={3} md={4} sm={6} xs={12} key={index}>
            <Box>
                <Card>
                    <CardActionArea>
                        <CardContent>
                            <Grid container wrap="nowrap">
                            <Typography gutterBottom variant="h5" component="h2" noWrap>
                                {todo.text}
                            </Typography>
                            </Grid>
                            <Grid container wrap="nowrap">
                            <Typography variant="body2" color="textSecondary" component="p" noWrap>
                                {todo.description}
                            </Typography>
                            </Grid>
                            
                        </CardContent>
                    </CardActionArea>
                    <CardActions>
                        <Button size="small" color="danger" onClick={() => setEdit({ id: todo.id, title: todo.text, description: todo.description })}>
                            Editar
                        </Button>
                        <Button size="small" color="secondary" onClick={() => removeTodo(todo.id)}>
                            Deletar
                        </Button>
                    </CardActions>
                </Card>
            </Box>
        </Grid>
    ));
};

export default Todo;