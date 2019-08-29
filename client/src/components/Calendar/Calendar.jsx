import React, { Component } from 'react'
import PropTypes from 'prop-types'
// import Auth from '../../auth'
// import Header from './Header/Header'
import DropDownMenu from '../DropDownMenu/DropDownMenu';
import SidePanel from '../SidePanel/SidePanel';
import MainBoard from '../MainBoard/MainBoard';

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
                {/* <Header /> maybe next time :( */}
                <div className="header">
                    <p className="label">YA CALENDAR</p>
                    <DropDownMenu userName="$USERNAME" />
                </div>
                <MainBoard />
                <SidePanel />
                {/* <Footer /> */}
            </div>
        )
    }
}

export default Calendar