import React from 'react'
import { Link } from 'react-router-dom'

export default function Header() {
  return (
    <header style={headerStyle}>
      <h1>
        Stopwatch
      </h1>
      <Link style={linkStyle} to="/">Home </Link> 
      | 
      <Link style={linkStyle} to="/clock"> Stopwatch </Link>
      | 
      <Link style={linkStyle} to="/about"> Clock </Link>
      | 
      <Link style={linkStyle} to="/about"> Countdown </Link>
      | 
      <Link style={linkStyle} to="/about"> About</Link>
    </header>
  )
}

const headerStyle = {
//   background: '#333',
  color: '#fff',
  textAlign: 'center',
  padding: '0px',
  top: '5%',
  left: '25%',
  position: 'absolute'
}

const linkStyle = {
  color:'#fff',
  textDecoration: 'none'
}
