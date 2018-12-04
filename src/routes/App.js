import React, { Component } from 'react';
import { Layout, Menu, Row, Col, Card } from 'antd';
const { Header, Content } = Layout;
function see({ item, key, selectedKeys }) {
  console.log(item)
  console.log(key)
  console.log(selectedKeys)
};

class App extends Component {
  render() {
    return (
      <Layout>
        <Header style={{ position: 'fixed', zIndex: 1, width: '100%' }}>
          <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['2']} style={{ lineHeight: '64px' }} onSelect={see}>
            <Menu.Item key="1">nav 1</Menu.Item>
            <Menu.Item key="2">nav 2</Menu.Item>
            <Menu.Item key="3">nav 3</Menu.Item>
          </Menu>
        </Header>
        <Content style={{ marginTop: 64 }}>
          <div style={{ padding: '10px' }}>
            <Row gutter={16}>
              <Col span={8}>
                <Card title="Card title" bordered={false}>Card content</Card>
              </Col>
              <Col span={8}>
                <Card title="Card title" bordered={false}>Card content</Card>
              </Col>
              <Col span={8}>
                <Card title="Card title" bordered={false}>Card content</Card>
              </Col>
            </Row>
          </div>
        </Content>
      </Layout>
    );
  }
}

export default App;