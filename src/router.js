import React from 'react';
import { Router, Route, Switch } from 'dva/router';
import dynamic from 'dva/dynamic'

import { config } from './utils'
import BasicLayout from './layouts/BasicLayout';
const { menuGlobal } = config

function RouterConfig({ history, app }) {
  return (
    <Router history={history}>
      <Switch>
        <BasicLayout>
          {
            menuGlobal.map(({ path, ...dynamics }, index) => (
              <Route
                key={index}
                path={path}
                exact
                component={dynamic({
                  app,
                  ...dynamics
                })}
              />
            ))
          }
        </BasicLayout>
      </Switch>
    </Router >
  );
}

export default RouterConfig;