import React, { Component } from 'react'

/**
 * This component is displayed to either:
 * -> Sign the user out and redirect them to home
 * -> Redirect the user to the login page
 */
export default class AuthButton extends Component {

    render() {
        // Setting variables to props passed to it
        const { isAuthenticated, setAuthentication, history, isLoginShown } = this.props;

        return (
            <div>
                {!isLoginShown &&
                    <p className='login'>
                        {isAuthenticated ?
                            <button
                                onClick={() => {
                                    history.push("/");  // Send user back to home
                                    setAuthentication(false);   // Set logged in to false
                                }}>
                                Sign out
                            </button>
                            :
                            <button onClick={() => { history.push("/login") }} >  {/** Redirects the user back to the log in screen */}
                                Log in
                            </button>}
                    </p>}
            </div>);
    }
}
