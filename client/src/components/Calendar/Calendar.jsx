import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Header from '../Header/Header'
import MainBoard from '../MainBoard/MainBoard'

// import SidePanel from '../SidePanel/SidePanel';
// import MainPanel from '../MainPanel/MainPanel';


class Calendar extends Component {
    constructor(props) {
        super(props)
        this.state = {
            events : [],
            loading : false
        }
    }

    static propTypes = {
        events : PropTypes.array.isRequired
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
        return(
            <div className="calendar">
                <Header />
                <MainBoard />
                {/* <Footer /> */}
            </div>
        )
    }
}

export default Calendar