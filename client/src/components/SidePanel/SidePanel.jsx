import React from 'react';
import DatePicker from '../DatePicker/DatePicker'

class SidePanel extends React.Component {

    render() {
        const { onDay } = this.props
        return (
            <div className="side-panel">
                <DatePicker onDay={onDay} />
            </div>
        )
    }
}

export default SidePanel;