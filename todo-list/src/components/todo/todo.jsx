import React from 'react'
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Checkbox from "@material-ui/core/Checkbox";
import IconButton from "@material-ui/core/IconButton";
import DeleteIcon from "@material-ui/icons/Delete";
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";

const todo = ({ task, completed }) => {
    return (
        <ListItem>
            <Checkbox cheked={completed}
                      tabIndex="-1"/>
            <ListItemText>
                {task}
            </ListItemText>
        </ListItem>
    )
}

export default todo;