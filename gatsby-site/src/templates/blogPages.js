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
      <h1>{product.title}</h1>
      <Image
        fluid={product.image.childImageSharp.fluid}
        alt={product.title}
        style={{ float: "left", marginRight: "1rem", width: 150 }}
      />
      <p>{product.postedAT}</p>
      <div dangerouslySetInnerHTML={{ __html: product.description }} />
    </section>
    <Footer/>
    </>
  )
}

export default Product