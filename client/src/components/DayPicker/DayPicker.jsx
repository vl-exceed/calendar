import React from 'react';
// import moment from 'moment'

class DayPicker extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            modalIsOpen: false
        }

        this.computeData = this.computeData.bind(this)
        this.modal = this.modal.bind(this)
    }

    modal() {
        this.setState({modalIsOpen: !this.state.modalIsOpen})
    }

    computeData() {
        let firstDay = parseInt(this.props.data.startOf("month").format("e"))
        if (firstDay === 0) {
            firstDay = 6
        } else {
            firstDay -= 1
        }
        const daysInMonth = this.props.data.daysInMonth()
        const afterDaysCount = (42 - daysInMonth) - firstDay
        for (let i = 0; i < afterDaysCount; i++) {

        }
        const days = new Array(daysInMonth)
            .fill('')
            .map((day, i) => i + 1)
        const beforeDays = new Array(firstDay)
            .fill('')
        const afterDays = new Array(afterDaysCount)
            .fill('')

        return [...beforeDays, ...days, ...afterDays]
    }

    render() {
        const { data, onDay, styles, Component, events, deleteEv, updateEv, addEv } = this.props
        const { computeData, modal } = this

        return (
            <div style={styles.dayPicker} className="day-picker">
                {
                    computeData().map((day, i) => 
                        <Component 
                            deleteEv={deleteEv}
                            addEv={addEv}
                            updateEv={updateEv}
                            modalIsOpen={this.state.modalIsOpen}
                            modal={modal} 
                            styles={styles}
                            key={i} 
                            onDay={onDay}
                            data={data}
                            events={events}
                            day={day} />
                    ) 
                }
            </div>
        )
        
    }
}

export default DayPicker;