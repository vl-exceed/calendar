import React from 'react';
import SidePanel from '../SidePanel/SidePanel';
import MainPanel from '../MainPanel/MainPanel';

class MainBoard extends React.Component {

    render() {
        //const {VARIABLE} = this.props
        return (
            <div className="main-board">
                <SidePanel />
                <MainPanel />
            </div>
        )
    }
}

export default MainBoard;