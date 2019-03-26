import React, { Component } from "react"
import Layout from "../components/layout"
import Link from "gatsby-link"


export class Sucess extends Component {
  render() {

    return (
      <div className="contactImage">
         <div className="container-contact100">
          <Layout>
            <section className="contact-us pad-70">
              <div className="container text-center">                
                  <div className="wrap-contact100 ">  
                       <h4 className="success-msg ">Your information has been submitted Successfully.</h4>
                       <div className="col-lg-12 text-center" style={{marginTop:'20px'}}>
                           <Link to="/" className="backtohome contact100-form-btn"> Back To Home </Link>
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

export default Sucess



