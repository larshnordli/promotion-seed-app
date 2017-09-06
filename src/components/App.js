import React from 'react';

import HeaderContainer from './header/HeaderContainer';
import TeamContainer from './team/TeamContainer';
import sections from '*/content/content-and-order';
import TimelineContainer from './timeline/TimelineContainer';
import ToolsContainer from './tools/ToolsContainer';

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
              case "team":
                return <TeamContainer key={i} team={s.team} headline={s.headline} text={s.text} />
                break;
              case "timeline":
                return <TimelineContainer key={i} count={i} phases={s.phases}/>
                break;
              case "tools":
                return <ToolsContainer key={i} tools={s.tools}/>
            }
          })
}
        </div>
      </div>
    )
  }
}
