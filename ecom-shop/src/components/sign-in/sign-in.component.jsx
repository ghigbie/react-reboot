import React, { Component } from 'react'
import './sign-in.styles.scss';

import FormInput from './../form-input/form-input.component';

class SignIn extends Component {
    constructor(props){
        super(props);
        this.state = {
            email: '',
            password: ''
        }
    }

    handleSubmit = event => {
        event.preventDefault();
        this.setState({
            email: '',
            password: ''
        });
    }

    hadleChange = event => {
        const { value, name } = event.target;
        this.setState({ [name] : value})
    }

    render() {
        return (
            <div className="sign-in">
                <h2>I already have an account</h2>
                <span>Sign in with your email and password</span>

                <form onSubmit={this.handleSubmit}>
                    <FormInput
                        name="email" 
                        type="email" 
                        value={this.state.email} 
                        handleChange={this.handleChange}
                        onChange={this.hadleChange}
                        required/>
                    <label htmlFor="email">Email</label>
                    <FormInput
                        name="password" 
                        type="password" 
                        handleChange={this.hadleChange}
                        value={this.state.password} 
                        onChange={this.handleChange}
                        required/>
                    <label htmlFor="password">Password</label>
                    <input type="submit" value='Submit Form'/>
                </form>
            </div>
        )
    }
}

export default SignIn;