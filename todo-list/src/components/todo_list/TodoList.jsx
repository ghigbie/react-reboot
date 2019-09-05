import React, {useState, Fragment} from 'react'
import Paper from '@material-ui/core/Paper';
import Divider from '@material-ui/core/Divider';
import List from '@material-ui/core/List';

import Todo from './../todo/todo';

const TodoList = (props) => {
    return (
    <Paper>
        <List>
            {props.todos.map( todo => (
                <Fragment key={todo.id}>
                    <Todo task={todo.task}
                          completed={todo.completed} />
                    <Divider />
                </Fragment>
            ))}
        </List>
    </Paper>
    );
}

export default TodoList;