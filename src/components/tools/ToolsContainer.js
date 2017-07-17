import React from 'react';

export default class ToolsContainer extends React.Component {

  renderToolImage(url) {
    return require('../../media/images/tools/' + url);
  }
  render() {
    return (
      <div className="row">
        {this.props.tools.map((tool, i) => {
          return (
            <div className="col-md-2">
            <a key={i} href={tool.link}>
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
