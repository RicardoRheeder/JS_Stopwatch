import React, { Component } from 'react';
import './../../index.css';

export default class Clock extends Component {
    render() {
      let {minutes = 0, seconds = 0, milisec = 0, strMinutes='', strSeconds='', strMilisec='' } = this.props;

      // Logic adding a '0' infront of seconds/minutes if it's only a single digit
      minutes < 10 ? strMinutes = ('0'+minutes) : strMinutes = minutes;
      seconds < 10 ? strSeconds = ('0'+seconds) : strSeconds = seconds;
      milisec < 10 ? strMilisec = ('0'+milisec) : strMilisec = milisec;

      return (
        <span className="stopwatch">
            <span>
              {strMinutes}
              :
              {strSeconds}
              :
              {strMilisec}
            </span>
        </span>
        
      );
    }
  }
