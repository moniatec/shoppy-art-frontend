import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { useAuth0 } from "@auth0/auth0-react";

export const ProtectedRoute = ({ component: Component, path, exact, }) => {
    const { loginWithRedirect, isAuthenticated } = useAuth0();
    return (
        <Route
            path={path}
            exact={exact}
            render={(props) =>
                isAuthenticated ? <Component {...props} /> : <Redirect to="/" />
            }
        />
    );
};

export const AuthRoute = ({ component: Component, path, exact }) => {
    const { loginWithRedirect, isAuthenticated } = useAuth0();
    return (
        <Route
            path={path}
            exact={exact}
            render={(props) =>
                isAuthenticated ? <Redirect to='/home' /> : <Component {...props} />
            }
        />
    );
};