import React from 'react';

export default class TimelineContainer extends React.Component {
  render() {
    return (
      <div>
        {this.props.phases.map((t, i) => {
          return (
            <div key={i}>
              <h2>{t.title}</h2>
              {t.phase.map((p, i) => {
                return (
                  <div key={i}>
                    <div dangerouslySetInnerHTML={ {__html: p.title} }></div>
                    <p>{p.description}</p>
                  </div>
                )
              })}
            </div>
          )
        })}
      </div>
    )
  }
}
