import React, { Component } from "react";
import { graphql } from 'gatsby'
import classNames from "classnames";
import Helmet from "react-helmet"
import Layout from "../components/layout"
import Lightbox from 'lightbox-react';
import 'lightbox-react/style.css';


class Portfolio extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedType: "Birds Photography",
      photoIndex: 0,
      isOpen: false,
      
    };
    
  }

  handleItemClick = (e) => {   
    var a = e.target.getAttribute('data-value');
    this.setState({ selectedType: a});
  }

  render() {
    const { selectedType } = this.state;
    const siteTitle = this.props.data.site.siteMetadata.title
    const portfolioImages = this.props.data.allContentfulPortfolio.edges
    const { photoIndex, isOpen } = this.state;
    let images = []
    var Categorytype = portfolioImages.map(function ({node}) {
      return node.blogCategoryId;
    });
    var CategoryUnique = Categorytype.filter(function(item , i){
      return Categorytype.indexOf(item) >= i;
    }); 


    return (
      <div>
      <Helmet title={siteTitle} />
      <Layout>
      <div className="container portfolio-listing">      
        <div className="text-center pad-40">
          <h2 className="section-title">My Random Clicks....!!</h2>
        </div>
        <ul className="tab-list">
          {              
              CategoryUnique.map(( i)=> {
                return (    
                  <li key={i} value={i}  onClick={this.handleItemClick} data-value={i} className={this.state.selectedType === i ? 'active grad-btn' : 'grad-btn'} >{i.split(' ')[0]}</li>
                
                );           
              })
          }
        </ul>            
        <div className="tab-content">
            <ul className="gallery">
                {portfolioImages.map(({ node } , index)=> {                
                    const isSelectedType = selectedType === node.blogCategoryId; 
                    const singleCardClass = classNames("single-card", {
                      hide: !isSelectedType
                  });
                  images.push(node.blogImage.file.url); 
               
                    return (    
                      <li  className={singleCardClass + " col-md-3 gallery-item"} id={index + '1'} key={index + '1'}>            
                      <a href={node.slug} key={index} id={index} target="_blank" rel="noopener noreferrer" onClick={() => this.setState({ isOpen: true , photoIndex : index })} >   
                      <img src={node.blogImage.file.url} alt=""/>    
                     
                      </a>
                      </li>  
                    );
                
                  })}
                   {isOpen && (
                        <Lightbox                      
                            mainSrc={images[photoIndex]}
                            nextSrc={images[(photoIndex + 1) % images.length]}
                            prevSrc={images[(photoIndex + images.length - 1) % images.length]}
                            onCloseRequest={() => this.setState({ isOpen: false })}
                            onMovePrevRequest={() =>
                            this.setState({
                                photoIndex: (photoIndex + images.length - 1) % images.length,
                            })
                            }
                            onMoveNextRequest={() =>
                            this.setState({
                                photoIndex: (photoIndex + 1) % images.length,
                            })
                            }
                        />
                        )}
              </ul>
         </div>
      </div>
      </Layout>
      </div>
    );
  }
}


export default Portfolio;

export const pageQuery = graphql`
  query PortfolioQuery {
     
    site {
      siteMetadata {
        title
        description
      }
    }  
        allContentfulPortfolio{
          edges{
            node{  
              blogCategoryId          
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
