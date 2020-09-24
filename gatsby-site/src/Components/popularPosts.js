import React, { Component } from 'react'

class PopularPosts extends Component {
    render() {
        return (
            <div className="popularPosts">
            <h3 style={{'margin': 'auto',/* position: relative; */'text-align' : 'center',}}>Popular Posts</h3>
            <hr/>
            <ul id="popular">
                <li><img src={require('../images/bookshelf.jpg')} alt=""/></li>
                <li><img src={require('../images/bookshelf.jpg')} alt=""/></li>
                <li><img src={require('../images/bookshelf.jpg')} alt=""/></li>
                <li><img src={require('../images/bookshelf.jpg')} alt=""/></li>
                <li><img src={require('../images/bookshelf.jpg')} alt=""/></li>
                <li><img src={require('../images/bookshelf.jpg')} alt=""/></li>
            </ul>
            <hr/>
            </div>
        )
    }
}

export default PopularPosts
