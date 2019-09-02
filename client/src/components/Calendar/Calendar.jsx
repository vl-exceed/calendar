import React, { Component } from 'react'
import Header from '../Header/Header'
import MainBoard from '../MainBoard/MainBoard'

import PropTypes from 'prop-types'
// import SidePanel from '../SidePanel/SidePanel';
// import MainPanel from '../MainPanel/MainPanel';


class Calendar extends Component {
    constructor(props) {
        super(props)
        this.state = {
            events : [],
            loading : false,
            currentDate : new Date()
        }

        this.onDay = this.onDay.bind(this)
    }

    static propTypes = {
        events : PropTypes.array.isRequired
    }

    onDay(data) {
        this.setState({selectedDate: new Date(`${data[2]}`, `${data[1] - 1}`, `${data[0]}`)})
    }

    componentDidMount() {
        this.setState({ loading: true })
        fetch('https://localhost/calendar/events')
            .then(response => response.json)
            .then(json => json.map(event => event)
            .then(events => 
                this.setState({ events, loading: false })
            )
        ) 
    }

    render() {
        const { onDay } = this
        return(
            <div className="calendar">
                <Header />
                <MainBoard onDay={onDay} events={this.state.events}/>
                {/* <Footer /> */}
            </div>
        )
    }
}

export default Calendar