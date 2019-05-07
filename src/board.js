import React from 'react';

export default class Board extends React.Component {
   
    render() {
      
      let { value = 0, myId ,innerClick = null } = this.props;
      return (
        <div className="board"  onClick = {()=>{ innerClick(myId) } }>
        <div>number</div>
          { value % 2 === 0? <span>even:{value}</span> : <span>odd:{value}</span> }
        </div>
      );
    }
  }
