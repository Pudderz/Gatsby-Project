import React, { Component } from 'react'
import Tag from './tag'
import './blogBox.css'


function Blog({children}) {
    return (
        <li className="blogPost">
            <div >
                {children}
            </div>
            <div className="information">
                <h2>Blog Title</h2>
                <time>Posted At:</time>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque vitae ipsum in turpis luctus sodales. Morbi nibh sapien, vehicula et vulputate eu, consequat vel ipsum. Aliquam ornare laoreet dui, ac placerat urna finibus sed. Mauris aliquet pulvinar commodo. </p>
            </div>
            <div className="tagList">
                <Tag/>
            </div>
            <button className="purple">Read More</button>   
        </li>
    )
}


export default Blog
