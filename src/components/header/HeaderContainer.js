import React from 'react';


export default class Header extends React.Component {

getImage(url){
  return require('../../media/images/'+url);
}
  render() {
    return (
      <div className="col-md-6">
        <h1>{this.props.headline}</h1>
        <div dangerouslySetInnerHTML={ {__html: this.props.text} }></div>
        <img className="img-responsive" src={this.getImage(this.props.imageUrl)}></img>
      </div>
    )
  }
}
