'use client';
import React, { useState } from 'react';
import { TreeSelect } from 'antd';

const SearchBox: React.FC = (props: any) => {
  let { dataproducts, onDataChange } = props;
  let treeData = dataproducts.map(i => ({
    key: i.id,
    value: i.id,
    title: (
      <div>
        <img
          src="https://sapo.dktcdn.net/100/497/742/variants/dsc05163-1711632258557.jpg"
          alt={i.name}
          style={{ marginRight: '8px', verticalAlign: 'middle', width: 50 }}
        />
        {i.name}
      </div>
    ),
  }));

  const [selectedValue, setSelectedValue] = useState();
  const onChange = value => {
    if (value) {
      // Tìm sản phẩm dựa trên giá trị đã chọn
      const product = dataproducts.find(i => i.id === value.value);
      if (product) {
        setSelectedValue(value); // Cập nhật giá trị đã chọn
        onDataChange(product); // Gửi sản phẩm đã chọn đến component cha
      } else {
        setSelectedValue(undefined);
        onDataChange(undefined); // Gửi undefined nếu không tìm thấy sản phẩm
      }
    } else {
      // Nếu giá trị không tồn tại (người dùng đã xóa lựa chọn)
      setSelectedValue(undefined); // Đặt giá trị đã chọn thành undefined
      onDataChange(undefined); // và thông báo cho component cha
    }
  };
  const findLabelByValue = value => {
    const item = dataproducts.find(i => i.id === value.value);
    return item ? item.name : '';
  };

  return (
    <TreeSelect
      showSearch
      style={{ width: '50%' }}
      value={
        selectedValue
          ? { value: selectedValue, label: findLabelByValue(selectedValue) }
          : ''
      }
      dropdownStyle={{ maxHeight: 400, overflow: 'auto' }}
      placeholder="Please select"
      allowClear
      treeDefaultExpandAll
      onChange={onChange}
      treeData={treeData}
      labelInValue={true}
    />
  );
};

export default SearchBox;
