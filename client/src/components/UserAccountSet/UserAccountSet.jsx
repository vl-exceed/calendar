import React from 'react'

class UserAccountSet extends React.Component {
    constructor(props) {
        super(props)

        state = {
            isOpen: false
        }

        this.setHandler = this.setHandler.bind(this)
    }

    setHandler() {
        this.setState({ isOpen : !this.state.isOpen })
    }

    render() {
        return(
            <div className="user-account-set" onClick={this.setHandler}>

            </div>
        )
    }
}

export default UserAccountSet