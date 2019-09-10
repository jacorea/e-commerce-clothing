import React, { Component } from 'react'

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

        this.setState({[name]: value })
    }

    handleSubmit = (e) => {
        e.preventDefault();

        this.setState({email: '', password: '' })
    }

  render() {
      const {email, password} = this.state
    return (
      <div className='sign-in'>
        <h2>I already have an account</h2>
        <span>Sign in with your email and password</span>

        <form onSubmit= {this.handleSubmit}>
            <input 
                className="email" 
                type="email" 
                value={email} 
                onChange={this.handleChange} 
                required 
            />
            <label>Email</label>
            <input 
                className="password" 
                type="password" value={password} 
                onChange={this.handleChange} 
                required 
            />
            <label>Password</label>

            <input type='submit' value="submit Form" />
        </form>

      </div>
    )
  }
}

export default SignIn
