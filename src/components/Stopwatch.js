import React, { Component } from 'react';
import Clock from './TimerText';
import ClockBtn from './TimerControlButtons.js';
import '../index.css';
  
/**
 * Serves as a component to display a stopwatch mechanic
 */
export default class ClockMain extends Component {
  constructor(props){
    super(props);
    this.state = {milisec:0, seconds:0, minutes:0, intervalRef:null};
    this.onClick = this.onClick.bind(this);
    this.timerIncrement = this.timerIncrement.bind(this);
  }

      // Stops the interval and clears the reference - used to stop memory leaks
  componentWillUnmount(){
    if (this.state.intervalRef != null) 
    { 
        clearInterval(this.state.intervalRef);
        this.setState({ intervalRef: null });
    }
  }

  // Will initiate the interval function
  timerStart() {
    // Store intervalRef in the state so it can be accessed later:
    this.setState({ intervalRef: setInterval(() => this.timerIncrement(), 10) })
  }

    // Deals with the logic on how to Increment each variable
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

    // Stops the timer
  timerStop(){
    clearInterval(this.state.intervalRef);
    this.setState({intervalRef:null})
    this.state.intervalRef = null;    
  }

    // Resets the timer
  timerReset(){
    this.setState({seconds: 0, minutes: 0, milisec:0});
    this.timerStop();
  }

    // Handles the button's onClick methods depending on the id of the button
  onClick(buttonId){
    if (buttonId == 0 && this.state.intervalRef == null){
      this.timerStart();
    } else if (buttonId == 1) {
      this.timerStop();
    } else if (buttonId == 2) {
      this.timerReset();
    }
  }

  render() {
    return (
      <div className="clockComponent">
        <div >
          <Clock key={'mykey-'+0} minutes={this.state.minutes} seconds={this.state.seconds} milisec={this.state.milisec}/>
        </div>
        <div className="clockButtonsPanel">
                   {/**Maps each button the the corresponding key - essentially creates a button for each key */}
          {['Start', 'Stop', 'Reset'].map((name, index) => <ClockBtn key={'mykey-'+index} btnName={name} myId={index} innerClick= {this.onClick}/>)}
        </div>
      </div>
    );
  }
}
