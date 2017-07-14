import React from 'react';

import Header from './header/Container';

export default class App extends React.Component {
  render() {
    return (
      <div className="container-fluid">
      <div className="col-md-6">
        div 1
      </div>
      <div className="col-md-6">
        div 2
      </div>
        <Header/>
      </div>
    )
  }
}
