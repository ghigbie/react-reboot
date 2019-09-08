import React from 'react'
import TextField from '@material-ui/core/TextField';
import useInputState from './'

const EditTodoForm = () => {
    const [value, handelChange, reset] = useInputState('')
    return (
        <TextField value={value}
                   onChange={handelChange}
                   margin="normal"
                   fullWidth/>
    );
}

export default EditTodoForm;
