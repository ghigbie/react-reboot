import React, {useState, Fragment} from 'react'
import Paper from '@material-ui/core/Paper';
import Divider from '@material-ui/core/Divider';
import List from '@material-ui/core/List';

import Todo from '../todo/Todo';

const TodoList = ({todos, removeTodo, toggleTodo, editTodo}) => {
    if(todos.length)
        return (
            <Paper>
                <List>
                    {todos.map( (todo, index) => (
                        <Fragment key={todo.id}>
                            <Todo task={todo.task}
                                id={todo.id}
                                completed={todo.completed} 
                                removeTodo={removeTodo}
                                toggleTodo={toggleTodo}
                                editTodo={editTodo} />
                            {index < todos.length -1 && <Divider /> }
                        </Fragment>
                    ))}
                </List>
            </Paper>
        );
    return null;
}

export default TodoList;