import React, { Component } from 'react'

class Home extends Component {

    render() {
        return(
            <div className="home">
                <button onClick={() => {
                        this.props.history.push("/login");
                    }  
                }
                >Login</button>
                <button onClick={() => {
                        this.props.history.push("/register");
                    }  
                }
                >Register</button>
            </div>
        )
    }
}

export default Home