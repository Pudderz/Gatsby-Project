import React from 'react'

function BlogTemplate({pageContext}) {
    return (
        <section>
            <img src={pageContext.image} alt={pageContext.title}/>
            <h1>{pageContext.title}</h1>
            <div dangerouslySetInnerHTML={{__html: pageContext.info}}/>
        </section>
    )
}

export default BlogTemplate
