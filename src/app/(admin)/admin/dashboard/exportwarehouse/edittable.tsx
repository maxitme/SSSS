'use client';
import React, { useEffect, useState } from 'react';
import { Table } from 'antd';
import type { TableColumnsType, TableProps } from 'antd';
import { getDataOrderDetails } from './test';

interface DataType {
  key: React.Key;
  orderId: string;
  status: string;
  total: number;
  createdAt: Date;
  createdAtOrder: Date;
  userId: string;
  name: string;
  age: number;
  address: string;
  nameproductdetails: string;
  price: number;
  quantity: number;
}

const columns: TableColumnsType<DataType> = [
  {
    title: 'Order Id',
    dataIndex: 'orderId',
    width:300
  },
  {
    title: 'status',
    dataIndex: 'status',
  },
  {
    title: 'total',
    dataIndex: 'total',
    sorter: {
      compare: (a, b) => a.total - b.total,
      multiple: 2,
    },
  },
  {
    title: 'createdAt',
    dataIndex: 'createdAt',
    sorter: {
      compare: (a, b) => a.createdAt - b.createdAt,
      multiple: 1,
    },
  },
  {
    title: 'userId',
    dataIndex: 'userId',
  },
];

const columnss: TableColumnsType<DataType> = [
  {
    title: 'Name',
    dataIndex: 'nameproductdetails',
  },
  {
    title: 'Price',
    dataIndex: 'price',
  },
  {
    title: 'Quantity',
    dataIndex: 'quantity',
  },
  {
    title: 'Created At',
    dataIndex: 'createdAtOrder',
  },
];

const onChange: TableProps<DataType>['onChange'] = (
  pagination,
  filters,
  sorter,
  extra
) => {
  console.log('params', pagination, filters, sorter, extra);
};
const TableOrder: React.FC = (props: any) => {
  const { dataorder } = props;
  const [tableData, setTableData] = useState([]);
  const [tableDataOrderDetails, settableDataOrderDetails] = useState([]);
  useEffect(() => {
    const newData = dataorder.map((i, index) => ({
      key: index,
      orderId: i.id,
      status: i.status,
      total: i.total,
      createdAt: new Date(i.createdAt).toLocaleString(),
      userId: i.user.name,
    }));
    setTableData(newData);
  }, [dataorder]);

  async function handleUserClick(userId) {
    const a = await getDataOrderDetails(userId);
    const newData = a.orderDetail.map((i, index) => ({
      key: index,
      nameproductdetails: i.product.name,
      createdAtOrder: new Date(i.createdAt).toLocaleString(),
      price: i.product.price,
      quantity: i.quantity,
    }));
    settableDataOrderDetails(newData);
  }

  return (
    <div>
      <Table
        columns={columns}
        dataSource={tableData}
        onChange={onChange}
        scroll={{y:350}}
        onExpand={(expanded, record) => {
          if (expanded) {
            handleUserClick(record.orderId);
          } else {
            settableDataOrderDetails([]);
          }
        }}
        expandable={{
          expandedRowRender: record => (
            <div>
              <Table
                columns={columnss}
                dataSource={tableDataOrderDetails}
                size="small"
              />
            </div>
          ),
        }}
      />
    </div>
  );
};

export default TableOrder;
