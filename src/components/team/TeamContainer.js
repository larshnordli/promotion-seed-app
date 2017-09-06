import React from 'react';
import TeamMember from './TeamMember';

export default class TeamContainer extends React.Component {
  renderTeamImage(url) {
    return require('../../media/images/team/' + url);
  }
  render() {
    return (
      <div className="col-md-12">
        <h2>{this.props.headline}</h2>
        <div dangerouslySetInnerHTML={{
          __html: this.props.text
        }}></div>
        <div className="team-members-container row ">
          {this.props.team.map((t, i) => {
            return (
              <TeamMember key={i} name={t.name} title={t.title} img={this.renderTeamImage(t.image)}/>
            )
          })}
        </div>

      </div>
    )
  }
}
