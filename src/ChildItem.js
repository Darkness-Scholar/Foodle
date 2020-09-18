import React, { Component } from 'react';
import Cakeitem from './comps/item/items';

class ChildItem extends Component {
    render() {
        return (
            <div>
                <p>{this.props.code}</p>
                <p>{this.props.title}</p>
            </div>
        );
    }
}

export default ChildItem;