import React from 'react';

import HeaderContainer from './header/HeaderContainer';
import TeamContainer from './team/TeamContainer';
import sections from '*/content/content-and-order';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      sections: sections
    }
  }
  getImage(url) {
    return require('../media/images/' + url);
  }
  render() {
    return (
      <div className="container-fluid">
        <div className="row">
          {this.state.sections.map((s, i) => {
            switch (s.type) {
              case "introSection":
                return <HeaderContainer key={i} headline={s.headline} text={s.text} imageUrl={this.getImage(s.imageUrl)}/>
                break;
              case "header":
                return <TeamContainer key={i} team={s.team} headline={s.headline} text={s.text} imageUrl={this.getImage(s.imageUrl)} />
                break;
            }
          })
}
        </div>
      </div>
    )
  }
}
