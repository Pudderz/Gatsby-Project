import React, {useState} from "react"
import Navigation from "../Components/navigation"
import Featured from "../Components/featured"
import '../Components/blogBox.css'
import RecentPosts from "../Components/recentPosts"
import PropTypes from "prop-types"
import { graphql } from 'gatsby'


function Home ({data}){
  const [state, setstate] = useState({
    featured:0,
  })
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
      <main>
        <Navigation/>
        <div className="featured">
          <Featured data={data.allBlogInfoJson.edges[state.featured]}></Featured>
        </div>
        <RecentPosts data={data} onPostClick={onPostClick}/>

      </main>
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