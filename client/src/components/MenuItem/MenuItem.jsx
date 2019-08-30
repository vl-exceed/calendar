import React from 'react'
import '../App/app.css'
import Auth from '../../auth';

class MenuItem extends React.Component{
    constructor(props) {
        super(props)

        this.click = this.click.bind(this)
    }

    click() {
        Auth.logout(() => {console.log('logout pressed')})
    }

    render() {
        const {name, status} = this.props
        return(
            <div 
                className={`menu-item ${(status) ? 'visible' : 'invisible'}`} 
                onClick={this.click}
                >{name}
            </div>
        )
    }
}

export default MenuItem