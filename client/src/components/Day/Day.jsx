import React from 'react';
import moment from 'moment';

class Day extends React.Component {
    constructor(props) {
        super(props)

        this.handleClickOnDay = this.handleClickOnDay.bind(this)
    }

    handleClickOnDay(data) {

        const currentDateString = [
            data, 
            parseInt(this.props.data.format('MM')),
            parseInt(this.props.data.format('YYYY'))
        ]
        this.props.onDay(currentDateString)
    
    }

    render() {
        const { day, styles } = this.props
        const { handleClickOnDay } = this
        return (
            <div 
                className={
                    (this.props.data.format('YYYYMM') + day.toString() === moment().format('YYYYMMD')) ? 
                        'day this-day' : 
                        'day '
                }
                data-data={day}
            >
                <div className="day-round" onClick={() => handleClickOnDay(day)}>
                    <p style={styles.dayRoundP}>{day}</p>
                </div>
            </div>
        )
    }
}

export default Day;