import React from 'react'

class App extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            events : []
        }
    }

    UNSAFE_componentWillMount() {

    }

    render() {
        return(
            <div className="App">

            </div>
        )
    }
}

export default App;