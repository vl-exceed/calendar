import React from 'react';
import moment from 'moment'
import Todo from '../Todo/Todo'
import DayModal from '../DayModal/DayModal'

class DayNew extends React.Component {

    constructor(props) {
        super(props)

        this.state = {
            isOpen: false
        }
        this.eventArray = this.eventArray.bind(this)
        this.handleModal = this.handleModal.bind(this)
        this.closeModal = this.closeModal.bind(this)
        
    }

    eventArray() {
        const now = moment(this.props.data).format('YYYYMM') + this.props.day

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

    handleModal() {
        if (!this.props.modalIsOpen) {
            this.props.modal()
            this.setState({isOpen : !this.state.isOpen})
        }
    }

    closeModal() {
        this.props.modal()
        this.setState({isOpen : false})
    }

    render() {
        const { day, styles, deleteEv,addEv,updateEv } = this.props
        const { eventArray, handleModal, closeModal, data } = this
        return (
            <div 
                style={styles.day} 
                className="day-new" 
                onClick={(day) ? handleModal : () => {}}>
                <div style={styles.dayNumberBlock}  className="day-number-block">
                <DayModal 
                    deleteEv={deleteEv}
                    addEv={addEv}
                    updateEv={updateEv}
                    events={eventArray()} 
                    close={closeModal} 
                    data={data} day={day} 
                    state={this.state.isOpen} 
                    open={handleModal} 
                    styles={styles}/>

                    <p style={styles.dayNumber} className="day-number">{day}</p>
                    <div className="todos">
                        {   
                            eventArray().map((event, i) => 
                                <div key={i}>
                                    <Todo event={event} styles={styles} />
                                </div>
                            )
                        }
                    </div>
                </div>
            </div>
        )
    }
}

export default DayNew;