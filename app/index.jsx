import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import configureStore from './store/configureStore';

import './static/css/common.less';
import './static/css/font.css';

import AppRouter from './router/AppRouter';

// 创建 Redux 的 store 对象
const store = configureStore();

render(
  <Provider store={store}>
    <AppRouter />
  </Provider>,
  document.getElementById('root')
);
