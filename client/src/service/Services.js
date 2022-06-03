import React, { Component } from "react";
import axios from "axios";
import NavBar from "../components/NavBar";
import BrandLogoSlider from "../components/BrandLogoSlider";
import Footer from "../components/Footer";
import MobileMenu from "../components/MobileMenu";
class Services extends Component {
  constructor(props) {
    super(props);

    /** Setting the initial state of the component by assigned an object to this.state **/
    this.state = {
      data: [],
      search: ""
    };
  }

  //for searching event in page
  updateSearch(event) {
    this.setState({ search: event.target.value.substr(0, 20) });
  }

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
  }
  render() {
    let data = this.state.data.filter(course => {
      return (
        course.courseName.toString().toLowerCase().indexOf(this.state.search) !== -1 );
    });
    
    let Datalist = data.map((val, i) => {
      return (
        <div
          className="col-lg-4 col-md-6 col-12 section-space--bottom--30"
          key={i}
        >
          <div className="service-grid-item">
            <div className="service-grid-item__image">
              <div className="service-grid-item__image-wrapper">
                <a
                  href={
                    `${process.env.PUBLIC_URL}/` +
                    `blog-details-left-sidebar/` +
                    `${val._id}`
                  }
                >
                  <img style={{
                    width: 300,
                    height: 150,
                    borderWidth: 5,

                    // Set border color.
                    borderColor: '#F44336',
                  }}
                    src={val.imageLink}
                    className="img-fluid"
                    alt="Service Grid"
                  />
                </a>
              </div>

              <div className="service-grid-item__content">
                <h3 className="title">
                  <a
                    href={
                      `${process.env.PUBLIC_URL}/` +
                      `blog-details-left-sidebar/` +
                      `${val._id}`
                    }
                  >
                    {val.courseName}
                  </a>
                </h3>
              </div>
            </div>
          </div>
        </div>
      );
    });

    return (
      <div>
        {/* Navigation bar */}
        <NavBar />

        {/* breadcrumb */}
        {/*====================  breadcrumb area ====================*/}
        <div className="breadcrumb-area breadcrumb-bg">
          <div className="container">
            <div className="row">
              <div className="col">
                <div className="page-banner text-center">
                  <h1>ALL COURSES</h1>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/*====================  End of breadcrumb area  ====================*/}

        <div
          style={{
            padding: "20px",
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between"
          }}
        >
          <h1 style={{marginLeft:"-200px", textDecoration:"underline", color:"#1A78B8"}}>Courses</h1>
          <input
            type="text"
            placeholder="Search..."
            class="form-control input-sm"
            style={{ width: "250px" }}
            value={this.state.search}
            onChange={this.updateSearch.bind(this)}
          />
        </div>

        {/*====================  service page content ====================*/}
        <div className="page-wrapper section-space--inner--120">
          {/*Service section start*/}
          <div className="service-section">
            <div className="container">
              <div className="row">
                <div className="col-lg-12">
                  <div className="service-item-wrapper">
                    <div className="row">{Datalist}</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/*Service section end*/}
        </div>

        {/*====================  End of service page content  ====================*/}

        {/* Brand logo */}
        <BrandLogoSlider background="grey-bg" />

        {/* Footer */}
        <Footer />

        {/* Mobile Menu */}
        <MobileMenu />
      </div>
    );
  }
}

export default Services;
