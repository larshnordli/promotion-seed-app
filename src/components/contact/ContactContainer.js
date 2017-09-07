import React from 'react';

export default class TeamContainer extends React.Component {
    renderImg(url) {
        return require('../../media/images/' + url);
    }
    render() {
        return(
            <div className="row">
                <h2>{this.props.headline}</h2>
                {this.props.items.map((item, i) => {
                    return(
                        <div key={i} className="col-md-12">
                            <a href={item.link}>
                                <p>{item.text}</p>
                                <img src={this.renderImg(`technologies/${item.icon}`)}/>
                            </a>
                        </div>
                    )
                })}
            </div>
        )
    }
}