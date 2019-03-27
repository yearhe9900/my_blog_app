import React from 'react';
import { List, Icon, Card, Tag, Button, Drawer } from 'antd';
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
    const { dispatch } = this.props;
    dispatch({
      type: 'blogmodel/getTags'
    });
    this.reload();
  }

  drawerShow = () => {
    const { blogmodel, dispatch } = this.props;
    dispatch({
      type: 'blogmodel/changeDrawerShow',
      parms: !blogmodel.drawerShow
    });
  }

  changeClassificationId=(id)=>{
    const {blogmodel, dispatch } = this.props;
    dispatch({
      type: 'blogmodel/changeClassificationId',
      parms: { PageNo: 1, pageSize: blogmodel.pageSize, classificationId: id }
    });
  }

  reload() {
    const { blogmodel, dispatch } = this.props;
    dispatch({
      type: 'blogmodel/getBlogs',
      parms: { PageNo: blogmodel.pageNo, pageSize: blogmodel.pageSize, classificationId: blogmodel.classificationId }
    });
  }

  reloadByPageNo(pageNo) {
    const { blogmodel, dispatch } = this.props;
    dispatch({
      type: 'blogmodel/getBlogs',
      parms: { PageNo: pageNo, pageSize: blogmodel.pageSize, classificationId: blogmodel.classificationId }
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

    const renderResult = (
      <List
        header={<Button onClick={this.drawerShow}>筛选</Button>}
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
              description={item.tags.map((tag) => <Tag key={tag.key} style={{ marginBottom: 8 }} color={tag.color}>{tag.name}</Tag>)}
            />
            {item.description}
          </List.Item>
        )}
      />
    );

    return (
      <PageHeaderWrapper>
        <Card>
          <Drawer
            title="筛选框"
            placement="right"
            closable
            onClose={this.drawerShow}
            width={280}
            visible={blogmodel.drawerShow}
          >
            <Tag onClick={()=>this.changeClassificationId("")}>全部</Tag>
            {blogmodel.tags.map((tag) => <Tag key={tag.key} style={{ marginBottom: 8 }} color={tag.color} onClick={()=>this.changeClassificationId(tag.id)}>{tag.name}</Tag>)}
          </Drawer>{renderResult}
        </Card>
      </PageHeaderWrapper>
    );
  }
}

export default BlogList;
