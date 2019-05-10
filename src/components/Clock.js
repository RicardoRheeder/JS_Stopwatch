import React, { Component } from 'react';
import CountdownText from './TimerText';
import '../index.css';

/**
 * Serves as a component to display the current local time
 */
export default class Clock extends Component {
    constructor(props){
        super(props);
        this.state = {milisec:0, seconds:0, minutes:0, curTime:new Date(), intervalRef:null};
        this.updateClock= this.updateClock.bind(this);
        this.curTime = new Date();
    }

    // Starts the interval and assigns it to a reference to be able to clear it
  componentDidMount() {
    this.setState({ intervalRef: setInterval(() => this.updateClock(), 10) })
  }

  // Stops the interval and clears the reference - used to stop memory leaks
  componentWillUnmount() {
    clearInterval(this.state.intervalRef);
    this.setState({ intervalRef: null })
  }

  // Serves as the update method for the local time. 
  // Sets the seconds, minutes, etc
  updateClock(){
    this.setState({milisec: this.state.curTime.getMilliseconds(), seconds: this.state.curTime.getSeconds(), minutes: this.state.curTime.getMinutes()});
    this.setState({curTime: new Date()})
  }

  render() {
    return (
      <div className="clockComponent">
        <div >
          <CountdownText  
            key={'mykey-'+0} 
            minutes={this.state.minutes} 
            seconds={this.state.seconds} 
            milisec={this.state.milisec}
          />
        </div>
      </div>
    );
  }
}