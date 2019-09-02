import React from 'react';
import moment from 'moment';

class Day extends React.Component {
    constructor(props) {
        super(props)

        this.handleClickOnDay = this.handleClickOnDay.bind(this)
    }

    handleClickOnDay(e) {
        const { data } = e.target.dataset
        // console.log(data) // с таргета приходит undefined... Какого хера?
        if (data !== 'undefined') {
            const currentDateString = [
                data, 
                this.props.data.format('MM').toString(),
                this.props.data.format('YYYY').toString()
            ]
            this.props.onDay(currentDateString)
        }
    }

    render() {
        const { day } = this.props
        const { handleClickOnDay } = this
        // console.log(day) // а тут мы смотрим, что же нам все таки пришло. НЕ UNDEFINED ЛИ????!!!
        return (
            <div 
                className={
                    (this.props.data.format('YYYYMM') + day.toString() === moment().format('YYYYMMD')) ? 
                        'day this-day' : 
                        'day '
                }
                onClick={handleClickOnDay}
                data-data={day}
            >
                <div className="day-round"><p>{day}</p></div>
            </div>
        )
    }
}

export default Day;