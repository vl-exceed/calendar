import React from 'react';
import SidePanel from '../SidePanel/SidePanel';
import MainPanel from '../MainPanel/MainPanel';

import mainPanel from '../App/mainPanel-css'
import sidePanel from '../App/sidePanel-css'
import mainBoard from '../App/mainBoard-css'

class MainBoard extends React.Component {

    render() {
        const {onDay, events, deleteEv, addEv, updateEv} = this.props
        return (
            <div style={mainBoard.mainBoard} className="main-board">
                <SidePanel onDay={onDay} styles={sidePanel} />
                <MainPanel 
                    deleteEv={deleteEv}
                    addEv={addEv}
                    updateEv={updateEv}
                    onDay={onDay} 
                    styles={mainPanel} 
                    events={events}/>
            </div>
        )
    }
}

export default MainBoard;