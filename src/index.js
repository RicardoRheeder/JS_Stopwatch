import React from 'react';
import ReactDOM from 'react-dom';
import Board from './board';
import './index.css';
  
  class Game extends React.Component {
    constructor(props)
    {
      super(props);
      this.state = { number: 3, };
      this.onClick = this.onClick.bind(this);
    }

    onClick(boardId)
    {
      
      this.setState({ number: this.state.number > 10? this.state.number : (this.state.number + 1)  , })
      console.log(boardId);
    }
    render() {
      let { number = 0, } = this.state;
      return (
        
        <div >
          {[1,2,3,4].map((val,index)=>{
            return <Board key={'mykey-'+index} value={number} myId={index} innerClick= {this.onClick}/>
          })}
         </div>
      );
    }
  }

  function calculateWinner(squares) {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
        return squares[a];
      }
    }
    return null;
  }
  
  // ========================================
  
  ReactDOM.render(
    <Game />,
    document.getElementById('root')
  );
  