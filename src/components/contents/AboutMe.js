import React, { Component } from 'react';
import { Card } from 'antd';
export default class AboutMe extends Component {
  render() {
    return (
      <div style={{ background: '#ECECEC', padding: '20px' }}>
        <Card title="关于我" bordered={false} style={{ minHeight: 880 }}>

        </Card>
      </div>
    )
  }
}