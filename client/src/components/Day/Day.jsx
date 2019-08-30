import React from 'react';

class Day extends React.Component {
    constructor(props) {
        super(props)

        this.getDay = this.getDay.bind(this)
    }

    getDay(evt) {
        const {day} = evt.target.dataset
        this.props.getDay(day)
    }

    render() {
        const {day} = this.props
        return (
            <div className="day" data-day={(day === undefined) ? '' : day} onClick={this.getDay}>
                {(day === undefined) ? '' : day}
            </div>
        )
    }
}

export default Day;