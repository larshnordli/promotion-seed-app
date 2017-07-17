import React from 'react';

export default class TimelineContainer extends React.Component {
  render() {
    console.log(this.props.phases);
    return (
      <div>
        {this.props.phases.map((t, i) => {
          return (<div>{t.title}</div>)
        })}
      </div>
    )
  }
}
