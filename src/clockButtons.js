import React from 'react';

export default class clockButton extends React.Component {
   
    render() {
      
      let { myId, btnName } = this.props;
      return (
        <span>
            <button onClick={console.log("Button Pressed")}>{btnName}</button>
        </span>
      );
    }
  }
