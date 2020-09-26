import React, { Component } from 'react'
import Image from 'gatsby-image'
export const PopularPosts =({data})=> {
    console.log(data)
    return (
        <div className="popularPosts">
            <h3>Popular Posts</h3>
            <hr/>
            <ul id="popular">
                {data.allBlogInfoJson.edges.map((item)=>(
                    <li >
                        <Image
                        fluid={item.node.image.childImageSharp.fluid}
                        alt={item.node.title}
                        className="image"
                        />
                    </li>
                ))}
            </ul>
            <hr/>
        </div>
    )
    
}

export default PopularPosts
