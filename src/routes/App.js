import React, { Component } from 'react';
import { Layout, Menu, Row, Col, Card } from 'antd';
import { connect } from 'dva';
const { Header, Content } = Layout;

class App extends Component {
  constructor(props) {
    super(props);
    this.see = this.see.bind(this);
  }

  see({ item, key, selectedKeys }) {
    this.props.dispatch({
      type: "app/changeMenuItem",
      payload: { item: selectedKeys },
    })
  };

  render() {
    return (
      <Layout>
        <Header style={{ position: 'fixed', zIndex: 1, width: '100%' }}>
          <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['1']} style={{ lineHeight: '64px' }} onSelect={this.see}>
            <Menu.Item key="1">学无止境</Menu.Item>
            <Menu.Item key="2">个人日记</Menu.Item>
            <Menu.Item key="3">关于我</Menu.Item>
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

//connect参数之一,获取参数 , state为接受的参数
const mapStateToProps = (state) => {
  return {
    app: state.app
  }
}
export default connect(mapStateToProps)(App)