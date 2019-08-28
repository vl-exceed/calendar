import React from 'react'
import UserAccountSet from '../UserAccountSet'

class Header extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return(
            <div className="header">
                <p classNane="label">Calendar</p>
                <UserAccountSet />
            </div>
        )
    }
}

export default Header