import React from 'react';


export default class Section extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      section: {
        text: " ACIT Cloud Studio's Prototype for Leonard Chesire Disability"
      }
    }
  }
  render() {
    return (
      <div className="col-md-6">
        <h1>{this.props.headline}</h1>
        <p>{this.state.section.text}</p>
      </div>
    )
  }
}
