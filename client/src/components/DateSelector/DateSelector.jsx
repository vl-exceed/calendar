import React from 'react';

class DateSelector extends React.Component {

    render() {
        const { target, onPrev, onNext, data, format } = this.props
        return (
            <div className={`${target}-picker picker`} data-data={target}>
                <p>{data.format(`${format}`)}</p>
                <div className="arrows">
                    <i className="arrow left" onClick={onPrev}></i>
                    <i className="arrow right" onClick={onNext}></i>
                </div>
            </div>
        )
    }
}

export default DateSelector;