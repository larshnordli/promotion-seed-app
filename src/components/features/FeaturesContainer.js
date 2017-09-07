import React from 'react';

export default class FeaturesContainer extends React.Component {
    renderImg(url){
        return require('../../media/images/' + url);
    }
    render() {
        return (
            <div className="row">
                {this.props.items.map((item, i) => {
                    return (
                        <div key={i} className="col-md-3">
                            <div dangerouslySetInnerHTML={{ __html: item.headline}}></div>
                            <p>{item.text}</p>
                            <img src={this.renderImg(`technologies/${item.icon}`)}/>
                        </div>
                    )
                })}
            </div>
        )
    }
}