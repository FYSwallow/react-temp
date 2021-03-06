import {
    LineChartOutlined,
    PieChartOutlined,
    MailOutlined,
    TableOutlined,
    AppstoreOutlined,
    DragOutlined
} from '@ant-design/icons'

import Dashboard from '../views/dashboard/index'
import Drag from '../views/drag/index'
import Charts from '../views/charts/index'
import Semantic from '../views/charts/index'
import Table from '../views/charts/index'
import AppConfig from '../views/app/config'
import AppSpecial from '../views/app/special'

const menuList = [
    {
        title: '首页', 
        key: '/', 
        icon: PieChartOutlined, 
        component: Dashboard, 
    },
    {
        title: 'UI组件', 
        key: '/ui', 
        icon: AppstoreOutlined, 
        children: [ // 子菜单列表
            {
                title: '应用管理',
                key: '/config',
                component: AppConfig, 
            },
            {
                title: '专题管理',
                key: '/special',
                component: AppSpecial, 
            }
        ]
    },
    {
        title: '拖拽', 
        key: '/drag', 
        icon:DragOutlined, 
        component: Drag, 
    },
    {
        title: 'App配置管理', 
        key: '/app', 
        icon: AppstoreOutlined, 
        children: [ // 子菜单列表
            {
                title: '应用管理',
                key: '/config',
                component: AppConfig, 
            },
            {
                title: '专题管理',
                key: '/special',
                component: AppSpecial, 
            }
        ]
    },
    {
        title: '语义化布局', 
        key: '/semantic', 
        icon: LineChartOutlined, 
        component: Semantic, 
    },
    
    {
        title: '图标', 
        key: '/charts', 
        icon: PieChartOutlined, 
        component: Charts, 
    },
    {
        title: '数据管理',
        key: '/database',
        icon: MailOutlined,
        children: [ // 子菜单列表
            {
                title: '商铺管理',
                key: '/shop',
                component: Charts, 
            },
            {
                title: '食品管理',
                key: '/food',
                component: Charts, 
            }
        ]
    },
    {
        title: '表格', 
        key: '/table', 
        icon: TableOutlined, 
        component: Table, 
        
    },
]

export default menuList