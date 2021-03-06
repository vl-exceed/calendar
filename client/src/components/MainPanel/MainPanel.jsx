import React from 'react';
import DatePicker from '../DatePicker/DatePicker';
import DayNew from '../DayNew/DayNew'

import bigDatePicker from '../App/bigDatePicker-css'

class MainPanel extends React.Component {

    render() {
        const { events, onDay, styles, deleteEv, updateEv, addEv } = this.props
        return (
            <div 
                style={styles.panel} 
                className="main-panel">
                <DatePicker 
                    deleteEv={deleteEv}
                    addEv={addEv}
                    updateEv={updateEv}
                    styles={bigDatePicker}
                    onDay={onDay} 
                    events={events}
                    Component={DayNew} 
                    />
            </div>
        )
    }
}

export default MainPanel;