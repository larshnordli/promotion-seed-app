import React from 'react';

import Header from './header/Container';

export default class App extends React.Component {
  render() {
    return (
      <div className="container-fluid">
        <Header/>
      </div>
    )
  }
}
