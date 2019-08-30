import React from 'react';

class Day extends React.Component {

    render() {
        const {day} = this.props
        return (
            <div className="day">{day}

            </div>
        )
    }
}

export default Day;