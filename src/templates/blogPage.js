import React from 'react';
import { graphql } from "gatsby"
import Image from "gatsby-image"
import Navigation from "../Components/navigation";
import Footer from "../Components/footer";
import Metadata from "../Components/metadata";
import { MDXRenderer } from 'gatsby-plugin-mdx';
import TableOfContents from '../Components/TableOfContent'


export const postQuery = graphql`
    query BlogPostByPath($slug: String!){
        mdx(frontmatter: {slug: { eq: $slug}}){
            body
            tableOfContents
            frontmatter{
                title
                postedAt
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

const markdownTemp = (props) => {
  const post = props.data.mdx


  return (
    <React.Fragment>
      <Navigation/>
      <Metadata/>
      <section>
        {
        post?.tableOfContents?.items && (
          <TableOfContents items={post.tableOfContents.items} />
        )
        }
        <div className="blogPiece">
        <Image
          fluid={post.frontmatter.featuredImage.childImageSharp.fluid}
          alt={post.frontmatter.title}
          style={{ position: 'relative', margin:'auto', 'maxHeight': '60vh'}}
          className="image"
        />
        <h1>{post.frontmatter.title}</h1>
        <p>{post.frontmatter.postedAt}</p>
        <div className="blogContent">
          <MDXRenderer>{post.body}</MDXRenderer>
        </div>
        
        </div>
      </section>
      <Footer/>
    </React.Fragment>
  )
}

export default markdownTemp



