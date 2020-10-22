import React from 'react';
import { connect } from 'react-redux';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Login from './components/Login';
import Logout from './components/Logout';
import Home from './components/Home';
import Item from './components/Item';
import Nav from './components/Nav';

import Theme from './Theme';
import { CssBaseline, } from "@material-ui/core";
import { TransitionGroup, CSSTransition } from "react-transition-group";

function App(props) {
  return (
    <>
      <CssBaseline />
      <Theme>
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
                  <Route exact path="/items/:itemId"
                    component={Item}
                  // token={props.token}
                  // currentUserId={props.currentUserId}
                  />
                </Switch>
              </CSSTransition>
            </TransitionGroup>
          )} />

        </BrowserRouter>
      </Theme>
    </>
  );
}

export default App;
