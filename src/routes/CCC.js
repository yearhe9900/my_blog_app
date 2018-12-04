import React, { Component } from 'react';
import { Link } from 'dva/router';

class CCC extends Component {
  render() {
    return (
      <div>
        <p>
          CCC页
        </p>
        <Link to={'/aaa'}>去AAA页面</Link>
        <br />
        <Link to={'/aaa/bbb'}>去BBB页面</Link>
      </div>
    );
  }
}

export default CCC;