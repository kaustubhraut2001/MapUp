import React, { useState } from 'react';
import { Layout } from 'antd';
import Sidebar from './Sidebar';
// import AppHeader from './Header';
import AppFooter from './Footer';

const { Content } = Layout;

const MainLayout = ({ children }) => {
  const [isNightMode, setIsNightMode] = useState(false);

  const handleNightModeToggle = () => {
    setIsNightMode(!isNightMode);
  };

  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Sidebar isNightMode={isNightMode} handleNightModeToggle={handleNightModeToggle} />
      <Layout>

        <Content style={{ padding: '16px' }}>
          {children}
        </Content>
        <AppFooter />
      </Layout>
    </Layout>
  );
};

export default MainLayout;
