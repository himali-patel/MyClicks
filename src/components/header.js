import React, { Component } from "react"
import Link from "gatsby-link"
import logoImg from "../images/logo.png"


export class Header extends Component {
  render() {
    return (
      <section className="header-wrapper">
        <div className="container">
          <div className="row">
            <div className="col-lg-3 col-md-12 text-left">
              <Link to="/" className="brand-logo">
                <img src={logoImg} alt="brand logo" />
              </Link>
            </div>
            <div className="col-lg-9 col-md-12 text-right">
              <nav id="main-menu" className="text-right">
                <ul>
                  <li>
                    <Link to="/">Home</Link>
                  </li>
                  <li>
                    <Link to="/about/">About</Link>
                  </li>
                  <li>
                    <Link to="/randomclicks/">Portfolio</Link>
                  </li>
                  <li>
                    <Link to="/blog/">Blog </Link>
                  </li>
                  <li>
                    <Link to="/contact/">Contact</Link>
                  </li>
                </ul>
              </nav>
            </div>
   
          </div>
        </div>
      </section>
    )
  }
}

export default Header
