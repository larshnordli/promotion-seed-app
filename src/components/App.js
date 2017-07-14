import React from 'react';

import Header from './header/Container';
import Team from './team/Container';
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
          {this.state.sections.map((s,i) => {
            switch (s.type) {
              case "header":
                return <Header key={i} headline={s.headline} text={s.text}/>
                break;
              case "introSection":
                return <Team key={i} headline={s.headline} text={s.text}/>
                break;
            }
          })
}
        </div>
      </div>
    )
  }
}
