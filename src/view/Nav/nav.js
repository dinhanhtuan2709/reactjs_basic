import React from 'react';
import './nav.scss'
import {
  Link, NavLink
} from "react-router-dom";

class Nav extends React.Component{
    render() {
        return (
            <div className="topnav">
                <NavLink to='/' activeClassName='active' exact={true}> <b>Home</b> </NavLink>
                <NavLink to='/todos' activeClassName='active'> <b>Todos</b> </NavLink>
                <NavLink to='/lists' activeClassName='active'> <b>Lists</b> </NavLink>
                <NavLink to='/user' activeClassName='active'> <b>Users</b> </NavLink>
            </div>
        )
    }
}

export default Nav;