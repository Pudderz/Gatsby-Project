import React from 'react'
import Image from 'gatsby-image'
import {Link} from 'gatsby'

function Blog({data}) {
    return (
        <li key={data.node.frontmatter.slug} className="blogPost">
            <div >
                <Link to={`/blogs/${data.node.frontmatter.slug}`}>
                <Image
                fluid={data.node.frontmatter.featuredImage.childImageSharp.fluid}
                alt={data.node.frontmatter.title}
                className="image"
                /></Link>
            </div>
            <div className="information">
                <h2>{data.node.frontmatter.title}</h2>
                <time>Posted At: {data.node.frontmatter.postedAt}</time>
                <div dangerouslySetInnerHTML={{__html:data.node.frontmatter.snippet}}></div>
                <Link to={`/blogs/${data.node.frontmatter.slug}`} className="purple">Read More</Link>   
            </div>
            
        </li>
    )
}


export default Blog
