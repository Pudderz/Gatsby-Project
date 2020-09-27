import React, { Component } from 'react'
import Tag from './tag'
import './blogBox.css'
import Image from 'gatsby-image'
import {Link} from 'gatsby'

function Blog({data}) {
    return (
        <li key={data.node.slug} className="blogPost">
            <div >
                <Image
                fluid={data.node.image.childImageSharp.fluid}
                alt={data.node.title}
                className="image"
                />
            </div>
            <div className="information">
                <h2>{data.node.title}</h2>
                <time>Posted At: {data.node.postedAt}</time>
                <div dangerouslySetInnerHTML={{__html:data.node.description}}></div>
            </div>
            <div className="tagList">
                <Tag/>
            </div>
            <Link to={`/blogs/${data.node.slug}`} className="purple">Read More</Link>   
        </li>
    )
}


export default Blog
