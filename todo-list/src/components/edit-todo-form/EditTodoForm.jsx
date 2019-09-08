import React from 'react'
import TextField from '@material-ui/core/TextField';
import useInputState from './../../hooks/useInputState';

const EditTodoForm = ( {editTodo, id, task, toggleEditForm} ) => {
    const [value, handelChange, reset] = useInputState(task)
    return (
        <form onSubmit={ (e) => {
            e.preventDefault();
            editTodo(id, value);
            reset();
            toggleEditForm();
        }}>
            <TextField value={value}
                       onChange={handelChange}
                       margin="normal"
                       fullWidth/>
        </form>
    );
}

export default EditTodoForm;
