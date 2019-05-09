import React, { Component } from 'react';
import CountdownText from './TimerText';
import '../index.css';

export default class Clock extends Component {
    constructor(props){
        super(props);
        this.state = {milisec:0, seconds:0, minutes:0, curTime:new Date(), intervalRef:null};
        this.updateClock= this.updateClock.bind(this);
        this.curTime = new Date();
    }

  componentDidMount() {
    this.setState({ intervalRef: setInterval(() => this.updateClock(), 10) })
  }

  componentWillUnmount() {
    clearInterval(this.state.intervalRef);
    this.setState({ intervalRef: null })
  }

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