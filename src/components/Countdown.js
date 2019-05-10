import React, { Component } from 'react';
import CountdownText from './TimerText';
import CountdownButtons from './TimerControlButtons.js';
import '../index.css';
  
/**
 * Serves as a component to display a countdown timer
 */
export default class CountdownMain extends Component {
  constructor(props){
    super(props);
    // For now, this is the only way to set the timer to a desired amount
    this.state = {milisec:0, seconds:30, minutes:0, intervalRef:null};
    this.onClick = this.onClick.bind(this);
    this.timerDecrement = this.timerDecrement.bind(this);
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
    this.setState({ intervalRef: setInterval(() => this.timerDecrement(), 10) })
  }

  // Deals with the logic on how to Decrement each variable
  timerDecrement() {
    if ((this.state.milisec <= 0) && (this.state.seconds <= 0) && (this.state.minutes <= 0)){
        this.timerStop();
    }else{
        // Logic to deal with converting seconds to minutes, etc
        if ((this.state.milisec) < 0){
            this.setState({ seconds: this.state.seconds - 1, milisec: 99 });
        }
        if ((this.state.seconds ) < 0){
            // decrement minute, reset seconds
            this.setState({ minutes: this.state.minutes - 1, seconds: 59 });
        } else {
            // decrement milisec
            this.setState({ milisec: this.state.milisec - 1 });
        } 
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
    this.setState({seconds: 0, minutes: 10, milisec:0});
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
          <CountdownText  key={'mykey-'+0} minutes={this.state.minutes} seconds={this.state.seconds} milisec={this.state.milisec}/>
        </div>
        <div className="clockButtonsPanel">
           {/**Maps each button the the corresponding key - essentially creates a button for each key */}
            {['Start', 'Stop', 'Reset'].map((name, index) => <CountdownButtons key={'mykey-'+index} btnName={name} myId={index} innerClick= {this.onClick}/>)}
        </div>
      </div>
    );
  }
}

//TODO: Try implement input field for countdown timer

 /* <form className="countdownSubmit" onSubmit={this.onSubmit} style={{display: 'flex'}}>
                <input 
                    type="text" 
                    name="title"
                    style={{flex:'10', padding: '5px'}} 
                    placeholder="Set stopwatch..." 
                    value={this.state.title}
                    onChange={this.onChange}

                />
                <input 
                    type="submit"
                    value="Submit"
                    className="btn"
                    style={{flex: '1'}}
                />
            </form> */