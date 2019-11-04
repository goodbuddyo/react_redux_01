import React from "react";
import Carousel from 'react-bootstrap/Carousel';


class ControlledCarousel extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.handleSelect = this.handleSelect.bind(this);
    this.state = {
      index: 0,
      direction: null,
    };
  }

  handleSelect(selectedIndex, e) {
    this.setState({
      index: selectedIndex,
      direction: e.direction,
    });
  }

  render() {
    const { index, direction } = this.state;

    return (






      <Carousel
        activeIndex={index}
        direction={direction}
        onSelect={this.handleSelect}
        fade={true}
        className="so-carouselItems" 
      >
        <Carousel.Item>
          <div className="carousel-item  active"   data-interval="8000" > 
          <img src="/static/img/5-5sTransparent_2010x594.png" className="d-block w-80" alt="00" />
          <div className="carousel-caption">
            <div className="row so-mb-row">
              <div className="col-12 col-sm-7 col-md-7 col-lg-7 col-xl-6 so-grid-col  so-LeftCaption">
                <h3>5 Steps to 5 Star Ratings</h3>
                <p>Everyone wants 5 star ratings, but few do these five key steps consistently to get there. Take the free assessment. </p> 
              </div>
              <div className=" d-none d-md-block  col-0 col-sm-5 col-md-5 col-lg-5 col-xl-6 so-grid-col so-RtCaption">    
                <img src="/static/img/5-5sStar400x246.gif"  className="d-block w-100 so-carouselImg" alt="" />
              </div>
            </div>
          </div>
        </div>
        </Carousel.Item>

        <Carousel.Item>
        <div className="carousel-item  active"   data-interval="8000" > 
          <img src="/static/img/5-5sTransparent_2010x594.png" className="d-block w-80" alt="00" />
          <div className="carousel-caption">
            <div className="row so-mb-row">
              <div className="col-12 col-sm-7 col-md-7 col-lg-7 col-xl-6 so-grid-col  so-LeftCaption">
                <h3>Step 1: Initial Assessment</h3>
                <p>A sitemap and style guide assessment will help set up the steps that follow.</p> 
              </div>
              <div className=" d-none d-md-block  col-0 col-sm-5 col-md-5 col-lg-5 col-xl-6 so-grid-col so-RtCaption">    
                <img src="/static/img/tapemeasure01.svg"  className="d-block w-100 so-carouselImg" alt="" />
              </div>
            </div>
          </div>
        </div>
        </Carousel.Item>

        <Carousel.Item>
        <div className="carousel-item  active"   data-interval="8000" > 
          <img src="/static/img/5-5sTransparent_2010x594.png" className="d-block w-80" alt="00" />
          <div className="carousel-caption">
            <div className="row so-mb-row">
              <div className="col-12 col-sm-7 col-md-7 col-lg-7 col-xl-6 so-grid-col  so-LeftCaption">
                <h3>Step 2: Secondary Review</h3>
                <p>Other important site maintenance areas include SEO, Analytics and Accessibility.</p> 
              </div>
              <div className=" d-none d-md-block  col-0 col-sm-5 col-md-5 col-lg-5 col-xl-6 so-grid-col so-RtCaption">    
                <img src="/static/img/dataLaptopIcon02.svg"  className="d-block w-100 so-carouselImg" alt="" />
              </div>
            </div>
          </div>
        </div>
        </Carousel.Item>

        <Carousel.Item>
        <div className="carousel-item  active"   data-interval="8000" > 
          <img src="/static/img/5-5sTransparent_2010x594.png" className="d-block w-80" alt="00" />
          <div className="carousel-caption">
            <div className="row so-mb-row">
              <div className="col-12 col-sm-7 col-md-7 col-lg-7 col-xl-6 so-grid-col  so-LeftCaption">
                <h3>Step 3: Performance and Security Check</h3>
                <p>The best sites load fast and are user friendly. Here are some online tools to help and some suggestions. </p> 
              </div>
              <div className=" d-none d-md-block  col-0 col-sm-5 col-md-5 col-lg-5 col-xl-6 so-grid-col so-RtCaption">    
                <img src="/static/img/5-5sCityBlue460wx260.gif"  className="d-block w-100 so-carouselImg" alt="" />
              </div>
            </div>
          </div>
        </div>
        </Carousel.Item>



        <Carousel.Item>
        <div className="carousel-item  active"   data-interval="8000" > 
          <img src="/static/img/5-5sTransparent_2010x594.png" className="d-block w-80" alt="00" />
          <div className="carousel-caption">
            <div className="row so-mb-row">
              <div className="col-12 col-sm-7 col-md-7 col-lg-7 col-xl-6 so-grid-col  so-LeftCaption">
                <h3>Step 4: Business Integration</h3>
                <p> Be sure important business areas are represented and keep an eye on your competitors. </p> 
              </div>
              <div className=" d-none d-md-block  col-0 col-sm-5 col-md-5 col-lg-5 col-xl-6 so-grid-col so-RtCaption">    
                <img src="/static/img/5-5sIntegrateBiz03.png"  className="d-block w-100 so-carouselImg" alt="" />
              </div>
            </div>
          </div>
        </div>
        </Carousel.Item>





        <Carousel.Item>
        <div className="carousel-item  active"   data-interval="8000" > 
          <img src="/static/img/5-5sTransparent_2010x594.png" className="d-block w-80" alt="00" />
          <div className="carousel-caption">
            <div className="row so-mb-row">
              <div className="col-12 col-sm-7 col-md-7 col-lg-7 col-xl-6 so-grid-col  so-LeftCaption">
                <h3>Step 5: Review and Dispense</h3>
                <p>Review course of actions list and submit items in line with the standard business process. </p> 
              </div>
              <div className=" d-none d-md-block  col-0 col-sm-5 col-md-5 col-lg-5 col-xl-6 so-grid-col so-RtCaption">    
                <img src="/static/img/TaskList460_250.gif"  className="d-block w-100" alt="" />
              </div>
            </div>
          </div>
        </div>
        </Carousel.Item>






      </Carousel>
    );
  }
}

export default ControlledCarousel;
