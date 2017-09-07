import React from 'react';
import Slider from 'react-slick';

export default class SolutionContainer extends React.Component {
  renderSlideImages(url) {
    return require('../../media/images/' + url);
  }
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      arrows: false
    }
    return (
      <div className="container">
        <h2>{this.props.headline}</h2>
        <p>{this.props.text}</p>
        <Slider {...settings}>
          {this.props.imgSlide.map((img, i) => {
            return (<img key={i} src={this.renderSlideImages(img)} className="img-responsive"/>)
          })}
        </Slider>
      </div>
    )
  }
}
