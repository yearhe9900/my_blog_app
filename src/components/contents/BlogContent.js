import React, { Component } from 'react';
import { Row, Col, Card } from 'antd';
import BlogList from '../list/BlogList';

export default class BlogContent extends Component {
  render() {
    return (
      <div>
        <Row gutter={16} style={{ marginleft: '-8px', marginRight: 0 }}>
          <div style={{ background: '#ECECEC', padding: '20px' }}>
            <Col span={18}>
              <Card title="学无止境" bordered={false} style={{ minHeight: 880 }}>
                <BlogList />
              </Card>
            </Col>
            <Col span={6} >
              <Card title="Card title" bordered={true}>
                <p>Card content</p>
                <p>Card content</p>
                <p>Card content</p>
              </Card>
            </Col>
          </div>
        </Row >
      </div>
    )
  }
}