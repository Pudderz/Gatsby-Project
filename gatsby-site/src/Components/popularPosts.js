import React, { Component } from 'react'
import Image from 'gatsby-image'
export const PopularPosts =(props)=> {
    const onChange=(e)=>{
        props.onPostClick(e.currentTarget.getAttribute('data-key')); 
    }
    
    console.log(props.data)
    return (
        <div className="popularPosts">
            <h3>Recent Posts</h3>
            <hr/>
            <ul id="popular">
                {props.data.allBlogInfoJson.edges.map((item, index)=>(
                    <li key={`${index}`} onClick={onChange} data-key={`${index}`}>
                        <Image
                        fluid={item.node.image.childImageSharp.fluid}
                        alt={item.node.title}
                        className="image recentPostImage"
                        style={{'object-fit':'cover', width: '100%', height:'100%',}}
                        data-key={`${index}`}
                        />
                        <div class="middle">
                            <div class="text">{item.node.postedAt}</div>
                        </div>
                    </li>
                ))}
            </ul>
            <hr/>
        </div>
    )
    
}

export default PopularPosts
