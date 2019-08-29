import React, { Component } from 'react'
import Auth from '../../auth'
// import { routes } from '../../clientConfig'

class Login extends Component {
    constructor(props) {
        super(props)

        this.submit = this.submit.bind(this)
    }

    submit(e) {
        const { _login, _password} = this.refs
        e.preventDefault()
        // Auth.login(() => {this.props.history.push(`${routes.calendar}`)})
        Auth.login(_login.value, _password.value)
            .then(data => {
                console.log(data)
                // this.props.history.push(`${routes.calendar}`)
            })  
            .catch(error => console.log(error))
    }

    render() {
        return(
            <div className="login">
                <form onSubmit={this.submit}>
                    <input autoFocus ref="_login" type="text" placeholder="login" required/>
                    <input ref="_password" type="password" placeholder="password" required/>
                    <button>Login</button>
                </form>
            </div>
        )
    }
}

export default Login