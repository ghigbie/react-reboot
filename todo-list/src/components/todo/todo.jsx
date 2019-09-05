import React from 'react'
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Checkbox from "@material-ui/core/Checkbox";
import IconButton from "@material-ui/core/IconButton";
import DeleteIcon from "@material-ui/icons/Delete";
import EditIcon from "@material-ui/icons/Edit";
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";

const todo = ({ task, completed }) => {
    return (
        <ListItem>
            <Checkbox cheked={completed}
                      tabIndex="-1"/>
            <ListItemText>
                {task}
            </ListItemText>
            <ListItemSecondaryAction aria-label="Delete">
                <IconButton>
                    <DeleteIcon />
                </IconButton>
            </ListItemSecondaryAction>
            <ListItemSecondaryAction aria-label="Edit">
                <IconButton>
                    <EditIcon />
                </IconButton>
            </ListItemSecondaryAction>
        </ListItem>
    )
}

export default todo;