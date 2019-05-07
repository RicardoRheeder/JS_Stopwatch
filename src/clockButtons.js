import React from 'react';

export default class clockButton extends React.Component {
   
    render() {
      
      let { myId, btnName, innerClick = null } = this.props;
      return (
        <span className="clockButton"  onClick = {()=>{ innerClick(myId) }}>
            <button className="button" onClick={console.log("Button created")}>{btnName}</button>
        </span>
      );
    }
  }
