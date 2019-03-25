import React, { Component } from "react"
import Layout from "../components/layout"
import Sidebar from "../components/sidebar"
import Helmet from "react-helmet"
import { graphql } from "gatsby"
import Img from "gatsby-image"
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

class BlogPostTemplate extends Component {
  render() {
    const singlepost =this.props.data.contentfulPortfolio
    const Imageurl =this.props.data.contentfulPortfolio.galleryImage
    const post = this.props.data.allContentfulPortfolio.edges
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1
    };
    let button;
   
    if(!Imageurl){
      console.log("hi") 
      button=  <Img
      fluid={singlepost.blogImage.fluid}
      backgroundColor={"#f4f8fb"}
    />                
    
    }
    else{
      button=  <Slider {...settings}>   
                                    
      {Imageurl.map(({ file } , index) => {
        return (
          <div>
          <img src={file.url} alt="modhera-sun-temple"/>
          </div>
        )
      })}                  
</Slider>
    }
    return (
      <Layout>
        <Helmet title={`${singlepost.blogTitle}`} />
        <div className="inner-blog-post pad-40">
          <div className="container">
            <div className="row">
           
              <div className="col-lg-7 col-md-7">
                <div className="entry-media">
                  {/* <Img
                    fluid={singlepost.blogImage.fluid}
                    backgroundColor={"#f4f8fb"}
                  /> */}
                    {button}
                  
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
                        {post.map(({ node } , index) => {
                          return (
                            <li key={index} id={index + '1'}>
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
      galleryImage{
        file{
          url
        }
        fluid(maxWidth: 1800) {
          ...GatsbyContentfulFluid_withWebp_noBase64
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
