import React from 'react'
import moment from 'moment'

class DayModal extends React.Component {
  
    render() {
      const { state, styles, close, data, day, events, deleteEv, addEv, updateEv } = this.props
      // console.log(events)
      return (
        <div>
          <div style={(state) ? styles.modal.open : styles.modal.close} className="modal">
            <div style={styles.modalHead}>
              <p>{day.toString() + '/' + moment(data).format('MM/YYYY')}</p>
              <button style={styles.but} onClick={close}>close</button>
            </div>
            <div style={styles.todoha.todosConstainer}>
              {(events.length !== 0) ? 
                events.map((event, i)=>
                  <div style={styles.todoha} key={i}>
                    <div style={styles.todoha.info}>
                      <p>{event.title}</p>
                      <p>{moment(event.start).format('HH:mm DD/MM/YYYY')} -- {moment(event.end).format('HH:mm DD/MM/YYYY')}</p>

                    </div>
                    <div>
                      <button style={styles.todoha.but} onClick={() => {}}>edit</button>
                      <button style={styles.todoha.but} onClick={() => deleteEv(event.id)}>x</button>
                    </div>                    
                  </div>
                ) :
                <p>There are no events today</p>
              }
              <button style={styles.todoha.plus} onClick={()=>{}}>+</button>
            </div>
          </div>
        </div>
      )
    }
  }
  
export default DayModal