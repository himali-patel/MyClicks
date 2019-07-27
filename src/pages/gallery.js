import React, { Component } from "react";
import classNames from "classnames";



class Projects extends Component {
  constructor(props) {
    super(props);

    this.state = {
      selectedType: "Wildlife Photgraphy"
    

    };

    this.onSelectChange = this.onSelectChange.bind(this);
  }
  onSelectChange(e) {
    this.setState({ selectedType: e.target.value });
  }

  render() {
    const GalleryImageList = this.props.data.allContentfulPortfolio.edges
    // const projectImgs = this.props.data.allContentfulPortfolio.blogImage;
    const { selectedType } = this.state;
   
    return (
      <section id="projects" className="section projects">
        <h2 className="text-center">PROJECTS</h2>
        <div className="section-content">
          <div className="subheader" >

            <select componentclass="select"
                placeholder="select"
                defaultValue={selectedType}
                onChange={this.onSelectChange}>
                <option value="Birds Photography">Birds Photography</option>
                <option value="Wildlife Photgraphy">Wildlife Photgraphy</option>                 
            </select>
          </div>
          <div className="gallery-list col-md-12">
          <ul className="row">
            {GalleryImageList.map(({ node })=> {
             
              const isSelectedType = selectedType === node.blogCategoryId;
             
            
              const singleCardClass = classNames("single-card", {
                hide: !isSelectedType
              });
            //   const image = projectImgs.find(n => {
            //     return n.node.relativePath === `projects/${node.img}`;
            //   });
            //   const imageSizes = image.node.childImageSharp.sizes;
          
              return (    
                <li  className={singleCardClass + " col-md-3"}>            
                <a
                  href={node.slug}
                  key={node.slug}                 
                  target="_blank"
                  rel="noopener noreferrer"
                >   
                 {/* <img src={node.blogImage.file.url} alt=""/> */}
               
            

                   
                </a>
                </li>  
              );
           
            })}
            </ul>
          </div>
        </div>
      </section>  
    );
  }
}

export default Projects;

export const pageQuery = graphql`
  query galleryIndexQuery {   
        allContentfulPortfolio{
          edges{
            node{   
            slug
            blogTitle   
            blogCategoryId       
              blogImage{
                file{
                  url
                }
               
              }
            }
          }
        }
       
  }
`




