import React, { Component } from 'react'
import Tag from './tag'
import {staticQuery, graphql, StaticQuery, Link} from 'gatsby'
import Image from "gatsby-image"

const Featured =({ data })=>(
    <div className="container">
        <div className="featuredImage">
             <Image
            fluid={data.node.image.childImageSharp.fluid}
            alt={data.node.title}
            className="image"
            />
        </div>
        <div className="featuredText">
            
            <h2>{data.node.title}</h2>

            <time>Posted At: {data.node.postedAt}</time>
            <div dangerouslySetInnerHTML={{__html : data.node.description}}/>
            <Link to={`/blogs/${data.node.slug}`}className="purple">Read More</Link>    
            <Tag/>
        </div>
    </div>
    //     )} 
)

export default Featured
