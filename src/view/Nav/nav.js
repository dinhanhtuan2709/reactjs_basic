import React from 'react';
import './nav.scss'

class Nav extends React.Component{
    render() {
        return (
            <div className="topnav">
            <a class="active" href="/">Home</a>
            <a href="/todos">Todos</a>
            <a href="/lists">Lists</a>
</div>
        )
    }
}

export default Nav
