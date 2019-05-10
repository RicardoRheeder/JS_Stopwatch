import React, { Component } from 'react'

export default class AuthButton extends Component {

    render() {

        const { isAuthenticated, setAuthentication, history, isLoginShown } = this.props;

        return (
            <div>
                {!isLoginShown &&
                    <p className='login'>
                        {isAuthenticated ?
                            <button
                                onClick={() => {
                                    history.push("/");
                                    setAuthentication(false);
                                }}>
                                Sign out
                            </button>
                            :
                            <button onClick={() => { history.push("/login") }} >
                                Log in
                            </button>}
                    </p>}
            </div>);
    }
}
