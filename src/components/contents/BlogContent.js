import React, { Component } from 'react';
import { Row, Col, Card, Input, DatePicker } from 'antd';
import BlogList from '../list/BlogList';
import BlogTags from '../tags/BlogTags';
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
          <Col span={19}>
            <Card title="学无止境" bordered={false} style={{ minHeight: 865 }}>
              <BlogList />
            </Card>
          </Col>
          <Col span={5} >
            <Card bordered={true}>
              <h4 style={{ margin: '16px 0' }}>标题查询:</h4>
              <Search
                placeholder="输入要搜索的文章标题"
                onSearch={value => console.log(value)}
                enterButton
              />
              <h4 style={{ margin: '16px 0' }}>时间查询:</h4>
              <RangePicker onChange={onChange} />
              <h4 style={{ margin: '16px 0' }}>标签查询:</h4>
              <BlogTags listTags={[{ color: '#f50', text: '#f50' }, { color: '#2db7f5', text: '#2db7f5' }, { color: '#87d068', text: '#87d068' }, { color: '#108ee9', text: '#108ee9' }]} style={{ marginBottom: 8 }} />
            </Card>
          </Col>
        </div>
      </Row >
    )
  }
}