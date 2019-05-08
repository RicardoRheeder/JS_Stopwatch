import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Header from './components/layout/Header';
import ClockMain from './components/stopwatch/StopwatchMain';
import About from './components/pages/About';
  
class App extends Component {
  constructor(props)
  {
    super(props);
  }

  render() {
    return (
      <Router>
        <div className="App">
          <div className="container">
            <Header />
            <Route exact path="/clock" component={ClockMain} />
            <Route exact path="/about" component={About} />
          </div>  
        </div>
      </Router>
    );
  }
}

ReactDOM.render(<App />,document.getElementById('root'));