import React from 'react';

import { Switch, Route, Redirect } from 'react-router-dom';
import menuConfig from '../../config/menuConfig'

let menuList = []

function mapMenuList(list) {
    list.forEach(item => {
        if (item.children) {
            mapMenuList(item.children)
        } else {
            menuList.push(<Route path={item.key} component={item.component} key={item.key}></Route>)
        }
    })
    return menuList
}
function AppMain() {
    return (
        <div className="app-main" id="subapp-viewport">
            <Switch>
                {
                    mapMenuList(menuConfig)
                }
                {/* 没有则跳转到404 */}
                {/* <Redirect from='/' exact to='/dashboard' />  */}
            </Switch>
        </div>
    );
}

export default AppMain;