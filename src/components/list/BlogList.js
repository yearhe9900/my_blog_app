import React, { Component } from 'react';
import { List, Icon } from 'antd';
import BlogTags from '../tags/BlogTags'
import { Link } from 'dva/router';
import { connect } from 'dva';

const listData = [];

const IconText = ({ type, text }) => (
    <span>
        <Icon type={type} style={{ marginRight: 8 }} />
        {text}
    </span>
);

class BlogList extends Component {

    componentDidMount() {
        this.props.dispatch({ type: "bloglist/getBlogList" })
    }

    //获取新的props事件
    componentWillReceiveProps(nextprops) {
        nextprops.bloglist.listData.forEach(element => {
            listData.push({
                href: `/blog/content/${element.id}`,
                title: element.title,
                avatar: element.avatar,
                description: <BlogTags listTags={element.description} />,
                content: element.content,
                blogDate: element.blogDate,
                logoSrc: element.logoSrc
            });
        });
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
                        actions={[<IconText type="like-o" text="156" />, <IconText type="clock-circle" text={item.blogDate} />]}
                        extra={<img width={272} alt="logo" src={item.logoSrc} />}
                    >
                        <List.Item.Meta
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