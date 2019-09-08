import React, {useState} from 'react'
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from'@material-ui/core/Toolbar';
import Grid from '@material-ui/core/Grid';
import uuid from 'uuid/v4';

import TodoForm from '../components/todo_form/TodoForm';
import TodoList from '../components/todo_list/TodoList';

const TodoApp = () => {
    const initialTodos = [
        { id: 1, task: 'Walk cat', completed: false },
        { id: 2, task: 'Walk dog', completed: false },
        { id: 3, task: 'Walk fish', completed: false }
    ];
    const [todos, setTodos] = useState(initialTodos);
    const addTodo = newTodoText => {
        setTodos([...todos, { id: uuid(), task: newTodoText, completed: false }]);
    };
    const removeTodo = todoId => {
        const updatedTodos = todos.filter(todo => todo.id !== todoId);
        setTodos(updatedTodos);
    };
    const toggleTodo = todoId => {
        const updatedTodos = todos.map(todo => 
            todo.id === todoId ? {...todo, completed: !todo.completed} : todo);
        setTodos(updatedTodos);
    };
    const editTodo = (todoId, newTask) => {
        const updatedTodos = todos.map(todo => 
            todo.id === todoId ? {...todo, task: newTask } : todo
        );
        setTodos(updatedTodos);
    }
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