import React, { Component } from 'react';
import ClockBtn from './clockButtons';
import './index.css';

export default class Clock extends Component {
    constructor(props)
    {
      super(props);
    }

    render() {
      return (
        <span className="clock">
            <span>00:00</span>
            <ClockBtn key={'mykey-'+1} btnName={'Start'} myId={1}/>
            <ClockBtn key={'mykey-'+2} btnName={'Stop'} myId={2}/>
        </span>
        
      );
    }
  }
