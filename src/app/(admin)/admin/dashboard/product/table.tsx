'use client';
import React, { useEffect, useState } from 'react';
import { Table } from 'antd';
import type { TableColumnsType, TableProps } from 'antd';
import { DataSourceItemType } from 'antd/es/auto-complete';
import { getCategory, getProduct } from './test';
import Link from 'next/link';

type TableRowSelection<T> = TableProps<T>['rowSelection'];

interface DataType {
  key: React.Key;
  product: DataSourceItemType;
  nameproduct: string;
  warehouse: string;
  sectors: string;
  supplier: string;
  id: number;
  status: any
}

const columns: TableColumnsType<DataType> = [
  {
    title: 'Hình ảnh',
    dataIndex: 'product',
  },
  {
    title: 'Tên sản phẩm',
    dataIndex: 'nameproduct',
  },
  {
    title: 'Kho',
    dataIndex: 'warehouse',
  },
  {
    title: 'Tình trạng',
    dataIndex: 'status',
  },
  {
    title: 'Loại',
    dataIndex: 'sectors',
  },
  {
    title: 'Nhà cung cấp',
    dataIndex: 'supplier',
  },
];

const TableProduct: React.FC = (props: any) => {
  const { refreshDataTrigger, onRowSelect } = props;
  const [dataproduct, setDataProduct] = useState([]);
  const [datacategory, setDataCategory] = useState([]);
  async function fetchData() {
    const getproducts = await getProduct();
    const getCate = await getCategory();
    setDataProduct(getproducts.getproduct);
    setDataCategory(getCate.getCategory.reverse());
  }

  useEffect(() => {
    fetchData();
  }, [refreshDataTrigger]);

  const handleSelectRow = row => {
    // Gọi hàm callback và truyền dữ liệu hàng được chọn
    onRowSelect(row);
  };

  const data: DataType[] = [];
  for (let i = 0; i < dataproduct.length; i++) {
    const matchingCategory = datacategory.find(
      category => category.id === dataproduct[i].categoryId
    );
    const sectorName = matchingCategory
      ? matchingCategory.name
      : 'Không xác định';
    data.push({
      key: i,
      id: dataproduct[i].id as any,
      product: (
        <img
          style={{ width: '50px' }}
          src="https://bizweb.dktcdn.net/thumb/large/100/436/707/products/dsc05060.jpg?v=1709469295020"
        ></img>
      ),
      nameproduct: dataproduct[i].name as any,
      warehouse: dataproduct[i].WarehouseDetails[0] === undefined ? `0 trên 1 loại`:`${dataproduct[i].WarehouseDetails[0].quantity} trên 1 loại`,
      status: dataproduct[i].status ? `đang bán` : `ngừng bán`,
      sectors: sectorName,
      supplier: `viet nam`,
    });
  }
  // 

  const [selectedRowKeys, setSelectedRowKeys] = useState<React.Key[]>([]);

  const onSelectChange = (newSelectedRowKeys: React.Key[]) => {
    const selectedIds = newSelectedRowKeys
      .map(key => {
        // Tìm hàng trong data với key tương ứng và trả về id của nó
        const item = data.find(item => item.key === key);
        return item ? item.id : null; // Trả về id nếu tìm thấy, ngược lại trả về null
      })
      .filter(id => id !== null); // Lọc ra các giá trị không phải null
    handleSelectRow(selectedIds);
    setSelectedRowKeys(newSelectedRowKeys);
  };

  const rowSelection: TableRowSelection<DataType> = {
    selectedRowKeys,
    onChange: onSelectChange,
    selections: [
      Table.SELECTION_ALL,
      Table.SELECTION_INVERT,
      Table.SELECTION_NONE,
      {
        key: 'update',
        text: 'Update product',
        onSelect: () => {
          if (selectedRowKeys.length > 0) {
            return (
              <Link href="/admin/dashboard/product/update">
                <a>Update product</a>
              </Link>
            );
          } else {
            return 'no';
          }
        },
      },
    ],
  };

  return (
    <Table
      rowSelection={rowSelection}
      columns={columns}
      dataSource={data}
      style={{ border: '1px solid #C4CDD5', marginTop: '10px' }}
    />
  );
};

export default TableProduct;
