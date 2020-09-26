import { StaticQuery, graphql } from 'gatsby';
import React from 'react';
import Blog from '../Components/blog';
import Footer from '../Components/footer';
import Navigation from '../Components/navigation';
// import ScrollList from '../Components/scrollList';
import Image from 'gatsby-image'


const Posts =({children})=> (
    <StaticQuery
        query ={graphql`
            query {
                allBlogInfoJson {
                    edges {
                        node {
                            slug
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
                }
            }
        `
        }
        render={data=>(
            <div>
                <Navigation/>
                <h3 style={{'margin': 'auto',/* position: relative; */'text-align': 'center',}}>Recent Posts</h3>
                <div>
                {/* <ScrollList/> */}
            <ul className="allPosts">
                {blogPosts(data)}
            {/* <Blog>
                <img src='/images/codeDisplay.jpg' alt=""/>
            </Blog> */}
            {/* <Blog><img src='/images/laptopAndBook.jpg' alt="" loading="lazy"/></Blog>
            <Blog><img src='/images/bookshelf.jpg' alt="" loading="lazy"/></Blog>
            <Blog><img src='/images/trees.jpg' alt="" loading="lazy"/></Blog>
            <Blog><img src='/images/image-intro-desktop.jpg' alt="" loading="lazy"/></Blog>
            <Blog><img src='/images/bookshelf.jpg' alt="" loading="lazy"/></Blog>
            <Blog><img src='/images/bookshelf.jpg' alt="" loading="lazy"/></Blog>
            <Blog><img src={'/images/bookshelf.jpg'} alt="" loading="lazy"/></Blog> */}
            </ul>
            </div>
            <button  style={{'position': 'absolute',
        'left': '50%',
        '-ms-transform': 'translate(-50%, -50%)',
        'transform': 'translate(-50%, -50%)'}}className="purple">Load More</button>
            <Footer/>
            </div>
        )
        
        }
    />
)


function blogPosts(data){
    let array=[];
    data.allBlogInfoJson.edges.forEach(item=>{
        array.push(
        <Blog><Image
                fluid={item.node.image.childImageSharp.fluid}
                alt={item.node.title}
                className="image"
        /></Blog>

        )
         
        
    })
    return array
}

export default Posts