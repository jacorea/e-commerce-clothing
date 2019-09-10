import React, { Component } from 'react'

import FormInput from '../form-input/form-input.component'
import './sign-in.styles.scss'

export class SignIn extends Component {
    constructor() {
        super()
        this.state= {
            email: "",
            password: ""
        }
    }


    handleChange= (e) => {
        const { value, name } = e.target

        this.setState({ [name]: value })
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.setState({ email: '', password: '' })
    }

  render() {
      const {email, password} = this.state
    return (
      <div className='sign-in'>
        <h2>I already have an account</h2>
        <span>Sign in with your email and password</span>

        <form onSubmit= {this.handleSubmit}>
            <FormInput 
                name="email" 
                type="email" 
                value={email}
                handleChange={this.handleChange} 
                label="email"
                required 
            />
            <FormInput 
                name="password" 
                type="password" 
                value={password} 
                handleChange={this.handleChange} 
                label="password"
                required 
            />
            <input type='submit' value="submit Form" />
        </form>

      </div>
    )
  }
}

export default SignIn
