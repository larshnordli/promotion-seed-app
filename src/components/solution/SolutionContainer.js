import React from 'react';

export default class SolutionContainer extends React.Component {
  renderSlideImages(url) {
    return require('../../media/images/' + url);
  }
  render() {
    return (
      <div>
        <h2>{this.props.headline}</h2>
        <p>{this.props.text}</p>
        <div>
          {this.props.imgSlide.map((img, i) => {
            return (<img src={this.renderSlideImages(img)} className='img-responsive'/>)
          })}
        </div>
      </div>
    )
  }
}
