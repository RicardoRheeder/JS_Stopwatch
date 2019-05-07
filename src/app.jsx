import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Clock from './clock';
import ClockBtn from './clockButtons';
import './index.css';
  
class App extends Component {
  constructor(props)
  {
    super(props);
    this.state = {milisec:0, seconds:0, minutes:0, intervalRef:null};
    this.onClick = this.onClick.bind(this);
    this.timerIncrement = this.timerIncrement.bind(this);
  }

  timerStart() {
    var intervalRef = setInterval(this.timerIncrement, 10);
    // store intervalRef in the state so it can be accessed later:
    this.setState({intervalRef: intervalRef});
    // console.log(intervalRef);
  }

  //TODO: DOUBLE CHECK
  timerIncrement() {
    // Logic to deal with converting seconds to minutes, etc
    if ((this.state.milisec + 1) >= 100){
      this.setState({ seconds: this.state.seconds + 1, milisec: 0 });
    }
    if ((this.state.seconds + 1) >= 60){
      // increment minute, reset seconds
      this.setState({ minutes: this.state.minutes + 1, seconds: 0 });
    } else {
      // increment seconds
      this.setState({ milisec: this.state.milisec + 1 });
    }
  } 

  timerStop(){
    clearInterval(this.state.intervalRef);
    this.state.intervalRef = null;
    // var x =document.getElementsByClassName("clock"); //.style.animation = "0s infinite alternate ease-in-out tipsy";
    // console.log();
  }

  timerReset(){
    this.setState({seconds: 0, minutes: 0, milisec:0});
    this.timerStop();
  }

  onClick(boardId){
    if (boardId == 1 && this.state.intervalRef == null){
      this.timerStart();
    } else if (boardId == 2) {
      this.timerStop();
    } else if (boardId == 3) {
      this.timerReset();
    }
  }

  render() {
    return (
      <div>
        <div >
          <Clock id="clock" key={'mykey-'+0} minutes={this.state.minutes} seconds={this.state.seconds} milisec={this.state.milisec}/>
        </div>
        <div>
          <ClockBtn key={'mykey-'+1} btnName={'Start'} myId={1} innerClick= {this.onClick}/>
          <ClockBtn key={'mykey-'+2} btnName={'Stop'} myId={2} innerClick= {this.onClick}/>
          <ClockBtn key={'mykey-'+3} btnName={'Reset'} myId={3} innerClick= {this.onClick}/>
        </div>
      </div>
    );
  }
}

ReactDOM.render(<App />,document.getElementById('root'));
