import React ,{Component}from "react"
import { Link } from "gatsby"
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";


export class Sidebar extends Component {    
    render() {   
      const {Imageurl} = this.props   
      const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
      };
    
      return (
        <div>
          <span>
              <h1>fgh</h1>
          <Slider {...settings}>
                      <div>
                            <img src={Imageurl.url}/>
                       </div>                   

                     
                   
                 </Slider>
          </span> 
        </div>
      )
    }
  }
  
  export default Sidebar
  





  
  
  