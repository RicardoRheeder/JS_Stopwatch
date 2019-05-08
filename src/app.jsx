import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Clock from './Clock';
import ClockBtn from './ClockButtons';
import './index.css';
  
class App extends Component {
  constructor(props)
  {
    super(props);
    this.state = {milisec:0, seconds:0, minutes:0, intervalRef:null, isRotating:false};
    this.onClick = this.onClick.bind(this);
    this.timerIncrement = this.timerIncrement.bind(this);
  }


  componentDidMount(){
    var g = document.querySelector('.clock');
    console.log(window.getComputedStyle(g).animation);
  }

  timerStart() {
    var intervalRef = setInterval(this.timerIncrement, 10);
    // store intervalRef in the state so it can be accessed later:
    this.setState({intervalRef, isRotating:true});
    // console.log(intervalRef);
  }

  timerIncrement() {
    // Logic to deal with converting seconds to minutes, etc
    if ((this.state.milisec + 1) >= 100){
      this.setState({ seconds: this.state.seconds + 1, milisec: 0 });
    }
    if ((this.state.seconds + 1) >= 60){
      // increment minute, reset seconds
      this.setState({ minutes: this.state.minutes + 1, seconds: 0 });
    } else {
      // increment milisec
      this.setState({ milisec: this.state.milisec + 1 });
    }
  } 

  timerStop(){
    clearInterval(this.state.intervalRef);
    this.setState({intervalRef:null, isRotating:false})
    this.state.intervalRef = null;
    // debugger;
    
  }

  timerReset(){
    this.setState({seconds: 0, minutes: 0, milisec:0});
    this.timerStop();
  }

  onClick(boardId){
    if (boardId == 0 && this.state.intervalRef == null){
      this.timerStart();
    } else if (boardId == 1) {
      this.timerStop();
    } else if (boardId == 2) {
      this.timerReset();
    }
  }

  render() {
    return (
      <div>
        <div >
          <Clock className="clock" key={'mykey-'+0} minutes={this.state.minutes} seconds={this.state.seconds} milisec={this.state.milisec}/>
        </div>
        <div>
          {['Start', 'Stop', 'Reset'].map((name, index) => <ClockBtn key={'mykey-'+index} btnName={name} myId={index} innerClick= {this.onClick}/>)}
        </div>
      </div>
    );
  }
}

ReactDOM.render(<App />,document.getElementById('root'));
