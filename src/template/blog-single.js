import React, { Component } from "react"
import Layout from "../components/layout"
import Sidebar from "../components/sidebar"
import Helmet from "react-helmet"
import { graphql } from "gatsby"
import Img from "gatsby-image"

class BlogPostTemplate extends Component {
  render() {
    const singlepost =this.props.data.contentfulPortfolio
    const post = this.props.data.allContentfulPortfolio.edges
   
  
    return (
      <Layout>
        <Helmet title={`${singlepost.blogTitle}`} />
        <div className="inner-blog-post pad-40">
          <div className="container">
            <div className="row">
           
              <div className="col-lg-7 col-md-7">
                <div className="entry-media">
                  <Img
                    fluid={singlepost.blogImage.fluid}
                    backgroundColor={"#f4f8fb"}
                  />
                </div>                   
                <div className="post-content">
                  <h2 className="section-headline"> {singlepost.blogTitle} </h2>   
                  <p dangerouslySetInnerHTML={{
                   __html: singlepost.childContentfulPortfolioBlogDescriptionTextNode.childMarkdownRemark.html}} />
                </div>     
              </div>
              <div className="col-md-4 offset-md-1 ">
                <div className="sidebar-blk">
                    <ul className="">
                        {post.map(({ node }) => {
                          return (
                            <li key={node.slug}>
                              <Sidebar blog={node} />
                            </li>
                          )
                        })}
                  </ul>
                </div>           
              </div>  
            </div>
          </div>
        </div>
      </Layout>
    )
  }
}

export default BlogPostTemplate

export const pageQuery = graphql`
  query blogPostQuery($slug: String) {
    contentfulPortfolio(slug: { eq: $slug }) {
      blogTitle  
      childContentfulPortfolioBlogDescriptionTextNode{
        childMarkdownRemark{
          html
        }
      }
      blogImage {
        file {
          url
        }
        fluid(maxWidth: 1800) {
          ...GatsbyContentfulFluid_withWebp_noBase64
        }
      }
    }

    allContentfulPortfolio(limit:5){
      edges{
        node{    
            blogTitle
            blogShortDesc
            blogPublishDate
            slug         
          blogImage{
            file{
              url
            }
            fluid(maxWidth: 1800) {
              ...GatsbyContentfulFluid_noBase64
           }
          }
        }
      }
    }
   
  }
`
