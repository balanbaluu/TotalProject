

import React from 'react';
import { Link, NavLink, withRouter } from 'react-router-dom'

const Navbar = (props) => {
  return (
    <nav className="nav-wrapper red darken-3">
      <div className="container">
        <Link className="brand-logo" to="/">React project</Link>
        <ul className="right">
          <li><NavLink exact to="/">Home</NavLink></li>
          <li><NavLink to='/contact'>Contact</NavLink></li>
          <li><NavLink to='/create'>Create</NavLink></li>
          <li><NavLink to='/index'>Index</NavLink></li>
          <li><NavLink to='/edit'>Edit</NavLink></li>
          <li><NavLink to='/about'>About</NavLink></li>
          <li><NavLink to='/files'>Files</NavLink></li>
          <li><NavLink to='/login'>Login</NavLink></li>
        </ul>
      </div>
    </nav> 
  )
}
export default withRouter(Navbar)