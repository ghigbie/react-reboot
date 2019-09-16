import React from 'react'

import './form-input.styles.scss';

const FormInput = (props, {handleChange, label, ...otherProps}) => (
    <div className="form-input">
        <input classname='form-input' onChange={handleChange} {...otherProps}/>
        {
            label ? 
            (<label className={`${props.value.length ? 'shrink' : ''} form-input-label`}>
                {label}
            </label>)
            : null
        }
    </div>
);

export default FormInput;
