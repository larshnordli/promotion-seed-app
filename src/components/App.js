import React from 'react';

import sections from '*/content/content-and-order';

import HeaderContainer from './header/HeaderContainer';
import TeamContainer from './team/TeamContainer';
import TimelineContainer from './timeline/TimelineContainer';
import TechnologiesContainer from './technologies/TechnologiesContainer';
import SolutionContainer from './solution/SolutionContainer';
import TestimonialContainer from './testimonial/TestimonialContainer';
import MvpContainer from './mvp/MvpContainer';

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
              case "technologies":
                return <TechnologiesContainer key={i} tools={s.tools} text={s.text}/>
              case "solution":
                return <SolutionContainer key={i} headline={s.headline} text={s.text} imgSlide={s.imgSlide}/>
              case "testimonials":
                return <TestimonialContainer key={i} headline={s.headline} items={s.items}/>
              case "mvp":
                return <MvpContainer key={i} headline={s.headline} text={s.text} backgroundImg={s.backgroundImg}/>
            }
          })
}
        </div>
      </div>
    )
  }
}
