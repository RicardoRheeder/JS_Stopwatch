import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';

import Header from './components/layout/Header';
import Stopwatch from './components/Stopwatch';
import Countdown from './components/Countdown';
import Clock from './components/Clock';

import Home from './components/pages/Home';
import About from './components/pages/About';
import NotFound from './components/pages/NotFound';

  
class App extends Component {
  constructor(props)
  {
    super(props);
  }

  render() {
    return (
      <Router>
        <div className="App">
          <div className="container" >
          <Route path="/" component={Header}/>
            <Switch> 
              <Route path="/home" component={Home} />
              <Route path="/stopwatch" component={Stopwatch} />
              <Route path="/countdown" component={Countdown} />
              <Route path="/clock" component={Clock} />
              <Route path="/about" component={About} />
              <Route path="*" component={NotFound} />
            </Switch>
          </div>  
        </div>
      </Router>
    );
  }
}

ReactDOM.render(<App />,document.getElementById('root'));