import React from 'react';
import { Layout, Menu } from 'antd';
import {
  LoginOutlined,

  UserOutlined

} from '@ant-design/icons';

import SwapLeftOutlined from '@ant-design/icons';


const { Sider } = Layout;

const Sidebar = ({ isNightMode, handleNightModeToggle }) => {
  return (
    <Sider width={200} className="site-layout-background">
      <Menu mode="inline" defaultSelectedKeys={['1']} defaultOpenKeys={['sub1']} style={{ height: '100%', borderRight: 0 }}>
        <Menu.Item key="1" icon={<LoginOutlined />}>
          Login / Logout
        </Menu.Item>
        <Menu.Item key="2" icon={<UserOutlined />}>
          Profile
        </Menu.Item>
        <Menu.Item key="3" icon={isNightMode ? <SwapLeftOutlined /> : <SwapLeftOutlined />} onClick={handleNightModeToggle}>
          {isNightMode ? 'Day Mode' : 'Night Mode'}
        </Menu.Item>
        {/* Add more sidebar items if needed */}
      </Menu>
    </Sider>
  );
};

export default Sidebar;
