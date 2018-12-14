import React, { Component } from 'react';
import { List, Avatar, Icon } from 'antd';
import BlogTags from '../tags/BlogTags'
import { Link } from 'dva/router';
import { connect } from 'dva';

const listData = [];
for (let i = 0; i < 23; i++) {
    listData.push({
        href: `/blog/content/${i}`,
        title: `这是博客标题 ${i}`,
        avatar: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
        description: <BlogTags listTags={[{ color: '#f50', text: '#f50' }, { color: '#2db7f5', text: '#2db7f5' }, { color: '#87d068', text: '#87d068' }, { color: '#108ee9', text: '#108ee9' }]} />,
        content: '这是博客的内容摘选',
        blogDate: '2018-12-01 12:11:33'
    });
}

const IconText = ({ type, text }) => (
    <span>
        <Icon type={type} style={{ marginRight: 8 }} />
        {text}
    </span>
);

class BlogList extends Component {

    //获取新的props事件
    componentWillReceiveProps(nextprops) {
        console.log(nextprops)
    }

    render() {
        return (
            <List itemLayout="vertical"
                size="large"
                pagination={{
                    onChange: (page, pageSize) => {
                        this.props.dispatch({
                            type: 'bloglist/changePagination',
                            payload: {
                                page: page,
                                pageSize: pageSize
                            }
                        })
                    },
                    pageSize: this.props.bloglist.pageSize,
                }}
                dataSource={listData}
                renderItem={item => (
                    <List.Item
                        key={item.title}
                        actions={[<IconText type="star-o" text="156" />, <IconText type="like-o" text="156" />, <IconText type="message" text="2" />, <IconText type="clock-circle" text={item.blogDate} />]}
                        extra={<img width={272} alt="logo" src="https://gw.alipayobjects.com/zos/rmsportal/mqaQswcyDLcXyDKnZfES.png" />}
                    >
                        <List.Item.Meta
                            avatar={<Avatar src={item.avatar} />}
                            title={<Link to={item.href}>{item.title}</Link>}
                            description={item.description}
                        />
                        {item.content}
                    </List.Item>
                )}
            />)
    }
}

//connect参数之一,获取参数 , state为接受的参数
const mapStateToProps = (state) => {
    return {
        bloglist: state.bloglist
    }
}
export default connect(mapStateToProps)(BlogList)