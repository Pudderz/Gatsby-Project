import React, { Component } from 'react'
import Tag from './tag'
import './blogBox.css'
class Blog extends Component {
    render() {
        return (
            <li className="container">
                <div >
                </div>
                <div>
                    <h2>Blog Title</h2>
                    <time></time>
                    <p>Snippet</p>
                </div>
                <div className="tagList">
                    <Tag/>
                </div>
                <button>Read More</button>
            </li>
        )
    }
}

export default Blog
