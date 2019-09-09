import React, {useEffect} from 'react'
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from'@material-ui/core/Toolbar';
import Grid from '@material-ui/core/Grid';


import TodoForm from './../components/todo_form/TodoForm';
import TodoList from './../components/todo_list/TodoList';
import useTodoState from './../hooks/useTodoState';

const TodoApp = () => {
    const initialTodos = JSON.parse(window.localStorage.getItem('todos')) || "[]";
    const {todos, addTodo, removeTodo, toggleTodo, editTodo} = useTodoState(initialTodos);

    useEffect(() => {
        window.localStorage.setItem("todos", JSON.stringify(todos));
    }, [todos]);

    return (
        <Paper 
            style = {{
                padding: 0,
                margin: 0,
                height: "100vh",
                backgroundColor: "#fafafa"
            }}
            elevation={0}>
            <AppBar color='primary'
                    position='static'
                    style={{ height: '64px' }}>
                <Toolbar>
                    <Typography color='inherit'>TODOS WITH HOOKS</Typography>
                </Toolbar>
            </AppBar>
            <Grid container 
                  justify="center"
                  marginTop="1rem">
                <Grid item xs={12} md={8} lg={4}>
                    <TodoForm addTodo={addTodo}/>
                    <TodoList todos={todos} 
                              removeTodo={removeTodo}
                              toggleTodo={toggleTodo}
                              editTodo={editTodo}/>
                </Grid>
            </Grid>
        </Paper>
    );
}


export default TodoApp;