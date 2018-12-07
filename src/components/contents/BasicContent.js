import React, { Component } from 'react';
import { connect } from 'dva';

import AboutMe from './AboutMe'
import BlogContent from './BlogContent'
import DiaryContent from './DiaryContent'

class BasicContent extends Component {
  renderContent() {
    if (this.props.global.item[0] === "1") {
      return (
        <BlogContent />
      )
    }
    else if (this.props.global.item[0] === "2") {
      return (
        <DiaryContent />
      )
    }
    else {
      return (
        <AboutMe />
      )
    }
  }
  
  render() {
    return (
      <div style={{ padding: '10px' }}>
        {this.renderContent()}
      </div>
    )
  }
}

//connect参数之一,获取参数 , state为接受的参数
const mapStateToProps = (state) => {
  return {
    global: state.global
  }
}
export default connect(mapStateToProps)(BasicContent)