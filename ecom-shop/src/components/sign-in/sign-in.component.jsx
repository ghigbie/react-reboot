import React, { Component } from 'react'

import './sign-in.styles.scss';

class SignIn extends Component {
    constructor(props){
        super(props);
        this.state = {
            email: '',
            password: ''
        }
    }

    render() {
        return (
            <div className="sign-in">
                <h2>I already have an account</h2>
                <span>Sign in with your email and password</span>

                <form>
                    <input name="email" type="email" value={this.state.email} required/>
                    <label htmlFor="email">Email</label>
                    <input name="password" type="password" value={this.state.password} required/>
                    <label htmlFor="password">Password</label>
                    <input type="submit" value='Submit Form'/>
                </form>
            </div>
        )
    }
}

export default SignIn;