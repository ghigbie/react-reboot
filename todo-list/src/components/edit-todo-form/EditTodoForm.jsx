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
            }}
            style={{
                margLeft: '1rem',
                width: '50%'
            }}>
            <TextField value={value}
                       onChange={handelChange}
                       margin="normal"
                       autoFocus/>
        </form>
    );
}

export default EditTodoForm;
