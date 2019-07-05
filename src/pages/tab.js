import React, { Component } from "react";
import { graphql } from 'gatsby'
import classNames from "classnames";


class Tab extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedType: "Wildlife Photgraphy"
    };
    
  }

  handleItemClick = (e) => {   
    var a = e.target.getAttribute('data-value');

    this.setState({ selectedType: a });
  }

  render() {
    const { selectedType } = this.state;
    const portfolioImages = this.props.data.allContentfulPortfolio.edges
    var Categorytype = portfolioImages.map(function ({node}) {
      return node.blogCategoryId;
    });
    var CategoryUnique = Categorytype.filter(function(item , i){
      return Categorytype.indexOf(item) >= i;
    }); 


    return (
      <div>      
     
        <ul className="row">
          {              
              CategoryUnique.map(( i)=> {
              return (    
                <li key={i} value={i} onClick={this.handleItemClick} data-value={i}>{i}</li>
              
              );
           
            })}
            </ul>
            
             <div className="tab-content">
                <ul className="row">
                  {portfolioImages.map(({ node })=> {                
                    const isSelectedType = selectedType === node.blogCategoryId;                
                    const singleCardClass = classNames("single-card", {
                      hide: !isSelectedType
                    });
                 
                   
                    return (    
                      <li  className={singleCardClass + " col-md-3"}>            
                      <a
                        href={node.slug}
                        key={node.slug}                 
                        target="_blank"
                        rel="noopener noreferrer"
                      >   
                      <img src={node.blogImage.file.url} alt=""/>
                      </a>
                      </li>  
                    );
                
                  })}
                </ul>
            </div>

      </div>
    );
  }
}


export default Tab;

export const pageQuery = graphql`
  query TabQuery {
  
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
