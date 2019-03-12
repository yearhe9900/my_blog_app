import React from 'react';
import { List, Icon, Card, Tag } from 'antd';
import { connect } from 'dva';
import moment from 'moment';
import 'moment/locale/zh-cn'
import { Link } from 'dva/router';
import PageHeaderWrapper from '@/components/PageHeaderWrapper';

moment.locale('zh-cn');
@connect(({ blogmodel }) => ({
  blogmodel,
}))


class BlogList extends React.Component {
  componentDidMount() {
    this.reload();
  }

  reload() {
    const { blogmodel, dispatch } = this.props;
    dispatch({
      type: 'blogmodel/getBlogs',
      parms: { PageNo: blogmodel.pageNo, pageSize: blogmodel.pageSize }
    });
  }

  reloadByPageNo(pageNo) {
    const { blogmodel, dispatch } = this.props;
    dispatch({
      type: 'blogmodel/getBlogs',
      parms: { PageNo: pageNo, pageSize: blogmodel.pageSize }
    });
  }

  render() {
    const { blogmodel, dispatch } = this.props;
    const IconText = ({ type, text }) => (
      <span>
        <Icon type={type} style={{ marginRight: 8 }} />
        {text}
      </span>
    );

    return (
      <PageHeaderWrapper>
        <Card>
          <List
            itemLayout="vertical"
            pagination={{
              onChange: (page) => {
                dispatch({
                  type: 'blogmodel/changePageNo',
                  parms: page
                });
                this.reloadByPageNo(page)
              },
              current: blogmodel.pageNo,
              pageSize: blogmodel.pageSize,
              total: blogmodel.total
            }}
            dataSource={blogmodel.bloglist}
            renderItem={item => (
              <List.Item
                key={item.title}
                actions={[<IconText type="like-o" text={item.commendation} />, <IconText type="clock-circle" text={moment(item.cdt).format('YYYY-MM-DD HH:mm:ss')} />]}
              >
                <List.Item.Meta
                  title={<Link to={`blog-detail?id=${item.id}`} style={{ fontSize: 21, fontWeight: "bold" }}>{item.title}</Link>}
                  description={item.tags.map((tag) => <Tag key={tag.key} color={tag.color}>{tag.name}</Tag>)}
                />
                {item.description}
              </List.Item>
            )}
          />
        </Card>
      </PageHeaderWrapper>
    );
  }
}

export default BlogList;