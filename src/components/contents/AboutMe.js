import React, { Component } from 'react';
import { Card, Row, Col, Button, Modal } from 'antd';
const { Meta } = Card;

function info() {
  Modal.info({
    title: '你要当真我就不好意思了',
    content: (
     <div>111</div>
    )
  });
}

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
                <Col span={6}>
                  <h1>个人信息</h1>
                  <h3>姓名：何志鹏</h3>
                  <h3>职业：不爱写代码的程序员</h3>
                  <h3>爱好：旅游</h3>
                  <h3>喜欢的歌手：张学友</h3>
                  <h3>联系方式：要什么联系方式，又不发红发</h3><Button onClick={info}>我要发红包</Button>
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