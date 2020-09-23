import { Link } from 'gatsby'
import React from 'react'

export default function Navigation() {
    return (
        <nav>
            <h1>Title</h1>
            <Link to="/about">About</Link>
            <Link to="/">Home</Link>
            <Link>Category</Link> 
            <Link>GitHub</Link>  
            <button>Menu Button</button>
        </nav>
    )
}
