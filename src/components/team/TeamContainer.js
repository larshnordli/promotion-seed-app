import React from 'react';

export default class TeamContainer extends React.Component {
  renderTeamImage(url) {
    return require('../../media/images/team/' + url);
  }
  render() {
    console.log(this.props.team);
    return (
      <div className="col-md-12">
        <h2>{this.props.headline}</h2>
        <div dangerouslySetInnerHTML={{
          __html: this.props.text
        }}></div>
        <img className="img-responsive" src={this.props.imageUrl}></img>
        <div className="team-members-container row ">
          {this.props.team.map((t, i) => {
            return (
              <div className="team-member-item col-md-4">
                <img className="img-responsive" src={this.renderTeamImage(t.image)}></img>
                <p>{t.name}</p>
                <p>{t.title}</p>

              </div>
            )
          })}
        </div>

      </div>
    )
  }
}
