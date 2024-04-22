'use client';
import { getCookie, setCookie } from '@root/src/cookie';
import { authOptions } from '@src/authNotimplementation';
import React, { useEffect, type ReactNode, useState } from 'react';
import MenuAdmin from './admin/menu/page';
import './globals.css';
import { MenuOutlined, CloseOutlined } from '@ant-design/icons';
import { Button, Drawer } from 'antd';
import Navbar from '@src/app/(admin)/customer/Navbav';

export default function AdminLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [visible, setVisible] = useState(false);

  const toggleDrawer = () => {
    setVisible(!visible);
  };

  const onClose = () => {
    setVisible(false);
  };
  useEffect(() => {
    const langCookie = getCookie('lang');
    if (!langCookie) {
      const defaultLang = 'vn';
      setCookie('lang', defaultLang, { expires: 365 });
    }
  }, []);
  return (
    <div className="flex min-h-screen bg-blue-100">
      {/* Mobile View Menu Button */}
      <div className="md:hidden">
        <Button
          type="primary"
          onClick={toggleDrawer}
          icon={visible ? <CloseOutlined /> : <MenuOutlined />}
        >
          {/* Conditionally render icon based on drawer visibility */}
        </Button>
        <Drawer
          title="Menu"
          placement="left"
          closable={false}
          onClose={onClose}
          visible={visible}
          key="left"
          className="z-20"
        >
          <MenuAdmin />
        </Drawer>
      </div>

      {/* Sidebar */}
      <div className="hidden md:block w-64 min-h-screen bg-gray-800 text-white md:w-20 lg:w-64 transition-width duration-300">
        <MenuAdmin />
      </div>

      {/* Content area with sticky header */}
      <div className="flex-1 flex flex-col">
        {/* Sticky Header */}
        <div className="sticky top-0 z-10 bg-white shadow-md p-4">
          {/* Header content */}
        </div>
        <Navbar />
        {/* Main Content */}
        <div className="flex-1 overflow-auto p-4">{children}</div>
      </div>
    </div>
  );
}
