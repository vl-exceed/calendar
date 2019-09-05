import React from 'react';
import DatePicker from '../DatePicker/DatePicker';
import DayNew from '../DayNew/DayNew'

import bigDatePicker from '../App/bigDatePicker-css'

class MainPanel extends React.Component {

    render() {
        const {events, onDay, styles} = this.props
        return (
            <div 
                style={styles.panel} 
                className="main-panel">
                <DatePicker 
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