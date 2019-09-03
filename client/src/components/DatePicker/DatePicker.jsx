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

        this.weekdayshort = [
            'Mon',
            'Tue',
            'Wed',
            'Thu',
            'Fri',
            'Sat',
            'Sun'
        ]
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
        const { onDay, styles } = this.props
        const { weekdayshort, before, after } = this
        return (
 
            <div style={styles.datePicker} className="date-picker">

                <div style={styles.dateSelectors} className="date-selectors">
                    <DateSelector 
                        styles={styles}
                        target="month" 
                        data={this.state.momentObj} 
                        onDay={onDay}
                        onPrev={before} 
                        onNext={after}
                        format="MMMM YYYY" />
                </div>

                <WeekDays
                    styles={styles}
                    data={weekdayshort} />

                <DayPicker 
                    styles={styles}
                    data={this.state.momentObj} 
                    onDay={onDay} />
                
            </div>
        )
    }
}

export default DatePicker;