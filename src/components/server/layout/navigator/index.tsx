'use client'
import React from 'react'
import { AppstoreOutlined, MailOutlined } from '@ant-design/icons';
import type { MenuProps } from 'antd';
import { Menu } from 'antd';
import Link from 'next/link';
import { useTranslation, changeLanguage } from '@src/i18n/client'


const Navigator = () => {
  const { t, i18n } = useTranslation('menu');
  const items: MenuProps['items'] = [
    {
      label: (
        <Link href="/">
          {t("home")}
        </Link>),
      key: 'mail',
      icon: <MailOutlined />,
    },
    {
      label: (
        <Link href="/product">
          {t("product")}
        </Link>),
      key: 'app',
      icon: <AppstoreOutlined />,

    },
    {
      label: (
        <Link href="/category">
          {t("category")}
        </Link>),
      key: 'alipay',
    },
    {
      label: (
        <Link href="/admin/dashboard">
          {t("admin")}
        </Link>),
      key: '213',
    },
  ];
  return (
    <div style={{ minHeight: 64, height: 64, width: '100%', border: '1px solid black' }}>
      <Menu selectedKeys={[]} mode="horizontal" items={items} />
    </div>
  )
};

export default Navigator;