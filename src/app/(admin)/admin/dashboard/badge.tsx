import React from 'react';
import { Badge, Space } from 'antd';
import { BellOutlined } from '@ant-design/icons';

const BadgeNotifi: React.FC = () => (
  <Space size="middle">    
    <Badge count={100} style={{marginTop:'5px'}}>
      <BellOutlined style={{fontSize:'30px'}}/>
    </Badge>
  </Space>
);

export default BadgeNotifi;