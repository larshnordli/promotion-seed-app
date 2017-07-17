import React from 'react';

export default class TimelineContainer extends React.Component {
  render() {
    console.log(this.props.phases);
    return (
      <div>
        {this.props.phases.map((t, i) => {
          return (
            <div>
              <h2>{t.title}</h2>
              {t.phase.map((p, i) => {
                return (
                  <div dangerouslySetInnerHTML={ {__html: p.title} }></div>
                )
              })}
            </div>
          )
        })}
      </div>
    )
  }
}
