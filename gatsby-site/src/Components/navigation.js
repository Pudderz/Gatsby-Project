import { Link } from 'gatsby'
import React from 'react'

export default function Navigation() {
    return (
        <nav>
            
            <div className="buttons">
                <Link to="/about">About</Link>
                <Link to="/">Home</Link>
                <Link to='/posts'>Posts</Link> 
                <Link>Portfolio</Link>
                <Link>Github</Link>  
            </div>
            <p className="menu" style={{"color":"rgb(19,17,39)",'margin': '0',
    'font-size': 'large'}}>Blog</p>
            <button className="menu">menu</button>
        </nav>
    )
}
