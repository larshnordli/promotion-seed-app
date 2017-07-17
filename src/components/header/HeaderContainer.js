import React from 'react';
import img from '*/media/images/Cat.jpg';

export default class HeaderContainer extends React.Component {
  render() {
    return (
      <div className="col-md-12">
        <h1>{this.props.headline}</h1>
        <div dangerouslySetInnerHTML={ {__html: this.props.text} }></div>
        <img className="img-responsive" src={this.props.imageUrl}></img>
      </div>
    )
  }
}
