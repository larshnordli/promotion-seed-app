import React from 'react';

import Header from './header/Container';
import Team from './team/Container';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      section: [
        {
          type: "header",
          headline: "Nandini bjeff woff",
          text: " <strong>ACIT Cloud Studio's</strong> Prototype for Leonard Chesire Disability"
        }, {
          type: "introSection",
          headline: "Nandini mjeauuuuf",
          text: " <strong>ACIT Cloud Studio's</strong> Prototype for Leonard Chesire Disability extended"
        }
      ]
    }
  }
  render() {
    return (
      <div className="container-fluid">
        <div className="row">
          {this.state.section.map((s,i) => {
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
