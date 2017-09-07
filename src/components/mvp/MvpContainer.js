import React from 'react';

export default class MvpContainer extends React.Component {
    renderImg(url) {
        return require('../../media/images/' + url);
    }
    render() {
        return (
            <div className="container" style={{ backgroundImage: `url(${this.renderImg(this.props.backgroundImg)})`}}>
                <h2>{this.props.headline}</h2>
                <div dangerouslySetInnerHTML={ {__html: this.props.text} }></div>
            </div>
        )
    }
}