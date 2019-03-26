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
                    <form name="contact" method="post" data-netlify="true" data-netlify-honeypot="bot-field">
                    <input type="hidden" name="bot-field" />
    <div className="field half first">
        <label htmlFor="name">Name</label>
        <input type="text" name="name" id="name" />
    </div>
    <div className="field half">
        <label htmlFor="email">Email</label>
        <input type="text" name="email" id="email" />
    </div>
    <div className="field">
        <label htmlFor="message">Message</label>
        <textarea name="message" id="message" rows="6"></textarea>
    </div>
    <ul className="actions">
        <li><input type="submit" value="Send Message" className="special" /></li>
        <li><input type="reset" value="Clear" /></li>
    </ul>
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


