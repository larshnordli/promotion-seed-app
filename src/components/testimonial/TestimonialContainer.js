import React from 'react';
import Slider from 'react-slick';

export default class TestimonialContainer extends React.Component {
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
                <Slider {...settings}>
                    {this.props.items.map((item, i) => {
                        return (
                            <div key={i} style={{ backgroundImage: `url(${this.renderSlideImages(item.backgroundImg)})`}}>
                                <h3>{this.props.headline}</h3>                            
                                <img src={this.renderSlideImages(`team/${item.stakeholderImg}`)}/>
                                <p>{item.stakeholderName}</p>
                                <p>{item.stakeholderTitle}</p>
                                <p>{item.text}</p>
                                <img src={this.renderSlideImages(`technologies/${item.logo}`)}/>
                            </div>
                        )
                    })}
                </Slider>
            </div>
        )
    }
}