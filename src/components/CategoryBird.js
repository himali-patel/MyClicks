import React from "react"
import { Link } from "gatsby"
import Img from "gatsby-image" 


export default ({ blog }) => (
    <article className="blog-listing" key={blog.slug}>
    <div className="entry-meta-content">
      <h2 className="entry-title">
        <Link to={blog.slug}>{blog.blogTitle}</Link>
      </h2>                        
    </div>
    <div className="entry-media">
      <Img
        fluid={blog.blogImage.fluid}
        backgroundColor={"#f4f8fb"}
      />
    </div>
    <div className="entry-content-bottom">                      
      <Link to={blog.slug} className="entry-read-more">
        <span />
        Read More
      </Link>
    </div>
  </article>
)
