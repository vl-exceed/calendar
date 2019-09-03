import React from 'react';

class DateSelector extends React.Component {

    render() {
        const { target, onPrev, onNext, data, format, styles } = this.props
        return (
            <div style={styles.monthPicker} className={`${target}-picker picker`} data-data={target}>
                <p style={styles.pickerP}>{data.format(`${format}`)}</p>
                <div style={styles.arrows} className="arrows">
                    <i style={styles.left} className="arrow left" onClick={onPrev}></i>
                    <i style={styles.right} className="arrow right" onClick={onNext}></i>
                </div>
            </div>
        )
    }
}

export default DateSelector;