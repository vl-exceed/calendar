import React from 'react';
import SidePanel from '../SidePanel/SidePanel';
import MainPanel from '../MainPanel/MainPanel';

class MainBoard extends React.Component {

    render() {
        const {onDay, events} = this.props
        return (
            <div className="main-board">
                <SidePanel onDay={onDay} />
                <MainPanel events={events}/>
            </div>
        )
    }
}

export default MainBoard;