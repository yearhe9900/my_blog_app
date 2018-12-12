import React, { Component } from 'react';
import { Tag } from 'antd';

export default class BlogTags extends Component {
    render() {
        return (
            <div>
                {this.props.tags.indexOf(0) !== -1 ? <Tag color="#f50">#f50</Tag> : null}
                {this.props.tags.indexOf(1) !== -1 ? <Tag color="#2db7f5">#2db7f5</Tag> : null}
                {this.props.tags.indexOf(2) !== -1 ? <Tag color="#87d068">#87d068</Tag> : null}
                {this.props.tags.indexOf(3) !== -1 ? <Tag color="#108ee9">#108ee9</Tag> : null}
            </div>
        )
    }
}