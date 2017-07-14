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
  render() {
    return (
      <div className="container-fluid">
        <div className="row">
          {this.state.sections.map((s, i) => {
            switch (s.type) {
              case "header":
                return <HeaderContainer key={i} headline={s.headline} text={s.text} imageUrl={s.imageUrl}/>
                break;
              case "introSection":
                return <TeamContainer key={i} headline={s.headline} text={s.text} imageUrl={s.imageUrl}/>
                break;
            }
          })
}
        </div>
      </div>
    )
  }
}
