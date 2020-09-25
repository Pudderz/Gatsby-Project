import React, { Component } from 'react'

class ScrollList extends Component {
    render() {
        return (
            <div className="sideMenu">
                <h3>Category Selection</h3>
                <ul className="catergorySearch">
                    <li>React</li>
                    <li>JavaScript</li>
                    <li>IntersectioObservers</li>
                    <li>Cookies</li>
                    <li>classes</li>
                </ul>
                <h3>All Posts</h3>
                <ul>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                </ul>
            </div>
        )
    }
}

export default ScrollList
