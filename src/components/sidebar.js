import React ,{Component}from "react"
import { Link } from "gatsby"


export class Sidebar extends Component {    
    render() {   
      const {blog} = this.props   
    
      return (
        <div>
          <span>
                     <Link key={blog.slug + "1"} to={blog.slug} >
                            <img src={blog.blogImage.file.url}  alt="blogimage" className="img-rounded"/>           
                    </Link>
                      <Link key={blog.slug + "a"}  to={blog.slug} ><span>{blog.blogTitle}</span></Link> 
                      <span className="meta">{blog.blogPublishDate}</span>
          </span> 
        </div>
      )
    }
  }
  
  export default Sidebar
  





  
  
  