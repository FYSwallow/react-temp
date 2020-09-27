import {
    LineChartOutlined,
    PieChartOutlined,
    MailOutlined,
    TableOutlined
} from '@ant-design/icons';

import Dashboard from '../views/dashboard/index'
import Charts from '../views/charts/index'
import Semantic from '../views/semantic/index'
import Table from '../views/table/index'
const menuList = [
    {
        title: '语义化布局', // 菜单标题名称
        key: '/semantic', // 对应的path
        icon: LineChartOutlined, // 图标名称
        component: Semantic, //组件
        isPublic: true, // 公开的
    },
    {
        title: '首页', // 菜单标题名称
        key: '/dashboard', // 对应的path
        icon: PieChartOutlined, // 图标名称
        component: Dashboard, //组件
        isPublic: true, // 公开的
    },
    {
        title: '图标', // 菜单标题名称
        key: '/charts', // 对应的path
        icon: PieChartOutlined, // 图标名称
        component: Charts, //组件
        isPublic: true, // 公开的
    },
    {
        title: '数据管理',
        key: '/database',
        icon: MailOutlined,
        children: [ // 子菜单列表
            {
                title: '商铺管理',
                key: '/shop',
                component: Charts, //组件
            },
            {
                title: '食品管理',
                key: '/food',
                component: Charts, //组件
            }
        ]
    },
    {
        title: '表格', // 菜单标题名称
        key: '/table', // 对应的path
        icon: TableOutlined, // 图标名称
        component: Table, //组件
        isPublic: true, // 公开的
    },
]

export default menuList