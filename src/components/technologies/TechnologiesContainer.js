import React from 'react';

export default class TechnologiesContainer extends React.Component {

  renderToolImage(url) {
    return require('../../media/images/tools/' + url);
  }
  render() {
    return (
      <div className="row">
        {this.props.tools.map((tool, i) => {
          return (
            <div  key={i} className="col-md-2 text-center">
            <a href={tool.link} target="_blank">
              <img className="img-responsive" src={this.renderToolImage(tool.imageUrl)}></img>
              <p>{tool.name}</p>
            </a>
            </div>
          )
        })}
      </div>
    )
  }
}
