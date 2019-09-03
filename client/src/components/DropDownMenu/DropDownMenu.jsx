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
        const {userName, styles} = this.props
        return(
            <div style={styles.dropDownMenu} className="drop-down-menu">
                <div style={styles.userBlock} className="user-block" onClick={this.openHandler}>
                    <p style={styles.userName} className="user-name">{userName}</p>
                </div>
                <div stle={styles.menuItems} className="menu-items">
                    <MenuItem name="logout" styles={styles} status={this.state.isOpen} />
                </div>
            </div>
        )
    }
}

export default DropDownMenu