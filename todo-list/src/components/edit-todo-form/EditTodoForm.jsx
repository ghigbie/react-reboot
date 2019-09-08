import React from 'react'
import TextField from '@material-ui/core/TextField';
import useInputState from './'

const EditTodoForm = ( {editTodo, id, task} ) => {
    const [value, handelChange, reset] = useInputState('')
    return (
        <form onSubmit={ (e) => {
            e.preventDefault();
            editTodo(id, value);
            reset();
        }}>
            <TextField value={value}
                       onChange={handelChange}
                       margin="normal"
                       fullWidth/>
        </form>
    );
}

export default EditTodoForm;
