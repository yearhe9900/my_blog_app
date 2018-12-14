import React, { Component } from 'react';
import { Card, Row, Col } from 'antd';
const { Meta } = Card;


export default class AboutMe extends Component {
  render() {
    return (
      <Row gutter={16} style={{ marginleft: '-8px', marginRight: 0 }}>
        <div style={{ background: '#ECECEC', padding: '20px' }}>
          <Col span={18} >
            <Card title="关于我" bordered={false} style={{ minHeight: 865 }}>
              <Row gutter={16}>
                <Col span={6}>
                  <Card
                    hoverable={false}
                    style={{ width: 240 }}
                    cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
                  >
                    <Meta
                      description="这个不是我"
                    />
                  </Card>
                </Col>
              </Row>
            </Card>
          </Col>
          <Col span={6} >
            <Card title="联系我" bordered={true}>
              <p>暂未开放</p>
            </Card>
          </Col>
        </div>
      </Row>
    )
  }
}