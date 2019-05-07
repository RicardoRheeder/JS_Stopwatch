import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Clock from './clock';
import './index.css';
  
class App extends Component {
  constructor(props)
  {
    super(props);
  }

  render() {
    return (
      <div >
        <Clock/>
      </div>
    );
  }
}

ReactDOM.render(<App />,document.getElementById('root'));
