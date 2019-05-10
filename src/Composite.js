import React, { Component } from 'react';
import {
  HashRouter as Router,
  Route,
  Switch,
  Redirect,
  withRouter,
} from 'react-router-dom';


import Header from './components/layout/Header';
import AuthButton from './components/layout/AuthButton';

import Stopwatch from './components/Stopwatch';
import Countdown from './components/Countdown';
import Clock from './components/Clock';

import LoginPage from './components/pages/LoginPage';
import Home from './components/pages/Home';
import About from './components/pages/About';
import NotFound from './components/pages/NotFound';

export default class Composite extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isAuthenticated: false,
      isLoginShown: false
    }

    this.setAuthentication = this.setAuthentication.bind(this);
    this.setLoginShown = this.setLoginShown.bind(this);
  }

  setAuthentication(isAuthenticated) {
    this.setState({ isAuthenticated });
  }

  setLoginShown(isLoginShown) {
    this.setState({ isLoginShown });
  }

  render() {


    const WithRouterButton = withRouter(AuthButton), { isLoginShown, isAuthenticated } = this.state;

    return (
      <Router>
        <div className="App">
          <div className="container" >
            <WithRouterButton isLoginShown={isLoginShown} isAuthenticated={isAuthenticated} setAuthentication={this.setAuthentication} />
            <Header />
            <Switch>
              {/* <Route path="/home" component={Home} /> */}
              <Route path="/" exact component={Home} />
              <Route path="/login" render={(props) => <LoginPage {...props} setLoginShown={this.setLoginShown} setAuthentication={this.setAuthentication} />} />
              <PrivateRoute isAuthenticated={isAuthenticated} path="/stopwatch" component={Stopwatch} />
              <PrivateRoute isAuthenticated={isAuthenticated} path="/countdown" component={Countdown} />
              <PrivateRoute isAuthenticated={isAuthenticated} path="/clock" component={Clock} />
              <Route path="/about" component={About} />

              <Route path="*" component={NotFound} />

            </Switch>

          </div>
        </div>
      </Router>
    );
  }
}


function PrivateRoute({ component: Component, isAuthenticated, ...rest }) {

  return (
    <Route
      {...rest}
      render={props =>
        isAuthenticated ? (
          <Component {...props} />
        ) : (
            <Redirect
              to={{
                pathname: "/login",
                state: { from: props.location }
              }}
            />
          )
      }
    />
  );
}

