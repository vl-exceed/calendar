import React from 'react'

import MenuItem from '../MenuItem/MenuItem'

class DropDownMenu extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            isOpen: false
        }

        this.openHandler = this.openHandler.bind(this)

    }

    openHandler() {
        this.setState({ isOpen : !this.state.isOpen })
    }

    render() {
        const {userName /*, name */} = this.props
        return(
            <div className="drop-down-menu">
                <div className="user-block" onClick={this.openHandler}>
                    <p className="user-name">{userName}</p>
                </div>
                <div className="menu-items">
                    <MenuItem name="logout" status={this.state.isOpen} />
                    <MenuItem name="logout" status={this.state.isOpen} />
                    <MenuItem name="logout" status={this.state.isOpen} />
                </div>
            </div>
        )
    }
}

export default DropDownMenu