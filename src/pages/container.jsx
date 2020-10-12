import React, { useState, useMemo } from 'react';
import './index.less';

function Container(props) {
  // 组件库折叠
  const [collapsed, setCollapsed] = useState(false);

  const changCollapse = useMemo(() => {
    () => setCollapsed(!collapsed);
  }, []);

  return (
    <div className="edit-warp">
      <div className="eait-header">头部</div>
      <div className="edit-container">
        <div className={['edit-left', collapsed ? 'collapse' : null].join(' ')}>
          <div className="left-tab">123</div>
          <div
            className="collpase-box"
            onClick={() => {
              setCollapsed(!collapsed);
              console.log(collapsed);
            }}
          >
            折叠
          </div>
        </div>
        <div className="edit-middle">123</div>
        <div className="edit-right">456</div>
      </div>
    </div>
  );
}

export default Container;
