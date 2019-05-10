import React from 'react'
import { Link } from "react-router-dom";

/**
 * Serves as the Navigational tabs located near the top of the application
 * Allows the user to navigate to any of the desired links
 */
export default function Header() {
  return (
    <header className="headerStyle">
      <h1>
        Stopwatch
      </h1>
      <Link style={linkStyle} to="/">Home </Link> 
      | 
      <Link style={linkStyle} to="/stopwatch"> Stopwatch </Link>
      | 
      <Link style={linkStyle} to="/clock"> Clock </Link>
      | 
      <Link style={linkStyle} to="/countdown"> Countdown </Link>
      | 
      <Link style={linkStyle} to="/about"> About</Link>
      <p>&nbsp;</p>
      <hr/>
    </header>
  )
}

const linkStyle = {
  color:'#fff',
  textDecoration: 'none'
}
