import React, { Component } from 'react'

class PopularPosts extends Component {
    render() {
        return (
            <div className="popularPosts">
            <h3>Popular Posts</h3>
            <hr/>
            <ul id="popular">
                <li><img src={'/images/bookshelf.jpg'} alt=""/></li>
                <li><img src={'/images/codeDisplay.jpg'} alt=""/></li>
                <li><img src={'/images/trees.jpg'} alt=""/></li>
                <li><img src={'/images/laptopAndBook.jpg'} alt=""/></li>
                <li><img src={'/images/bookshelf.jpg'} alt=""/></li>
                <li><img src={'/images/bookshelf.jpg'} alt=""/></li>
            </ul>
            <hr/>
            </div>
        )
    }
}

export default PopularPosts
