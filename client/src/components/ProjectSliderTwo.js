import React, { Component } from "react";
import Swiper from "react-id-swiper";
import axios from "axios";

class ServiceGridSlider extends Component {
  state = {
    data: []
  };
  async componentDidMount() {
    //this.onTextSubmit("react tutorials");

    const response = await axios
      .get("http://localhost:5000/courses")
      .then(result => {
        console.log(result.data[0]);
        return result;
      });

    this.setState({
      data: response.data
    });
    let test = this.state.data
    console.log(test)

  }
  render() {
    const params = {
      slidesPerView: 3,
      
      speed: 1000,
      watchSlidesVisibility: true,
      spaceBetween: 20,
      rebuildOnUpdate: true,
      
     // Responsive breakpoints
     breakpoints: {
      1499: {
        slidesPerView: 3
      },

      991: {
        slidesPerView: 2
      },

      767: {
        slidesPerView: 1
      },

      575: {
        slidesPerView: 1
      }
    }
    };

    
    let data = this.state.data;
    
    let DataList = data.map((val, i) => {
      return (
        <div className="swiper-slide" key={i}>
          <div className="service-grid-item service-grid-item--style2">
            <div className="service-grid-item__image">
              <div className="service-grid-item__image-wrapper">
                <a href={
                    `${process.env.PUBLIC_URL}/` +
                    `blog-details-left-sidebar/` +
                    `${val._id}`
                  }>
                  <img style={{
                    width: 370,
                    height: 237,
                  }}
                    src={val.imageLink}
                    className="img-fluid"
                    alt=""
                  />
                </a>
              </div>
            </div>
            <div className="service-grid-item__content">
              <h3 className="title">
                <a href={
                    `${process.env.PUBLIC_URL}/` +
                    `blog-details-left-sidebar/` +
                    `${val._id}`
                  }>
                  {val.courseName}
                </a>
              </h3>
              <p className="subtitle">{val.courseDescription}</p>
              <a
                href={
                  `${process.env.PUBLIC_URL}/` +
                  `blog-details-left-sidebar/` +
                  `${val._id}`
                }
                className="see-more-link"
              >
                SEE MORE
              </a>
            </div>
          </div>
        </div>
      );
    });
    return (
      <div>
        {/*====================  project grid slider area ====================*/}
        <div className="service-slider-title-area grey-bg section-space--inner--top--120 section-space--inner--bottom--285">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="section-title-area text-center">
                  <h2 className="section-title mb-0">
                    Latest Tutorials 
                  </h2>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="page-wrapper section-space--inner--120">
          {/*Service section start*/}
          <div className="service-section">
            <div className="container">
              
                <div className="col-lg-12">
                  <div className="service-item-wrapper">
                  <Swiper {...params}>{DataList}
                  </Swiper>
                  </div>
                </div>
              
            </div>
          </div>
          {/*Service section end*/}
        </div>
        {/*====================  End of project grid slider area  ====================*/}
      </div>
    );
  }
}

export default ServiceGridSlider;