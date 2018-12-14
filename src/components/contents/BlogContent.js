import React, { Component } from 'react';
import { Row, Col, Card, Input, DatePicker } from 'antd';
import BlogList from '../list/BlogList';
const Search = Input.Search;
const { RangePicker } = DatePicker;

function onChange(date, dateString) {
  console.log(date, dateString);
}

export default class BlogContent extends Component {
  render() {
    return (
      <Row gutter={16} style={{ marginleft: '-8px', marginRight: 0 }}>
        <div style={{ background: '#ECECEC', padding: '20px' }}>
          <Col span={18}>
            <Card title="学无止境" bordered={false} style={{ minHeight: 865 }}>
              <BlogList />
            </Card>
          </Col>
          <Col span={6} >
            <Card title="Card title" bordered={true}>
              <Search
                placeholder="输入要搜索的文章名称"
                onSearch={value => console.log(value)}
                enterButton
              />
              <RangePicker onChange={onChange} style={{ marginTop: 10 }} />
              <p>Card content</p>
            </Card>
          </Col>
        </div>
      </Row >
    )
  }
}