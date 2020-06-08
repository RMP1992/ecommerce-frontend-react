import React, {Component} from 'react';
import {Route, Redirect} from 'react-router-dom';
import {isAuthenticated} from './index';

const PrivateRoute = ({component: Component, ...rest}) => (
    <Route {...rest} render={props=> isAuthenticated() ? (
        <Component {...props} />
    ) : (
        <Redirect to={{
            pathname: '/signin',
            state: { from: props.location}
        }} />
    )} />
)
//this component can be reused to restrict user access, by simply replacinf the <Route/> in the routes files
export default PrivateRoute;