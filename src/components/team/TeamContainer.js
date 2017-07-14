import React from 'react';

export default class Container extends React.Component {
  render() {
    return (
      <div className="col-md-6">
        <h2>{this.props.headline}</h2>
        <div dangerouslySetInnerHTML={ {__html: this.props.text} }></div>
        <img className="img-responsive" src={this.props.imageUrl}></img>
      </div>
    )
  }
}
