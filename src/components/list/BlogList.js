import React, { Component } from 'react';
import { List, Icon, Tag } from 'antd';
import { Link } from 'dva/router';
import { connect } from 'dva';
import moment from 'moment';
import 'moment/locale/zh-cn'

const IconText = ({ type, text }) => (
    <span>
        <Icon type={type} style={{ marginRight: 8 }} />
        {text}
    </span>
);

class BlogList extends Component {
    componentDidMount() {
        this.reload()
    }

    reload() {
        const { dispatch, bloglist } = this.props;
        dispatch({ type: "bloglist/getBlogList", payload: { pageNo: bloglist.pageNo, pageSize: bloglist.pageSize } })
    }

    render() {
        const { dispatch, bloglist } = this.props;
        return (
            <List itemLayout="vertical"
                size="large"
                pagination={{
                    onChange: (pageNo, pageSize) => {
                        dispatch({ type: "bloglist/getBlogList", payload: { pageNo: pageNo, pageSize: pageSize } })
                    },
                    pageSize: bloglist.pageSize,
                    total: bloglist.total
                }}
                dataSource={bloglist.listData}
                renderItem={item => (
                    <List.Item
                        key={item.title}
                        actions={[<IconText type="like-o" text={item.commendation} />, <IconText type="clock-circle" text={moment(item.cdt).format('YYYY-MM-DD HH:mm:ss')} />]}
                        extra={<img width={272} alt="logo" src={item.logo} />}
                    >
                        <List.Item.Meta
                            title={<Link to={`/blog/content/${item.id}`} style={{ fontSize: 22, fontWeight: "bold" }}>{item.title}</Link>}
                            description={item.tags.map(function (tag) {
                                return <Tag key={tag.key} color={tag.color}>{tag.name}</Tag>
                            })}
                        />
                        {item.description}
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