import React from 'react';
import moment from 'moment'
import Todo from '../Todo/Todo'

class DayNew extends React.Component {

    constructor(props) {
        super(props)

        this.handleClickOnDay = this.handleClickOnDay.bind(this)
        this.eventArray = this.eventArray.bind(this)
        
    }

    handleClickOnDay(day) {
        // console.log(day)
    }

    eventArray() {
        const now = moment().format('YYYYMM') + this.props.day

        return this.props.events.reduce((mas, event) => {
            if ((moment(event.start).format('YYYYMMD') === now) && (moment(event.end).format('YYYYMMD') === now)) {
                event.place = 'single'
                mas.push(event);
            }
            if ((moment(event.start).format('YYYYMMD') === now) && (moment(event.end).format('YYYYMMD') > now)) {
                event.place = 'left'
                mas.push(event);
            }
            if ((moment(event.start).format('YYYYMMD') < now) && (moment(event.end).format('YYYYMMD') === now)) {
                event.place = 'right'
                mas.push(event);
            }
            if ((moment(event.start).format('YYYYMMD') < now) && (moment(event.end).format('YYYYMMD') > now)) {
                event.place = 'middle'
                mas.push(event);
            }
            return mas;
          }, []);
    }

    render() {
        const { day, styles } = this.props
        const { handleClickOnDay, eventArray } = this
        return (
            <div 
                style={styles.day} 
                className="day-new" 
                onClick={() => handleClickOnDay(day)}>
                <div style={styles.dayNumberBlock}  className="day-number-block">
                    <p style={styles.dayNumber} className="day-number">{day}</p>
                    <div className="todos">
                        {   
                            eventArray().map((event, i) =>
                                <Todo event={event} styles={styles} key={i} />
                            )
                        }
                    </div>
                </div>
            </div>
        )
    }
}

export default DayNew;