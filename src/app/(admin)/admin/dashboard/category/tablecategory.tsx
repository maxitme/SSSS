'use client';
import React, { useEffect, useState } from 'react';
import { Table } from 'antd';
import type { TableColumnsType, TableProps } from 'antd';
import { DataSourceItemType } from 'antd/es/auto-complete';
import { getCategoryHighLevel } from './create/test';
import { getDataCategoryById } from '../order/test';

type TableRowSelection<T> = TableProps<T>['rowSelection'];

interface DataType {
  key: React.Key;
  imagecategory: DataSourceItemType;
  namecategory: string;
  count: number;
  id: number;
}

const columns: TableColumnsType<DataType> = [
  {
    title: 'Hình ảnh',
    dataIndex: 'imagecategory',
  },
  {
    title: 'Tên danh mục',
    dataIndex: 'namecategory',
  },
  {
    title: 'Số lượng',
    dataIndex: 'count',
  },
];

const TableCategory: React.FC = (props: any) => {
  const [datacategory, setDataCategory] = useState([]);
  // const [datacategory, setDataCategory] = useState([]);
  async function fetchData() {
    const getCate = await getCategoryHighLevel();
    setDataCategory(getCate.data);
  }

  useEffect(() => {
    fetchData();
  }, [props.refreshDataTrigger]);

  const handleSelectRow = row => {
    props.onRowSelect(row);
  };

  const data: DataType[] = [];
  for (let i = 0; i < datacategory.length; i++) {
    if (datacategory[i].parentId === null) {
      data.push({
        key: i,
        id: datacategory[i].id as any,
        imagecategory: (
          <img
            style={{ width: '50px' }}
            src="https://bizweb.dktcdn.net/thumb/large/100/436/707/products/dsc05060.jpg?v=1709469295020"
          ></img>
        ),
        namecategory: datacategory[i].name as any, // Chỉnh sửa ở đây: sử dụng datacate[i].name nếu datacate là một mảng của các đối tượng
        count: 1,
      });
    }
  }

  const [selectedRowKeys, setSelectedRowKeys] = useState<React.Key[]>([]);
  const onSelectChange = (newSelectedRowKeys: React.Key[]) => {
    setSelectedRowKeys(newSelectedRowKeys);
    const selectedIds = newSelectedRowKeys
      .map(key => {
        // Tìm hàng trong data với key tương ứng và trả về id của nó
        const item = data.find(item => item.key === key);
        return item ? item.id : null; // Trả về id nếu tìm thấy, ngược lại trả về null
      })
      .filter(id => id !== null); // Lọc ra các giá trị không phải null
    handleSelectRow(selectedIds);
  };

  const rowSelection: TableRowSelection<DataType> = {
    selectedRowKeys,
    onChange: onSelectChange,
    selections: [
      Table.SELECTION_ALL,
      Table.SELECTION_INVERT,
      Table.SELECTION_NONE,
      {
        key: 'odd',
        text: 'Select Odd Row',
        onSelect: changeableRowKeys => {
          let newSelectedRowKeys = [];
          newSelectedRowKeys = changeableRowKeys.filter((_, index) => {
            if (index % 2 !== 0) {
              return false;
            }
            return true;
          });
          setSelectedRowKeys(newSelectedRowKeys);
        },
      },
      {
        key: 'even',
        text: 'Select Even Row',
        onSelect: changeableRowKeys => {
          let newSelectedRowKeys = [];
          newSelectedRowKeys = changeableRowKeys.filter((_, index) => {
            if (index % 2 !== 0) {
              return true;
            }
            return false;
          });
          setSelectedRowKeys(newSelectedRowKeys);
        },
      },
    ],
  };
  const [tableDataCategotyChildren, settableDataCategoryChildren] = useState([]);

  async function handleUserClick(userId) {
    const a = await getDataCategoryById(userId);
    const newData = a.data.map((i, index) => ({
      key: i.id,
      id: i.name as any,
      imagecategory: (
        <img
          style={{ width: '50px' }}
          src="https://bizweb.dktcdn.net/thumb/large/100/436/707/products/dsc05060.jpg?v=1709469295020"
        ></img>
      ),
      namecategory: i.name as any, // Chỉnh sửa ở đây: sử dụng datacate[i].name nếu datacate là một mảng của các đối tượng
      count: 1,
    }));
    settableDataCategoryChildren(newData);
  }

  return (
    <Table
      scroll={{ x: 1000, y: 450 }}
      expandable={{
        expandedRowRender: record => (
          <div>
            <Table
              columns={columns}
              dataSource={tableDataCategotyChildren}
              size="small"
            />
          </div>
        ),
      }}
      onExpand={(expanded, record) => {
        if (expanded) {
          handleUserClick(record.id);
        } else {
          settableDataCategoryChildren([]);
        }
      }}
      rowSelection={rowSelection}
      columns={columns}
      dataSource={data}
      style={{ border: '1px solid #C4CDD5', marginTop: '10px' }}
    />
  );
};

export default TableCategory;
