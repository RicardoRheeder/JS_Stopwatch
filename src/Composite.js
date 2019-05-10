import React, { Component } from 'react';
import {
  HashRouter as Router,
  Route,
  Switch,
  Redirect,
  withRouter,
} from 'react-router-dom';

// Layout
import Header from './components/layout/Header';
import AuthButton from './components/layout/AuthButton';
// Components
import Stopwatch from './components/Stopwatch';
import Countdown from './components/Countdown';
import Clock from './components/Clock';
// Pages
import LoginPage from './components/pages/LoginPage';
import Home from './components/pages/Home';
import About from './components/pages/About';
import NotFound from './components/pages/NotFound';

/**
 * Serves as the main router for the application
 * Controls routes and parameters passed
 */
export default class Composite extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isAuthenticated: false, // Checks if the user is currently logged in
      isLoginShown: false, // Used to toggle the 'Log in' button being displayed
      // Did not want the 'Log in' button to be displayed on the 'Log in' page
    }

    // Passing the 'this' reference to the two functions
    this.setAuthentication = this.setAuthentication.bind(this);
    this.setLoginShown = this.setLoginShown.bind(this);
  }

  // Sets the state of authentication
  setAuthentication(isAuthenticated) {
    this.setState({ isAuthenticated });
  }

  // Sets the state of login shown
  setLoginShown(isLoginShown) {
    this.setState({ isLoginShown });
  }

  render() {
    // Used to ensure that the AuthButton is able to be active on any page.
    const WithRouterButton = withRouter(AuthButton), { isLoginShown, isAuthenticated } = this.state;

    return (
      <Router>
        <div className="App">
          <div className="container" >
            {/* Essentially, WithRouterButton is AuthButton, but with the above mentioned task */}
            <WithRouterButton isLoginShown={isLoginShown} isAuthenticated={isAuthenticated} setAuthentication={this.setAuthentication} />
            <Header />
            <Switch>
              <Route path="/" exact component={Home} />
              {/* LoginPage takes all props and is given the two states */}
              <Route path="/login" render={(props) => <LoginPage {...props} setLoginShown={this.setLoginShown} setAuthentication={this.setAuthentication} />} />
              <PrivateRoute isAuthenticated={isAuthenticated} path="/stopwatch" component={Stopwatch} />
              <PrivateRoute isAuthenticated={isAuthenticated} path="/countdown" component={Countdown} />
              <PrivateRoute isAuthenticated={isAuthenticated} path="/clock" component={Clock} />
              <Route path="/about" component={About} />
              {/** The 404 not found page */}
              <Route path="*" component={NotFound} />
            </Switch>
          </div>
        </div>
      </Router>
    );
  }
}

// Used to check for authentication of user before allowing then to redirect to private pages
function PrivateRoute({ component: Component, isAuthenticated, ...rest }) {

  return (
    <Route
      {...rest}
      render={props =>
        isAuthenticated ? ( //Checks for authentication
          <Component {...props} />
        ) : (
            <Redirect
              to={{
                pathname: "/login", // Else: redirects user to the login screen
                state: { from: props.location } // Keeps track of the previous page the user was from
              }}
            />
          )
      }
    />
  );
}

