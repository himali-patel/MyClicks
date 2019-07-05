import React, { Component } from "react"
import Helmet from "react-helmet"
import Layout from "../components/layout"
import BlogPreview from "../components/blog-preview"
import { graphql } from 'gatsby'

export class BlogIndex extends Component {
  render() {
    const siteTitle = this.props.data.site.siteMetadata.title
    const post = this.props.data.allContentfulPortfolio.edges
 

    return (
      <div>
        <Helmet title={siteTitle} />
        <Layout>
        <div className="container">
          <div className="text-center pad-40">
            <h2 className="section-title">Blogs ...!!!</h2>
          </div>
          <ul className="article-list row">
              {post.map(({ node }) => {
                return (
                  <li key={node.slug} className="col-lg-6">
                    <BlogPreview blog={node} />
                  </li>
                )
              })}
            </ul>
        

        </div>
        </Layout>
      </div>
    )
  }
}

export default BlogIndex

export const pageQuery = graphql`
  query BlogIndexQuery {
   
        site {
          siteMetadata {
            title
            description
          }
        }
      
        allContentfulPortfolio{
          edges{
            node{    
                blogTitle
                blogShortDesc
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
