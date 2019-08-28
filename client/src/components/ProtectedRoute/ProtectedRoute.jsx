import React from 'react'
import { Route, Redirect } from 'react-router-dom';
import Auth from "../../auth";
import { routes } from '../../clientConfig'

// class ProtectedRoute extends React.Component {
    
// }

const ProtectedRoute = ({ component: Component, ...rest }) => {
    return (
        <Route
            {...rest}
            render = {props => {
                if (Auth.isAuthenticated()) {
                    return <Component {...props} />;
                } else {
                    return (
                        <Redirect
                            to = {
                                {
                                    pathname: `${routes.home}`,
                                    state: {
                                        from: props.location
                                    }
                                }
                            }
                        />
                    );
                }
            }}
        />
    );
};

export default ProtectedRoute