import React from 'react';
import './nav.scss'
import {
  Link, NavLink
} from "react-router-dom";

class Nav extends React.Component{
    render() {
        return (
            <div className="topnav">
                <NavLink to='/' activeClassName='active' exact={true}>Home</NavLink>
                <NavLink to='/todos' activeClassName='active'> Todos </NavLink>
                <NavLink to='/lists' activeClassName='active'> Lists</NavLink>
                <NavLink to='/user' activeClassName='active'>Users</NavLink>
            </div>
        )
    }
}

export default Nav;