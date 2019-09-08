import React from 'react'
import useToggleState from './../../hooks/useToggleState';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Checkbox from "@material-ui/core/Checkbox";
import IconButton from "@material-ui/core/IconButton";
import DeleteIcon from "@material-ui/icons/Delete";
import EditIcon from "@material-ui/icons/Edit";
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";

import EditTodoForm from './../edit-todo-form/EditTodoForm';

const Todo = ({ task, id, completed, removeTodo, toggleTodo, editTodo }) => {
    const [isEditing, toggleIsEditing] = useToggleState(false);
    return (
        <ListItem>
            { isEditing ? (<EditTodoForm editTodo={editTodo} 
                                         id={identifier} 
                                         task={task}/>): 
            (<>
            <Checkbox cheked={completed}
                      onClick={() => toggleTodo(id)}
                      tabIndex="-1"/>
            <ListItemText style={{ textDecoration: completed ? "line-through" : "none"}}>
                {task}
            </ListItemText>
            <ListItemSecondaryAction>
                <IconButton aria-label="Delete">
                    <DeleteIcon onClick={() => removeTodo(id)} />
                </IconButton>
                <IconButton aria-label="Edit">
                    <EditIcon onClick={toggleIsEditing}/>
                </IconButton>
            </ListItemSecondaryAction>
            </>)
            }
        </ListItem>
    )
}

export default Todo;