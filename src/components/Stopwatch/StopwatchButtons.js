import React, { Component } from 'react';

export default class ClockButton extends React.Component {
   
    render() {
      
      let { myId, btnName, innerClick = null } = this.props;
      return (
        <span className="stopwatchButton"  onClick = {()=>{ innerClick(myId) }}>
            <button className="button" onClick={()=>{console.log("Button created")}}>{btnName}</button>
        </span>
      );
    }
  }
