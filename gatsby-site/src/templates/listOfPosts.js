import React from 'react';
import PropTypes from "prop-types"
import {graphql}  from 'gatsby'
import Footer from '../Components/footer'
import Blog from '../Components/blog'
import Pager from "../Components/pager"
import Navigation from '../Components/navigation';

const BlogPost = ({data, pageContext})=>{
    const articles = data.allBlogInfoJson.edges;
    return(
        <div>
            <Navigation/>
            <h3 style={{'margin': 'auto','text-align': 'center',}}>Posts</h3>
            <Pager pageContext={pageContext}/>
            <div>
                <ul className="allPosts">
                    {articles.map(article=>(
                        <Blog data={article}/>
                    ))}
                </ul>
            </div>
            <Pager pageContext={pageContext}/>
            <Footer/>

        </div>
        
    )
}

BlogPost.propTypes ={
    data: PropTypes.object.isRequired,
    pageContext: PropTypes.object.isRequired
}

export const query = graphql`
  query($limit: Int!, $skip: Int!){
    allBlogInfoJson(limit: $limit, skip: $skip) {
      edges {
        node {
          description
          slug
          title
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
`;

export default BlogPost