import React, {useState, Fragment} from 'react'
import Paper from '@material-ui/core/Paper';
import Divider from '@material-ui/core/Divider';
import List from '@material-ui/core/List';

import Todo from '../todo/Todo';

const TodoList = ({todos, removeTodo}) => {
    return (
    <Paper>
        <List>
            {todos.map( todo => (
                <Fragment key={todo.id}>
                    <Todo task={todo.task}
                          id={todo.id}
                          completed={todo.completed} 
                          removeTodo={removeTodo} />
                    <Divider />
                </Fragment>
            ))}
        </List>
    </Paper>
    );
}

export default TodoList;