'use client';
import React from 'react';
import {
  AppstoreAddOutlined,
  AppstoreOutlined,
  HomeOutlined,
  InboxOutlined,
  LineChartOutlined,
  MailOutlined,
  PercentageOutlined,
  SettingOutlined,
  SnippetsOutlined,
  UserOutlined,
} from '@ant-design/icons';
import type { MenuProps } from 'antd';
import { Menu } from 'antd';
import Link from 'next/link';
import style from './style.module.css';

type MenuItem = Required<MenuProps>['items'][number];

function getItem(
  label: React.ReactNode,
  key: React.Key,
  icon?: React.ReactNode,
  children?: MenuItem[],
  type?: 'group'
): MenuItem {
  return {
    key,
    icon,
    children,
    label,
    type,
  } as MenuItem;
}

const items: MenuProps['items'] = [
  getItem('Tổng quan', 'sub1', <HomeOutlined />),

  getItem('Đơn hàng', 'sub2', <SnippetsOutlined />, [
    getItem('Danh sách đơn hàng', '1'),
    getItem('Đơn hàng nháp', '2'),
    getItem('Đơn hàng chưa hoàn tất', '3'),
    getItem('Phiếu đơn hàng', '4'),
    getItem('Quản lý COD', '5'),
  ]),

  { type: 'divider' },

  getItem('Sản phẩm', 'sub3', <InboxOutlined />, [
    getItem(
      <Link href={'/admin/dashboard/product'}>Danh sách sản phẩm</Link>,
      '9'
    ),
    getItem(
      <Link href={'/admin/dashboard/category'}>Danh mục sản phẩm</Link>,
      '10'
    ),
    getItem(<Link href={'/admin/dashboard/warshouse'}>Quản lý kho</Link>, '11'),
    getItem(
      <Link href={'/admin/dashboard/order'}>Đơn đặt hàng nhập kho</Link>,
      '12'
    ),
    getItem(
      <Link href={'/admin/dashboard/exportwarehouse'}>Đơn xuất</Link>,
      '13'
    ),
  ]),
  getItem('Khách hàng', 'sub4', <UserOutlined />),
  getItem('Khuyết mãi', 'sub5', <PercentageOutlined />),
  getItem('Báo cáo', 'sub6', <LineChartOutlined />, [
    getItem('Tổng quan báo cáo', '14'),
    getItem('Danh sách báo cáo', '15'),
    getItem('Phân tích giỏ hàng', '16'),
  ]),
  getItem('Ứng dụng', 'sub7', <AppstoreAddOutlined />),
];

const DropMenu: React.FC = () => {
  const onClick: MenuProps['onClick'] = e => {};

  return (
    <Menu
      style={{ width: '250px', color: 'white' }}
      onClick={onClick}
      defaultOpenKeys={['sub1']}
      mode="inline"
      items={items}
    />
  );
};

export default DropMenu;
