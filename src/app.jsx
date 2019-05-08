import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import ClockMain from './ClockMain';
  
class App extends Component {
  constructor(props)
  {
    super(props);
  }

  render() {
    return (
        <ClockMain >test
          
      </ClockMain>
    );
  }
}

ReactDOM.render(<App />,document.getElementById('root'));
