import React, { Component } from "react"
import Helmet from "react-helmet"
import Layout from "../components/layout"
import {graphql } from "gatsby"


export class Contact extends Component {
  render() {
    const siteTitle = this.props.data.site.siteMetadata.title
    return (
      <div>
      <Helmet title={siteTitle} />
      <Layout>
        <section className="about-us pad-70">
          <div className="container">
            
                <div className="row">
                    <div className="col-lg-4">
                        <div className="image-container">
                              
                        </div>
                    </div>
                    <div className="col-lg-8">
                    <form name="contact" method="POST" data-netlify="true">
                            <p>
                                <label>Your Name: <input type="text" name="name" /></label>   
                            </p>
                            <p>
                                <label>Your Email: <input type="email" name="email" /></label>
                            </p>
                      
                            <p>
                                <label>Message: <textarea name="message"></textarea></label>
                            </p>
                            <p>
                                <button type="submit">Send</button>
                            </p>
                        </form>
                    </div>
             
            </div>
          </div>
        </section>
      </Layout>
      </div>
    )
  }
}

export default Contact

export const pageQuery = graphql`
  query ContactQuery {
   
        site {
          siteMetadata {
            title
            description
          }
        }    
  }
`


