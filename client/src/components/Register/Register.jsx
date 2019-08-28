import React, { Component } from 'react'
import Auth from '../../auth'
import { routes } from '../../clientConfig'

class Register extends Component {
    constructor(props) {
        super(props)

        this.submit = this.submit.bind(this)
    }

    submit(e) {
        const {_email, _login, _password} = this.refs
        e.preventDefault()
        Auth.register(_email.value, _login.value, _password.value)
            .then((data) => {
                console.log(data)
                this.props.history.push(`${routes.login}`)
            }) 
            .catch(error => {console.log(error)})
    }

    render() {
        return(
            <div className="register">
                <form onSubmit={this.submit}>
                    <input ref="_email" type="text" placeholder="email" required/>
                    <input ref="_login" type="text" placeholder="login" required/>
                    <input ref="_password" type="password" placeholder="password" required/>
                    <button>Register</button>
                </form>
            </div>
        )
    }
}

export default Register