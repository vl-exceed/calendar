import React from 'react';
import Day from '../Day/Day'

class DayPicker extends React.Component {
    constructor(props) {
        super(props)

        this.computeData = this.computeData.bind(this)
    }

    computeData() {
        let firstDay = parseInt(this.props.data.startOf("month").format("e"))
        if (firstDay === 0) {
            firstDay = 7
        }
        const daysInMonth = this.props.data.daysInMonth()
        const afterDaysCount = (42 - daysInMonth) - firstDay
        for (let i = 0; i < afterDaysCount; i++) {

        }
        const days = new Array(daysInMonth)
            .fill(undefined)
            .map((day, i) => i + 1)
        const beforeDays = new Array(firstDay)
            .fill('')
        const afterDays = new Array(afterDaysCount)
            .fill('')

        return [...beforeDays, ...days, ...afterDays]
    }

    render() {
        const { data, onDay } = this.props
        const { computeData } = this
        return (
            <div className="day-picker">
                {
                    computeData().map((day, i) => 
                        <Day 
                            key={i} 
                            onDay={onDay}
                            data={data}
                            day={day} />
                    ) 
                }
            </div>
        )
    }
}

export default DayPicker;