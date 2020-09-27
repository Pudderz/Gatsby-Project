import React, {useState} from "react"
import {Link} from 'gatsby'
import Navigation from "../Components/navigation"
import Featured from "../Components/featured"
import Blog from '../Components/blog.js'
import '../Components/blogBox.css'
import Footer from "../Components/footer"
import PopularPosts from "../Components/popularPosts"
import PropTypes from "prop-types"


function Home ({data}){
  const [state, setstate] = useState({
    featured:0,
  })
  // constructor(props, data){
  //   super(props)
  //   this.state={
  //     featured: data.allBlogInfoJson.edges[0],
  //     recentPost: data.allBlogInfoJson.edges
  //   }
  // }
  const onPostClick =(e)=>{
    setstate({
      featured: e
    })
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth'
    });
  }

  
    return (
      <div>
        <main>
          <Navigation/>
          <div className="featured">
            <Featured data={data.allBlogInfoJson.edges[state.featured]}></Featured>
          </div>
          <PopularPosts data={data} onPostClick={onPostClick}/>

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