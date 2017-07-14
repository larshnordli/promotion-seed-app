import React from 'react';

import Team from '*/components/team/Container';

export default class Header extends React.Component {
  render() {
    return (
      <div className="components">
        <h1>hello from header</h1>
        <Team/>
      </div>
    )
  }
}
