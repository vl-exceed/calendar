import React from 'react';
import Day from '../Day/Day'
import moment from 'moment'

class DatePicker extends React.Component {
    constructor(props) {
        super(props)

        this.weekdayshort = moment.weekdaysShort()
        this.firstDay = parseInt(moment().startOf("month").format("d"))
        this.daysInMonth = moment().daysInMonth()
        this.arrLength = (42 - this.daysInMonth) - this.firstDay
        this.days = new Array(this.daysInMonth)
            .fill(undefined)
            .map((day, i) => i + 1)
        this.beforeDays = new Array(this.firstDay)
        this.afterDays = new Array(this.arrLength)
        this.fields = [...this.beforeDays, ...this.days, ...this.afterDays]

        this.getDay = this.getDay.bind(this)
    }

    getDay(arg) {
        return (arg == '') ? false : console.log(arg)
    }

    render() {
        const {fields, weekdayshort} = this
        return (
            <div className="date-picker">
                <div className="week-day-names">
                    {weekdayshort.map((day, i)=>
                        <div className="week-day-short">{day}</div>
                    )}
                </div>
                <div className="days-block">
                    {   
                        fields.map((day, i) => 
                        <Day key={i} day={day} getDay={this.getDay} />)
                    }
                </div>
            </div>
        )
    }
}

export default DatePicker;