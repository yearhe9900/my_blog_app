import React, { Component } from 'react';
import { Layout, Menu } from 'antd';
import { connect } from 'dva';
import BasicContent from '../components/contents/BasicContent';
const { Header, Content } = Layout;

class BasicLayout extends Component {
  constructor(props) {
    super(props);
    this.changeContent = this.changeContent.bind(this);
  }

  changeContent({ item, key, selectedKeys }) {
    this.props.dispatch({
      type: "global/changeMenuItem",
      payload: { item: selectedKeys },
    })
  };

  render() {
    return (
      <Layout>
        <Header style={{ position: 'fixed', zIndex: 1, width: '100%' }}>
          <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['1']} style={{ lineHeight: '64px' }} onSelect={this.changeContent}>
            <Menu.Item key="1">学无止境</Menu.Item>
            <Menu.Item key="2">个人日记</Menu.Item>
            <Menu.Item key="3">关于我</Menu.Item>
          </Menu>
        </Header>
        <Content style={{ marginTop: 64 }}>
          <BasicContent />
        </Content>
      </Layout>
    );
  }
}

//connect参数之一,获取参数 , state为接受的参数
const mapStateToProps = (state) => {
  return {
    global: state.global
  }
}
export default connect(mapStateToProps)(BasicLayout)