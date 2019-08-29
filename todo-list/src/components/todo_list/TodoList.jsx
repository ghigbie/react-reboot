import React from 'react'
import Paper from '@material-ui/core/Paper';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText  from '@material-ui/core/ListItemText';

const TodoList = (props) => {
    return (
    <Paper>
        <List>
            {props.todos.map( todo => (
                <ListItem>
                    <ListItemText>
                        {todo.task}
                    </ListItemText>
                </ListItem>
            ))}
        </List>
    </Paper>
    );
}

export default TodoList;