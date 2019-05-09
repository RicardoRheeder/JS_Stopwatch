import React, { Component } from 'react';
import './../../index.css';

export default class CountdownButton extends Component {
   
    render() {
      
      let { myId, btnName, innerClick = null } = this.props;
      return (
        <span onClick = {()=>{ innerClick(myId) }}>
            <button className="clockButton" onClick={()=>{console.log("Button created")}}>{btnName}</button>
        </span>
      );
    }
  }