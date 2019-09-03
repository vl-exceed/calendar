import React from 'react';
import DatePicker from '../DatePicker/DatePicker'

import smallDatePicker from '../App/smallDatePicker-css'

class SidePanel extends React.Component {

    render() {
        const { onDay, styles } = this.props
        return (
            <div 
                style={styles.panel} 
                className="side-panel">
                <DatePicker 
                    styles={smallDatePicker}
                    onDay={onDay} />
            </div>
        )
    }
}

export default SidePanel;