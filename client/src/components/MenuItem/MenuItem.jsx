import React from 'react'
import '../App/app.css'

class MenuItem extends React.Component{
    render() {
        const {name, status, onClick=()=>{}} = this.props
        return(
            <div className={`menu-item ${(status) ? 'visible' : 'invisible'}`} onClick={onClick}>{name}</div>
        )
    }
}

export default MenuItem