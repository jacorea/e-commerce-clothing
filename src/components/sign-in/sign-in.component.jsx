import React, { Component } from 'react'
import { auth, signInWithGoogle } from '../../firebase/firebase.utils'


import FormInput from '../form-input/form-input.component'
import CustomButton from '../custom-button/custom-button.component'
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

    handleSubmit = async event => {
        event.preventDefault();

        const {email, password } = this.state 

        try {
          await auth.signInWithEmailAndPassword(email, password)
        } catch(error) {
          console.log(error);
        }
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
            <div className='buttons'>
              <CustomButton type='submit'>SIGN IN</CustomButton>
              <CustomButton onClick={signInWithGoogle} isGoogleSignIn >SIGN IN with Google</CustomButton>
            </div>
        </form>

      </div>
    )
  }
}

export default SignIn
