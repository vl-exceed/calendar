import React, { Component } from 'react'
import auth from '../../auth'

class Login extends Component {

    render() {
        return(
            <div className="login">
                <input className="login" type="text" placeholder="login" required/>
                <input className="password" type="text" placeholder="password" required/>
                <button onClick={() => {
                    auth.login(() => {
                        this.props.history.push("/calendar");
                    });
                }}
                >Login</button>
            </div>
        )
    }
}

export default Login