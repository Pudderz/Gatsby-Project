import {Link} from 'gatsby'
import PropTypes from "prop-types";
import React from 'react'

const Pager = ({pageContext}) =>{
    const {previousPagePath, nextPagePath}= pageContext;
    return(
        <>
        {previousPagePath && (
            <span><Link to={previousPagePath}>previousPagePath</Link></span>
        )}
        {nextPagePath && (
            <span><Link to={nextPagePath}>nextPagePath</Link></span>
        )}
        </>
    )
}

Pager.propTypes = {
    pageContext: PropTypes.object.isRequired,
}
export default Pager;