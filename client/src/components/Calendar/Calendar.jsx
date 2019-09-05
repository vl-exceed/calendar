import React, { Component } from 'react'
import Header from '../Header/Header'
import MainBoard from '../MainBoard/MainBoard'
import uniqid from 'uniqid'

import PropTypes from 'prop-types'

class Calendar extends Component {
    constructor(props) {
        super(props)
        this.state = {
            events : [
                {
                    id: 0,
                    title: 'Dream day',
                    text: 'My friends were born this days',
                    start: new Date(2019, 8, 4, 15, 0),
                    end: new Date(2019, 8, 4, 16, 0),
                    color: 'red'
                },
                {
                    id: 1,
                    title: 'Something else',
                    text: 'bla bla bla',
                    start: new Date(2019, 8, 10, 15, 0),
                    end: new Date(2019, 8, 11, 16, 0),
                    color: 'blue'
                },
                {
                    id: 2,
                    title: 'Super days',
                    text: 'My friends were born this days',
                    start: new Date(2019, 8, 15, 15, 0),
                    end: new Date(2019, 8, 17, 16, 0),
                    color: 'orange'
                },
                {
                    id: 3,
                    title: 'Heheheheh',
                    text: 'My friends were born this days',
                    start: new Date(2019, 8, 15, 15, 0),
                    end: new Date(2019, 8, 17, 16, 0),
                    color: 'green'
                }
            ],
            // loading : false,
            selectedDate : {}
        }

        this.onDay = this.onDay.bind(this)
        this.deleteEv = this.deleteEv.bind(this)
        this.addEv = this.addEv.bind(this)
        // this.updateEv = this.updateEv.bind(this)
    }

    static propTypes = {
        events : PropTypes.array.isRequired
    }

    onDay(data) {
        this.setState({selectedDate: new Date(`${data[2]}`, `${data[1] - 1}`, `${data[0]}`)})
    }

    deleteEv(id) {
        const events = this.state.events.reduce(() => {

        })
        this.setState({events: events})
    }

    addEv(title, text, start, end, color) {
        const events = [
            ...events,
            {
                id: uniqid(),
                title: title,
                text: text,
                start: start,
                end: end,
                color: color
            }
        ]
        this.setState({events: events})
    }

    // updateEv(id, data) {
    //     this.setState({events: events})
    // }

    // componentDidUpdate() {
        // this.setState({ loading: true })
        // fetch('https://localhost/calendar/events')
        //     .then(response => response.json)
        //     .then(json => json.map(event => event)
        //     .then(events => 
        //         this.setState({ events, loading: false })
        //     )
        // ) 
    // }

    render() {
        const { onDay, onDayNew } = this
        return(
            <div className="calendar">
                <Header />
                <MainBoard 
                    onDayNew={onDayNew}
                    onDay={onDay}
                    events={this.state.events} />
                {/* <Footer /> */}
            </div>
        )
    }
}

export default Calendar