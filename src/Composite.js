import React, { Component } from 'react';
import { 
  HashRouter as Router, 
  Route, 
  Switch,
  Link,
  Redirect,
  withRouter
} from 'react-router-dom';

import Header from './components/layout/Header';
import Stopwatch from './components/Stopwatch';
import Countdown from './components/Countdown';
import Clock from './components/Clock';

import Home from './components/pages/Home';
import About from './components/pages/About';
import NotFound from './components/pages/NotFound';

  

export default class Composite extends Component {
  constructor(props)
  {
    super(props);
  }

  render() {
    return (
      <Router>
        <div className="App">
          <div className="container" >
            <AuthButton/>
            <Header/>
              <Route path="/"/>
              <Switch> 
                <Route path="/home" component={Home} />
                <Route path="/login" component={Login} />
                <PrivateRoute path="/stopwatch" component={Stopwatch} />
                <PrivateRoute path="/countdown" component={Countdown} />
                <PrivateRoute path="/clock" component={Clock} />
                <Route path="/about" component={About} />
                <Route path="*" component={NotFound} />
              </Switch>
          </div>  
        </div>
      </Router>
    );
  }
}

const fakeAuth = {
  isAuthenticated: false,
  authenticate(cb) {
    this.isAuthenticated = true;
    setTimeout(cb, 100); // fake async
  },
  signout(cb) {
    this.isAuthenticated = false;
    setTimeout(cb, 100);
  }
};

const AuthButton = withRouter(
  ({ history }) =>
    fakeAuth.isAuthenticated ? (
      <p>
        Welcome!{" "}
        <button
          onClick={() => {
            fakeAuth.signout(() => history.push("/"));
          }}
        >
          Sign out
        </button>
      </p>
    ) : (
      <p>You are not logged in.</p>
    )
);

function PrivateRoute({ component: Component, ...rest }) {
  return (
    <Route
      {...rest}
      render={props =>
        fakeAuth.isAuthenticated ? (
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

class Login extends Component {
  state = { redirectToReferrer: false };

  login = () => {
    fakeAuth.authenticate(() => {
      this.setState({ redirectToReferrer: true });
    });
  };

  render() {
    let { from } = this.props.location.state || { from: { pathname: "/" } };
    let { redirectToReferrer } = this.state;

    if (redirectToReferrer) return <Redirect to={from} />;

    return (
      <div>
        <p>You must log in to view the page at {from.pathname}</p>
        <button onClick={this.login}>Log in</button>
      </div>
    );
  }
}