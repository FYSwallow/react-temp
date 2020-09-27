import React, { useState } from 'react'
import { withRouter } from 'react-router-dom'
import { Breadcrumb } from 'antd';
// import menuConfig from '../../config/menuConfig'

function MyBreadcrumb(props) {
    return (
        <Breadcrumb>
            <Breadcrumb.Item></Breadcrumb.Item>
        </Breadcrumb>
    )
}

export default withRouter(MyBreadcrumb)