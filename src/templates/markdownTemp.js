import React from 'react';
import Helmet from 'react-helmet';
import { graphql } from "gatsby"
import Image from "gatsby-image"
import Navigation from "../Components/navigation";
import Footer from "../Components/footer";
import Metadata from "../Components/metadata";

export const postQuery = graphql`
    query BlogPostByPath($path: String!){
        markdownRemark(frontmatter: {path: { eq: $path}}){
            html
            frontmatter{
                path
                title
                featuredImage {
                    childImageSharp {
                      fluid(maxWidth: 800) {
                        ...GatsbyImageSharpFluid
                      }
                    }
                  }
            }
        }
    }
`

const markdownTemp = ({ data }) => {
const {markdownRemark: post} = data;
  const product = post.frontmatter

  return (
    <>
    <Navigation/>
    <Metadata/>
    <section>
      
      <div className="blogPiece">
      <Image
        fluid={product.featuredImage.childImageSharp.fluid}
        alt={product.title}
        style={{ position: 'relative', margin:'auto', 'maxHeight': '60vh'}}
        className="image"
      />
      <h1>{product.title}</h1>
      <p>{product.postedAt}</p>
      <div className="blogContent">
        <div  dangerouslySetInnerHTML={{ __html: post.html }} />  
      </div>
      
      </div>
    </section>
    <Footer/>
    </>
  )
}

export default markdownTemp



