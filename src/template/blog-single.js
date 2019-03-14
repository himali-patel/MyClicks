import React, { Component } from "react"
import Layout from "../components/layout"
import Helmet from "react-helmet"
import { graphql } from "gatsby"
import Img from "gatsby-image"

class BlogPostTemplate extends Component {
  render() {
    const singlepost =this.props.data.contentfulPortfolio
  
    return (
      <Layout>
        <Helmet title={`${singlepost.blogTitle}`} />
        <div className="inner-blog-post">
          <div className="container">
            <div className="row">
              <div className="col-lg-12 col-md-12">
                <div className="entry-media">
                  <Img
                    fluid={singlepost.blogImage.fluid}
                    backgroundColor={"#f4f8fb"}
                  />
                </div>
                <h1 className="section-headline"> {singlepost.blogTitle} </h1>             
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
      blogImage {
        file {
          url
        }
        fluid(maxWidth: 1800) {
          ...GatsbyContentfulFluid_withWebp_noBase64
        }
      }
    }
  }
`
