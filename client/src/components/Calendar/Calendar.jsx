import React, { Component } from 'react'
import PropTypes from 'prop-types'
import auth from '../../auth'

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

    // getEvents() {
        
    // }

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
                <button onClick={() => {
                    auth.logout(() => {
                        this.props.history.push("/");
                    });
                }}
            >Logout</button>
            </div>
        )
    }
}

export default Calendar