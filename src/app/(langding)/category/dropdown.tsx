import React from 'react';
import { DownOutlined } from '@ant-design/icons';
import type { MenuProps } from 'antd';
import { Dropdown, Space, Typography } from 'antd';

const items: MenuProps['items'] = [
  {
    key: '1',
    label: 'A -> Z',
  },
  {
    key: '2',
    label: 'Z -> A',
  },
  {
    key: '3',
    label: 'Giá tăng dần',
  },
  {
    key: '4',
    label: 'Giá giảm dần',
  },
  {
    key: '5',
    label: 'Hàng mới nhất',
  },
  {
    key: '6',
    label: 'Hàng cũ nhất',
  },
];

const DropdownFilter: React.FC = () => (
  <Dropdown
    menu={{
      items,
      selectable: true,
    }}
  >
    <Typography.Link>
      <Space>
        Thứ tự
        <DownOutlined />
      </Space>
    </Typography.Link>
  </Dropdown>
);

export default DropdownFilter;