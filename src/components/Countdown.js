import React, { Component } from 'react';
import CountdownText from './TimerText';
import CountdownButtons from './TimerControlButtons.js';
import '../index.css';
  
export default class CountdownMain extends Component {
  constructor(props){
    super(props);
    this.state = {milisec:0, seconds:30, minutes:0, intervalRef:null};
    this.onClick = this.onClick.bind(this);
    this.timerIncrement = this.timerIncrement.bind(this);
  }

  componentWillUnmount(){
    if (this.state.intervalRef != null) 
    { 
        clearInterval(this.state.intervalRef);
        this.setState({ intervalRef: null });
    }
  }

  timerStart() {
    // store intervalRef in the state so it can be accessed later:
    this.setState({ intervalRef: setInterval(() => this.timerIncrement(), 10) })
    // console.log(intervalRef);
  }

  timerIncrement() {
    if ((this.state.milisec <= 0) && (this.state.seconds <= 0) && (this.state.minutes <= 0)){
        this.timerStop();
    }else{
        // Logic to deal with converting seconds to minutes, etc
        if ((this.state.milisec) < 0){
            this.setState({ seconds: this.state.seconds - 1, milisec: 99 });
        }
        if ((this.state.seconds ) < 0){
            // decrement minute, reset seconds
            this.setState({ minutes: this.state.minutes - 1, seconds: 59 });
        } else {
            // decrement milisec
            this.setState({ milisec: this.state.milisec - 1 });
        } 
    }
  } 

  timerStop(){
    clearInterval(this.state.intervalRef);
    this.setState({intervalRef:null})
    this.state.intervalRef = null;
  }

  timerReset(){
    this.setState({seconds: 0, minutes: 10, milisec:0});
    this.timerStop();
  }

  onClick(boardId){
    if (boardId == 0 && this.state.intervalRef == null){
      this.timerStart();
    } else if (boardId == 1) {
      this.timerStop();
    } else if (boardId == 2) {
      this.timerReset();
    }
  }

  render() {
    return (
      <div className="clockComponent">
        <div >
          <CountdownText  key={'mykey-'+0} minutes={this.state.minutes} seconds={this.state.seconds} milisec={this.state.milisec}/>
        </div>
        <div className="clockButtonsPanel">
           
            {['Start', 'Stop', 'Reset'].map((name, index) => <CountdownButtons key={'mykey-'+index} btnName={name} myId={index} innerClick= {this.onClick}/>)}
        </div>
      </div>
    );
  }
}

//TODO: Try implement input field for countdown timer

 /* <form className="countdownSubmit" onSubmit={this.onSubmit} style={{display: 'flex'}}>
                <input 
                    type="text" 
                    name="title"
                    style={{flex:'10', padding: '5px'}} 
                    placeholder="Set stopwatch..." 
                    value={this.state.title}
                    onChange={this.onChange}

                />
                <input 
                    type="submit"
                    value="Submit"
                    className="btn"
                    style={{flex: '1'}}
                />
            </form> */