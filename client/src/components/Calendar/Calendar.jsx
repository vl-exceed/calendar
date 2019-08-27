import React, { Component } from 'react'
import auth from '../../auth'

class Calendar extends Component {
    constructor(props) {
        super(props)
        this.state = {
            events : []
        }
    }

    getEvents() {
        // promise with api to get all events of user
    }

    componentDidMount() {
        const events = this.getEvents()
        if (events.length !== 0) {
           this.setState({ events }) 
        }
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