import React from 'react';
import { StaticRouter } from 'react-router-dom';
import { Provider, useStaticRendering } from 'mobx-react';
import App from './views/App';
import { createStoreMap } from './store/store';

// 让mobx在服务端渲染的时候，不会重复的数据变换
useStaticRendering(true);

// { appStore: xxx }
export default (stores, routeContext, url) => (
  <Provider {...stores}>
    <StaticRouter context={routeContext} location={url}>
      <App />
    </StaticRouter>
  </Provider>
)


export { createStoreMap }
