import React from 'react'
import {Link} from 'gatsby'
import Image from "gatsby-image"

const Featured =({ data })=>(
    <div className="container">
        <div className="featuredImage">
            <Link to={`/blogs/${data.node.frontmatter.slug}`}>
                <Image
                fluid={data.node.frontmatter.featuredImage.childImageSharp.fluid}
                alt={data.node.frontmatter.title}
                className="image"
                />    
            </Link>
        </div>
        <div className="featuredText">
            
            <h2>{data.node.frontmatter.title}</h2>

            <time>Posted At: {data.node.frontmatter.postedAt}</time>
            <div dangerouslySetInnerHTML={{__html : data.node.frontmatter.snippet}}/>
            <Link to={`/blogs/${data.node.frontmatter.slug}`}className="purple">Read More</Link>    
        </div>
    </div>
)

export default Featured
