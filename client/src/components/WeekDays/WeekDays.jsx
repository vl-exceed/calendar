import React from 'react';

class WeekDays extends React.Component {

    render() {
        const {data, styles} = this.props
        return (
            <div style={styles.weekDayNames} className="week-day-names">
                {data.map((day, i)=>
                    <div style={styles.weekDayShort} className="week-day-short" key={i}>
                        <p style={styles.weekDayShortP}>{day}</p>
                    </div>
                )}
            </div>
        )
    }
}

export default WeekDays;