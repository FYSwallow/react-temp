import React, { createContext } from 'react';
import styles from './index.less';

// 设置全局变量
export const dooringContext = createContext({
  theme: 'h5',
  setTheme: () => {},
});

export default function Layout(props) {
  return <dooringContext.Provider>{props.children}</dooringContext.Provider>;
}
