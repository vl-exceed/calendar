import React from 'react';
// import moment from 'moment'

class DayPicker extends React.Component {
    constructor(props) {
        super(props)

        this.computeData = this.computeData.bind(this)
    }

    computeData() {
        let firstDay = parseInt(this.props.data.startOf("month").format("e"))
        if (firstDay === 0) {
            firstDay = 6
        } else {
            firstDay -= 1
        }
        const daysInMonth = this.props.data.daysInMonth()
        const afterDaysCount = (42 - daysInMonth) - firstDay
        for (let i = 0; i < afterDaysCount; i++) {

        }
        const days = new Array(daysInMonth)
            .fill('')
            .map((day, i) => i + 1)
        const beforeDays = new Array(firstDay)
            .fill('')
        const afterDays = new Array(afterDaysCount)
            .fill('')

        return [...beforeDays, ...days, ...afterDays]
    }

    render() {
        const { data, onDay, styles, Component, events } = this.props
        const { computeData } = this
        


        return (
            <div style={styles.dayPicker} className="day-picker">
                {
                    computeData().map((day, i) => 
                        <Component 
                            styles={styles}
                            key={i} 
                            onDay={onDay}
                            data={data}
                            events={events}
                            day={day} />
                    ) 
                }
            </div>
        )
        
    }
}

export default DayPicker;