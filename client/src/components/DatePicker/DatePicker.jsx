import React from 'react';
import DateSelector from '../DateSelector/DateSelector'
import DayPicker from '../DayPicker/DayPicker'
import WeekDays from '../WeekDays/WeekDays'
import moment from 'moment'

class DatePicker extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            momentObj: moment() ,
            selectedDate: new Date()
        }

        this.weekdayshort = moment.weekdaysShort()
        this.before = this.before.bind(this)
        this.after = this.after.bind(this)
    }

    before(e) {
        const {data} = e.target.parentElement.parentElement.dataset
        switch(data) {
            case 'month': {
                this.setState({momentObj : this.state.momentObj.subtract(1, 'month')})
                break
            }
            case 'year': {
                this.setState({momentObj : this.state.momentObj.subtract(12, 'month')})
                break
            }
            default:
                break
        } 
    }

    after(e) {
        const {data} = e.target.parentElement.parentElement.dataset
        switch(data) {
            case 'month': {
                this.setState({momentObj : this.state.momentObj.add(1, 'month')})
                break
            }
            case 'year': {
                this.setState({momentObj : this.state.momentObj.add(12, 'month')})
                break
            }
            default:
                break
        }
    }

    render() {
        const { onDay } = this.props
        const { weekdayshort, before, after } = this
        return (
 
            <div className="date-picker">

                <div className="date-selectors">
                    <DateSelector 
                        target="month" 
                        data={this.state.momentObj} 
                        onDay={onDay}
                        onPrev={before} 
                        onNext={after}
                        format="MMMM YYYY" />
                </div>

                <WeekDays data={weekdayshort} />

                <DayPicker 
                    data={this.state.momentObj} 
                    onDay={onDay} />
                
            </div>
        )
    }
}

export default DatePicker;