import React from 'react'
import DropDownMenu from '../DropDownMenu/DropDownMenu';

class Header extends React.Component {

    render() {
        return(
            <div className="header">
                <p className="label">YA CALENDAR</p>
                <DropDownMenu userName="$USERNAME" />
            </div>
        )
    }
}

export default Header