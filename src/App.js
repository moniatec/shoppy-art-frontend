import React, { useEffect } from 'react';
import { connect } from 'react-redux';
// import { useAuth0 } from "@auth0/auth0-react";
import { useAuth0 } from './react-auth-spa';
import { useSelector, useDispatch } from 'react-redux';
import { BrowserRouter, Route, Switch, Router } from 'react-router-dom';
import Login from './components/Login';
import Logout from './components/Logout';
import Home from './components/Home';
import Item from './components/Item';
import Nav from './components/Nav';
import { AuthRoute, ProtectedRoute } from "./authRoutes";
import { setUser, setToken } from './store/authentication';
import Theme from './Theme';
import { CssBaseline, } from "@material-ui/core";
import { TransitionGroup, CSSTransition } from "react-transition-group";

function App(props) {

  const { user, getTokenSilently } = useAuth0();
  const currentUser = useSelector((state) => state.authentication.currentUser);
  const dispatch = useDispatch();
  useEffect(
    () => {
      if (user) {
        dispatch(setUser(user));
        (async () => {
          const silentToken = await getTokenSilently();
          dispatch(setToken(silentToken));
        })();
      }
    },

    [user]
  );
  return (
    <>
      <CssBaseline />
      <Theme>
        {/* <Router history={history}> */}
        <BrowserRouter>

          <Nav props={props} location={props.location} />
          <Route render={({ location }) => (
            <TransitionGroup>
              <CSSTransition
                key={location.key}
                timeout={300}
                classNames='fade'
              >

                <Switch>
                  <Route exact path="/login" component={Login} />

                  <Route exact path="/logout" component={Logout} />
                  {/* <Route exact path="/nav" component={Nav} /> */}
                  <Route exact path="/home" component={Home} />
                  <Route exact path="/items/:itemId" component={Item} />
                </Switch>

              </CSSTransition>
            </TransitionGroup>
          )} />

        </BrowserRouter>
        {/* </Router> */}
      </Theme>
    </>
  );
}

export default App;
