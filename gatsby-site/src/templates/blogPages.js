import React from "react"
import { graphql } from "gatsby"
import Image from "gatsby-image"
import Navigation from "../Components/navigation";
import Footer from "../Components/footer";

export const query = graphql`
  query($slug: String!) {
    blogInfoJson(slug: { eq: $slug }) {
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
`;

const Product = ({ data }) => {
  const product = data.blogInfoJson

  return (
    <>
    <Navigation/>
    <section>
      
      <div className="blogPiece">
      <Image
        fluid={product.image.childImageSharp.fluid}
        alt={product.title}
        style={{ position: 'relative', margin:'auto'}}
        className="image"
      />
      <h1>{product.title}</h1>
      <p>{product.postedAt}</p>
      <div className="blogContent">
        <div  dangerouslySetInnerHTML={{ __html: product.description }} />  
      </div>
      
      </div>
    </section>
    <Footer/>
    </>
  )
}

export default Product