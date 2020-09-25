import React from 'react'
import { graphql } from 'gatsby'
import Image from 'gatsby-image'
export const query = graphql(`query ($slug: String!) {
        dataJson(slug: {eq: $slug}) {
            title
            postedAt
            description
            image {
                childImageSharp {
                    fluid {
                        ...GatsbyImagesSharpFluid
                    }
                }
            }
        }
    }
`);

const Product = ({data}) => {
    const product = data.dataJson;

    return(
        <section>
            <Image 
                fluid={product.image.childImageSharp.fluid}
                alt={product.title}
            />
             <h1>{product.title}</h1>
            <div dangerouslySetInnerHTML={{__html: product.description}}/>
        </section>
    )
}
export default Product

// function BlogTemplate({pageContext}) {
//     return (
//         <section>
//             <img src={pageContext.image} alt={pageContext.title}/>
//             <h1>{pageContext.title}</h1>
//             <div dangerouslySetInnerHTML={{__html: pageContext.info}}/>
//         </section>
//     )
// }

// export default BlogTemplate
