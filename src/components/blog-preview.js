import React, { Component } from 'react';
import { Link } from "gatsby"
import Img from "gatsby-image" 


// export default ({ blog}) => (
    
//     <article className="blog-listing" key={blog.slug}>
//     <div className="entry-meta-content">
//     <div className="entry-media">
//       <Img
//         fluid={blog.blogImage.fluid}
//         backgroundColor={"#f4f8fb"}
//       />
//     </div>
//       <h2 className="entry-title">
//         <Link to={blog.slug}>{blog.blogTitle}</Link>
//       </h2>
//       <div className="entry-content">
//         <p>{blog.blogShortDesc}</p>
//       </div>                     
//     </div>
  
//     <div className="entry-content-bottom">                      
//       <Link to={blog.slug} className="entry-read-more">
//         <span />
//         Read More
//       </Link>
//     </div>
//   </article>
// )







class Blogpreview extends Component {
    
    render(){
         const MAX_LENGTH = 100;   
         const MAX_LENGTH_Title = 80;   
         const {blog} = this.props   
    
        return(
            <article className="blog-listing" key={blog.slug}>
                <div className="entry-meta-content">
                <div className="entry-media">
                  <Img
                    fluid={blog.blogImage.fluid}
                    backgroundColor={"#f4f8fb"}
                  />
                </div>
                  <h2 className="entry-title">
                    <Link to={blog.slug}> {
                      blog.blogTitle > MAX_LENGTH ? ( blog.blogTitle) : ( blog.blogTitle.substring(0, MAX_LENGTH_Title))
                    }   </Link>
                  </h2>
                  <div className="entry-content">
                    {/* <p>{blog.blogShortDesc}</p>    */}
                  
                    {
                      blog.blogShortDesc > MAX_LENGTH ? ( blog.blogShortDesc) : ( blog.blogShortDesc.substring(0,MAX_LENGTH)+ '...')
                    }                   
                                    
                  </div>                     
                </div>
              
                <div className="entry-content-bottom">                      
                  <Link to={blog.slug} className="entry-read-more">
                    <span />
                    Read More
                  </Link>
                </div>
              </article>
        
        )
    }

}

export default Blogpreview


