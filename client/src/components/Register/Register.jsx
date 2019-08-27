import React, { Component } from 'react'

class Register extends Component {
    constructor(props) {
        super(props)

        this.submit = this.submit.bind(this)
    }

    submit(e) {
        e.preventDefault()
        // api to express to create new user
        // {_email.value, _login.value, _password.value}
    }

    render() {
        return(
            <div className="register">
                <form>
                    <input ref="_email" type="text" placeholder="email" required/>
                    <input ref="_login" type="text" placeholder="login" required/>
                    <input ref="_password" type="password" placeholder="password" required/>
                    <button type="submit" onSubmit={(e) => {this.submit(e)}}>Register</button>
                </form>
                
            </div>
        )
    }
}

export default Register