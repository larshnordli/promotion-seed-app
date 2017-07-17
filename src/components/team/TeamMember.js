import React from 'react';

export default class TeamMember extends React.Component {
  render() {
    return(
      <div className="team-member-item col-md-4">
        <img className="img-responsive" src={this.props.img}></img>
        <p>{this.props.name}</p>
        <p>{this.props.title}</p>

      </div>
    )
  }
}
