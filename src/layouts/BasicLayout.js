import React, { Component } from 'react';
import { Layout, Menu, BackTop } from 'antd';
import { connect } from 'dva';
import { Link } from 'dva/router';

const { Header, Content } = Layout;

class BasicLayout extends Component {
  constructor(props) {
    super(props)
    this.changeMenuItem = this.changeMenuItem.bind(this)
  }

  componentWillMount() {
    if (this.props.location.pathname === "/blog") {
      localStorage.setItem("menuItem", 1);
    }
    else if (this.props.location.pathname === "/diary") {
      localStorage.setItem("menuItem", 2);
    }
    else if (this.props.location.pathname === "/about") {
      localStorage.setItem("menuItem", 3);
    }
  }

  changeMenuItem({ item, key, selectedKeys }) {
    localStorage.setItem("menuItem", selectedKeys);
  }

  render() {
    return (
      <Layout>
        <Header style={{ position: 'fixed', zIndex: 1, width: '100%' }}>
          <Menu theme="dark" mode="horizontal" selectedKeys={[localStorage.getItem("menuItem") === null ? "1" : localStorage.getItem("menuItem")]} onSelect={this.changeMenuItem} style={{ lineHeight: '64px' }} >
            <Menu.Item key="1"><Link to="/blog">学海无涯</Link></Menu.Item>
            <Menu.Item key="2"><Link to="/diary">个人日记</Link></Menu.Item>
            <Menu.Item key="3"><Link to="/about">关于我</Link></Menu.Item>
          </Menu>
        </Header>
        <Content style={{ marginTop: 64 }}>
          <BackTop />
          {this.props.children}
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