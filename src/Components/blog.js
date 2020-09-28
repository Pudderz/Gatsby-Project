import React from 'react'
import Image from 'gatsby-image'
import {Link} from 'gatsby'

function Blog({data}) {
    return (
        <li key={data.node.slug} className="blogPost">
            <div >
                <Link to={`/blogs/${data.node.slug}`}>
                <Image
                fluid={data.node.image.childImageSharp.fluid}
                alt={data.node.title}
                className="image"
                /></Link>
            </div>
            <div className="information">
                <h2>{data.node.title}</h2>
                <time>Posted At: {data.node.postedAt}</time>
                <div dangerouslySetInnerHTML={{__html:data.node.description}}></div>
                <Link to={`/blogs/${data.node.slug}`} className="purple">Read More</Link>   
            </div>
            
        </li>
    )
}


export default Blog
