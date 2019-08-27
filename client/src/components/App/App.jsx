import React from 'react'
import { Route, Switch, Redirect } from 'react-router-dom'

import ProtectedRoute from '../ProtectedRoute/ProtectedRoute'

import Home from '../Home/Home'
import Calendar from '../Calendar/Calendar'
import Login from '../Login/Login'
import Register from '../Register/Register'

class App extends React.Component {

    render() {
        return(
            <div className="app">
                <Switch>
                    <ProtectedRoute exact path="/calendar" component={Calendar} />
                    <Route exact path="/login" component={Login} />
                    <Route exact path="/register" component={Register} />
                    <Route exact path="/home" component={Home} />
                    <Route exact path="/" render={() => <Redirect to="/home" />} />
                    <Route path="*" component={() => "404 NOT FOUND"} />
                </Switch>
            </div>
        )
    }
}

export default App;