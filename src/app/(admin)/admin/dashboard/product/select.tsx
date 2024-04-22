import React from 'react';
import { Select, Space } from 'antd';

const handleChange = (value: string) => {
  console.log(`selected ${value}`);
};

const SelectFilter: React.FC = () => (
  <Space wrap>
    <Select
      defaultValue="lucy"
      style={{ width: 120 }}
      onChange={handleChange}
      options={[
        { value: 'jack', label: 'Jack' },
        { value: 'lucy', label: 'Lucy' },
        { value: 'Yiminghe', label: 'yiminghe' },
      ]}
    />
  </Space>
);

export default SelectFilter;