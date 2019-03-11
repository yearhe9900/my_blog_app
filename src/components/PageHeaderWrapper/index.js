import React from 'react';
import { connect } from 'dva';
import GridContent from './GridContent';
import styles from './index.less';

const PageHeaderWrapper = ({ children,  wrapperClassName, top  }) => (
  <div style={{ margin: '-24px -24px 0' }} className={wrapperClassName}>
    {top}
    {children ? (
      <div className={styles.content}>
        <GridContent>{children}</GridContent>
      </div>
    ) : null}
  </div>
);

export default connect(({ setting }) => ({
  contentWidth: setting.contentWidth,
}))(PageHeaderWrapper);
