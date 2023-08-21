import React, { Component } from "react";
import Slider from "react-slick";

export default class MultipleItems extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 5,
      slidesToScroll: 3
    };
    return (
      <div>
       <img src="images/shadow_icon3.png" alt=""/>
                    <h6 class="section_sub_title">Clients testimonial</h6>
                    <h1 class="section_title">What our clients say about us</h1>
                    <p class="section_desc">Builderrine is the best construction company. It has best team who are provideing best service possible.</p>
        <Slider {...settings}>
          <div>

            <h3>1</h3>
          </div>
          <div>
            <h3>2</h3>
          </div>
          <div>
            <h3>3</h3>
          </div>
          <div>
            <h3>4</h3>
          </div>
          <div>
            <h3>5</h3>
          </div>
          
        </Slider>
      </div>
    );
  }
}