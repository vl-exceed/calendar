import React from 'react';

class WeekDays extends React.Component {

    render() {
        const {data} = this.props
        return (
            <div className="week-day-names">
                {data.map((day, i)=>
                    <div className="week-day-short" key={i}>
                        <p>{day}</p>
                    </div>
                )}
            </div>
        )
    }
}

export default WeekDays;