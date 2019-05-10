import React, { Component } from 'react'

export default class LoginPage extends Component {

  state = { redirectToReferrer: false };

  componentDidMount(){
    this.props.setLoginShown(true);
  }

  componentWillUnmount(){
    this.props.setLoginShown(false);
  }

  render() {
    let { from } = this.props.location.state || { from: { pathname: "/" } };

    return (
      <div>

        <h1>
          Log in screen
        </h1>
        <div>
          <label >Username:</label>
          <input type="text" id="name" name="name" required minLength="4" maxLength="8" size="20" ></input>
        </div>
        <div>
          <label >Password:</label>
          <input type="text" id="name" name="name" required minLength="4" maxLength="8" size="20" ></input>
        </div>
        <div>
          <button onClick={()=>{
                this.props.history.push("/");
                this.props.setAuthentication(true);
          }}>Log in</button>
        </div>

      </div>
    );
  }
}