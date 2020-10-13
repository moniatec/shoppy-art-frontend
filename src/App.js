import React from 'react';
import { connect } from 'react-redux';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Login from './components/Login';
import Logout from './components/Logout';
import Home from './components/Home';

function App() {
  return (
    <>
      <BrowserRouter>
        <Switch>
          <Route exact path="/login" component={Login} />
          <Route exact path="/logout" component={Logout} />
          <Route exact path="/home" component={Home} />
        </Switch>
      </BrowserRouter>
    </>
  );
}

export default App;
