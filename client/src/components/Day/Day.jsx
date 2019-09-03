import React from 'react';
import moment from 'moment';

class Day extends React.Component {
    constructor(props) {
        super(props)

        this.handleClickOnDay = this.handleClickOnDay.bind(this)
    }

    handleClickOnDay(e) {
        const { data } = e.target.dataset

        console.log(data) // с таргета приходит undefined... Какого хера?
                          // FIXED!!!

        const currentDateString = [
            data, 
            this.props.data.format('MM').toString(),
            this.props.data.format('YYYY').toString()
        ]
        this.props.onDay(currentDateString)
    
    }

    render() {
        const { day, styles } = this.props
        const { handleClickOnDay } = this
        // console.log(day) // а тут мы смотрим, что же нам все таки пришло. НЕ UNDEFINED ЛИ????!!!
        return (
            <div 
                style={styles.day}
                className={
                    (this.props.data.format('YYYYMM') + day.toString() === moment().format('YYYYMMD')) ? 
                        'day this-day' : 
                        'day '
                }
                data-data={day}
            >
                <div    
                    style={styles.dayRound}
                    className="day-round" 
                    data-data={day}
                    onClick={handleClickOnDay}>
                        <p 
                            style={styles.dayRoundP}
                            data-data={day}>{day}</p>
                </div>
            </div>
        )
    }
}

export default Day;