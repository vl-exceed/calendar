import React from 'react'
import Auth from '../../auth';
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
        const {userName, name} = this.props
        return(
            <div className="drop-down-menu" >
                <p onClick={this.openHandler}>{userName}</p>
                <MenuItem name="logout" onClick={Auth.logout(() => {console.log('logout pressed')})} status={this.state.isOpen} />
            </div>
        )
    }
}

export default DropDownMenu