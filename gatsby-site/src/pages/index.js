import React from "react"
import {Link} from 'gatsby'
import Navigation from "../Components/navigation"
import Featured from "../Components/featured"
import Blog from '../Components/blog.js'
import '../Components/blogBox.css'
import Footer from "../Components/footer"
import PopularPosts from "../Components/popularPosts"
import PropTypes from "prop-types"


function Home ({data}){
  // constructor(props, data){
  //   super(props)
  //   this.state={
  //     featured: data.allBlogInfoJson.edges[0],
  //     recentPost: data.allBlogInfoJson.edges
  //   }
  // }
  // postClick =(e)=>{
  //   this.setState({
  //     featured: data.allBlogInfoJson.edges[0]
  //   })
  // }

  
    return (
      <div>
        <main>
          <Navigation/>
          <div className="featured">
            <Featured data={data.allBlogInfoJson.edges[0]}></Featured>
          </div>
          <PopularPosts data={data} />

        </main>
      </div>
    )  
  
}
Home.propTypes ={
  data: PropTypes.object.isRequired,
}

export const query = graphql`
query{
  allBlogInfoJson(limit: 4) {
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

export default Home