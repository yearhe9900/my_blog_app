/* eslint-disable react/no-danger */
import React, { Component } from 'react';
import { Card, Tag, Divider, Spin, Button, message } from 'antd';
import { connect } from 'dva';
import PageHeaderWrapper from '@/components/PageHeaderWrapper';
import 'highlight.js/styles/vs.css';
import style from '@/components/Marked/index.less';
import Exception404 from '@/pages/Exception/404forBlog';
import moment from 'moment';
import 'moment/locale/zh-cn'
// eslint-disable-next-line import/no-extraneous-dependencies
import marked from '@/components/Marked';

// import Link from 'umi/link';

@connect(({ blogdetailmodel, blogmodel }) => ({
  blogdetailmodel, blogmodel
}))

class BlogDetail extends Component {
  componentDidMount() {
    const { history, dispatch } = this.props;
    dispatch({
      type: 'blogdetailmodel/getBlogById',
      parms: { ID: history.location.query.id }
    });
  }

  setLike = () => {
    const { history, dispatch } = this.props;
    const blogId =history.location.query.id;
    const key = `setLike_${blogId.toString()}`;
    if (localStorage.getItem(key)) {
      const time = localStorage.getItem(key);
      if (new Date().getTime() - time > 600000) {
        localStorage.setItem(key, new Date().getTime());
        dispatch({
          type: 'blogdetailmodel/setLike',
          parms: { ID: blogId }
        });
      }
      else{
        message.info("您已点过赞");
      }
    } else {
      localStorage.setItem(key, new Date().getTime());
      dispatch({
        type: 'blogdetailmodel/setLike',
        parms: { ID: blogId }
      });
    }
  }

  goback = () => {
    const { history } = this.props;
    history.goBack();
  }

  render() {
    const { blogdetailmodel } = this.props;
    const input = blogdetailmodel.content;
    const output = marked(input);

    let renderResult;
    if (blogdetailmodel.id) {
      renderResult = (
        <div>
          <Button type="dashed" icon="left" onClick={this.goback} />
          <Divider dashed={blogdetailmodel.dividerDashed} />
          <div align="center"><h1>{blogdetailmodel.title}</h1></div>
          <div>
            <span style={{ marginRight: 5 }}>标签:</span>
            {
              blogdetailmodel.tags.map((index) => {
                const tagkey = index.key;
                return <Tag key={tagkey} color={index.color} style={{ marginBottom: 8 }}>{index.name}</Tag>;
              })
            }
          </div>
          <div style={{ marginTop: 5 }}>
            <span style={{ marginRight: 5 }}>时间:</span>
            <span>{moment(blogdetailmodel.cdt).format('YYYY-MM-DD HH:mm:ss')}</span>
          </div>
          <Divider dashed={blogdetailmodel.dividerDashed} />
          <div className={`${style.forPreview} ${style.forMarkdownPreview}`} dangerouslySetInnerHTML={{ __html: output }} />
          <Divider dashed={blogdetailmodel.dividerDashed} />
          <Button type="primary" icon="like-o" onClick={this.setLike}>觉得好，来个赞({blogdetailmodel.commendation})</Button>
        </div>
      );
    }
    else {
      renderResult = (<Exception404 />);
    }

    return (
      <PageHeaderWrapper>
        <Spin tip="Loading..." spinning={blogdetailmodel.loading}>
          <Card>
            {renderResult}
          </Card>
        </Spin>
      </PageHeaderWrapper>
    )
  }
}

export default BlogDetail;