import React, { Component } from 'react'
import Tag from './tag'
import {staticQuery, graphql, StaticQuery} from 'gatsby'
import Image from "gatsby-image"

const Featured =({ children })=>(
    <StaticQuery
        query={graphql`
            query FeautedItemQuery {
            blogInfoJson {
                title
                description
                postedAt
                image {
                    childImageSharp {
                    fluid {
                        ...GatsbyImageSharpFluid
                    }
                    }
                }
            }
            }
        `}
        render= {data=>(
            <div className="container">
                
        <div className="featuredImage">
            <Image
            fluid={data.blogInfoJson.image.childImageSharp.fluid}
            alt={data.blogInfoJson.title}
            className="image"
            />
        </div>
        <div className="featuredText">
        {/* <hr className="dividerShow"/> */}
    <h2>{data.blogInfoJson.title}</h2>

    <time>Posted At: {data.postedAt}</time>
    <p>{data.blogInfoJson.description}</p>  
        <button className="purple">Read More</button>    
        <Tag/>
        </div>
    </div>
        )}

        
    />
)

export default Featured

