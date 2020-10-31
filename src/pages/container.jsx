import React, { useState, useMemo, useCallback } from 'react';
import './index.less';

import LeftTab from './components/tab';

function Container(props) {
  // 组件库折叠
  const [collapsed, setCollapsed] = useState(false);
  const [text, setText] = useState(false);

  const changCollapse = useMemo(() => {
    return c => setCollapsed(c);
  }, []);

  function textNormal() {
    console.log('普通函数触发');
    return name;
  }
  const hooksText = useMemo(() => {
    console.log('缓存');
    return () => text;
  }, [text]);

  return (
    <div className="edit-warp">
      <div className="edit-header">头部</div>
      <div className="edit-container">
        <div className={['edit-left', collapsed ? 'collapse' : null].join(' ')}>
          <div className="left-tab">
            <LeftTab />
          </div>
          <div
            className="collpase-box"
            onClick={() => changCollapse(!collapsed)}
          >
            折叠
          </div>
        </div>
        <div className="edit-middle">
          <div>{textNormal()}</div>
          <div>{hooksText()}</div>
          <div onClick={() => hooksText()}>触发useMemo</div>
        </div>
      </div>
    </div>
  );
}

export default Container;
