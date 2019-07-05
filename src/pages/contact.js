import React, { Component } from "react"
import Helmet from "react-helmet"
import Layout from "../components/layout"
import { graphql } from 'gatsby'
import ContactImg from "../images/img-01.png"


export class Contact extends Component {
  render() {
    const siteTitle = this.props.data.site.siteMetadata.title
   
    return (
      <div className="contactImage">
        <div className="container-contact100">
        <Helmet title={siteTitle} />
        <Layout>
          <section className="contact-us pad-70">
            <div className="container">
              
                  <div className="col-lg-12">     
                    <div className="wrap-contact100">           
                        <div className="col-lg-12">                        
                        <div class="contact100-pic">
				                          	<img src={ContactImg} alt="IMG" />
				                 </div>
                            <form name="contact" method="post" data-netlify="true" className="contact-form" data-netlify-honeypot="bot-field" action="/success">
                                    <input type="hidden" name="form-name" value="contact" />
                                    <input type="hidden" name="bot-field" />
                                    <div>
                                      <h5>Get in Touch</h5>
                                    </div>
                                      <div className="field half first">
                                          <label htmlFor="name">Name</label>
                                          <input type="text" name="name" id="name" className="input100"  required/>
                                          <span class="focus-input100"></span>
                                      </div>
                                      <div className="field half">
                                          <label htmlFor="email">Email</label>
                                          <input type="text" name="email" id="email" className="input100"  required/>
                                          <span class="focus-input100"></span>
                                      </div>
                                      <div className="field">
                                          <label htmlFor="message">Message</label>
                                          <textarea name="message" id="message"   required></textarea>
                                       
                                      </div>
                                      <ul className="actions">
                                          <li><input type="submit" value="Send Message" className="contact100-form-btn special" /></li>
                                          <li><input type="reset" value="Clear" className="contact100-clear-btn" /></li>
                                      </ul>
                            </form>
                        </div>
                     </div>   
              
              </div>
            </div>
          </section>
        </Layout>
        </div>
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


