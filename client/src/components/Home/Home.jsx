import React, { Component } from 'react'
import { routes } from '../../clientConfig'
import './_home.less'

class Home extends Component {

    constructor(props) {
        super(props)

        this.redirect = this.redirect.bind(this)
    }

    redirect(evt) {
        const {path} = evt.target.dataset;
        this.props.history.push(`${path}`)
    }

    render() {
        return(
            <div className="home">
                <button data-path={routes.login} onClick={this.redirect}>Login</button>
                <button data-path={routes.register} onClick={this.redirect}>Register</button>
            </div>
        )
    }
}

export default Home