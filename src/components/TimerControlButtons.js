import React, { Component } from 'react';
import '../index.css';

/**
 * Serves as the button type used within the app
 */
export default class CountdownButton extends Component {
   
    render() {
      let { myId, btnName, innerClick = null } = this.props;
      return (
        <span onClick = {()=>{ innerClick(myId) }}>
            <button className="clockButton" onClick={()=>{console.log("Button called")}}>{btnName}</button>
        </span>
      );
    }
  }