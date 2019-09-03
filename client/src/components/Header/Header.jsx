import React from 'react'
import DropDownMenu from '../DropDownMenu/DropDownMenu';
import header from '../App/header-css'

class Header extends React.Component {

    render() {
        return(
            <div style={header.header} className="header">
                <p style={header.label} className="label">YA CALENDAR</p>
                <DropDownMenu styles={header} userName="$USERNAME" />
            </div>
        )
    }
}

export default Header