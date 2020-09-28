import React, {useState} from "react"
import Navigation from "../Components/navigation"
import Featured from "../Components/featured"
import '../Components/styles.scss'
import RecentPosts from "../Components/recentPosts"
import PropTypes from "prop-types"
import { graphql } from 'gatsby'
import Metadata from "../Components/metadata"


function Home ({data}){
  const [state, setstate] = useState({
    featuredIndex:0,
  })
  const onPostClick =(e)=>{
    setstate({
      featuredIndex: e
    })
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth'
    });
  }

  
  return (
    <>
    <Metadata/>
      <Navigation/>
    <main>
      <div className="featured">
        <Featured data={data.allBlogInfoJson.edges[state.featuredIndex]}></Featured>
      </div>
      <RecentPosts data={data} onPostClick={onPostClick}/>

    </main>
    </>
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