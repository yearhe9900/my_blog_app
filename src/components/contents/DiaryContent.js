import React, { Component } from 'react';
import { Row, Col, Card } from 'antd';

export default class DiaryContent extends Component {
  render() {
    return (
      <Row gutter={16} style={{ marginleft: '-8px', marginRight: 0 }}>
        <div style={{ background: '#ECECEC', padding: '20px' }}>
          <Col span={18}>
            <Card title="个人日记" bordered={false} style={{ minHeight: 865 }}>
             
            </Card>
          </Col>
          <Col span={6} >
            <Card title="Card title" bordered={true}>
              <p>Card content</p>
              <p>Card content</p>
            </Card>
          </Col>
        </div>
      </Row >
    )
  }
}