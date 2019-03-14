import React, { Component } from "react"
import Helmet from "react-helmet"
import Layout from "../components/layout"
import PortfolioPreview from "../components/portfoliopreview"
import { graphql } from "gatsby"

export class PortfolioIndex extends Component {
  render() {
    const siteTitle = this.props.data.site.siteMetadata.title
    const portfolioImages = this.props.data.allContentfulPortfolio.edges

    return (
      <div style={{ background: "#fff" }}>
        <Helmet title={siteTitle} />
        <Layout>
        <div className="container">
          <h2 className="section-headline">My Random Clicks</h2>
          <ul className="article-list">
            {portfolioImages.map(({ node }) => {
              return (
                <li key={node.slug}>
                  <PortfolioPreview portfolio={node} />
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

export default PortfolioIndex

export const pageQuery = graphql`
  query PortfolioIndexQuery {
   
        site {
          siteMetadata {
            title
            description
          }
        }
      
        allContentfulPortfolio{
          edges{
            node{             
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
