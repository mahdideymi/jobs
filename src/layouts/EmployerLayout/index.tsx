import React, { ReactNode } from 'react';
import { Layout, Menu, Icon } from 'antd';

import { User } from 'components';

import './style.scss';
import 'components/StageEmployee/style.scss';

const { Sider } = Layout;

interface IProps {
  header?: ReactNode;
}

export const EmployerLayout: React.FC<IProps> = props => (
  <Layout>
    <Sider className='employer-layout__sider' theme='light' width='180'>
      <Menu
        className='employer-layout__menu'
        theme='light'
        mode='inline'
        defaultSelectedKeys={['3']}
        style={{
          display: 'flex',
          flexDirection: 'column',
          height: '100%',
          position: 'absolute',
          alignItems: 'center',
        }}>
        <Menu.Item key='1'>
          <Icon type='plus' />
          <span>ایجاد آگهی</span>
        </Menu.Item>
        <Menu.Item key='2'>
          <Icon type='home' />
          <span>داشبورد</span>
        </Menu.Item>
        <Menu.Item key='3'>
          <Icon type='book' />
          <span>موقعیت های شغلی</span>
        </Menu.Item>
        <User name='حمیدرضا' />
      </Menu>
    </Sider>
    <Layout className='employer-layout'>
      {/* <Header className='employer-layout__header'>{props.header}</Header>
      <Content className='employer-layout__content'>{props.children}</Content> */}
      {props.children}
    </Layout>
  </Layout>
);
