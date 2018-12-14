import React, { Component } from 'react';
import { Tag } from 'antd';


export default class BlogTags extends Component {
    render() {
        return (
            <div>
                {
                     this.props.listTags.map((itemm, index) => {
                        return <Tag key={index} color={itemm.color} style={this.props.style}>{itemm.text}</Tag>
                    })
                }
            </div>
        )
    }
}