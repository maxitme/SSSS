'use client';
import { DownloadOutlined, UploadOutlined } from '@ant-design/icons';
import Header from '../header';
import { Button } from 'antd';
import style from './style.module.css';
import TableProduct from './table';
import SelectFilter from './select';
import Link from 'next/link';
import { useState } from 'react';
import {updateStatusProduct } from './test';

export default function Product() {
  const [selectedRow, setSelectedRow] = useState<any>();
  const [refreshDataTrigger, setRefreshDataTrigger] = useState(false);
  const handleRowSelection = row => {
    console.log('Dữ liệu hàng được chọn:', row);
    setSelectedRow(row);
  };

  const handelDeleteproduct = async () => {
    if (selectedRow) {
      await updateStatusProduct(selectedRow);
      setRefreshDataTrigger(prev => !prev);
    }
  };

  const getParams = () => {
    if (selectedRow && selectedRow.length > 0) {
      return selectedRow.map(id => `id=${id}`).join('&');
    } else {
      return '';
    }
  };

  return (
    <div className={`${style.zoneProduct}`}>
      <Header />
      <div className={`${style.productContainer}`}>
        <div
          style={{ fontSize: '25px', marginBottom: '10px', fontWeight: 'bold' }}
        >
          Sản phẩm
        </div>
        <div className={`${style.upDownList}`}>
          <div className={`${style.upDown}`}>
            <div>
              <UploadOutlined /> Nhập danh sách
            </div>
            <div>
              <DownloadOutlined /> Xuất danh sách
            </div>
          </div>
          <div>
            <Link href={'/admin/dashboard/product/create'}>
              <Button type="primary">Thêm sản phẩm</Button>
            </Link>
            <Button
              onClick={() => handelDeleteproduct()}
              type="primary"
              danger
              style={{ marginLeft: '10px' }}
            >
              Xóa sản phẩm
            </Button>
            <Link
              href={
                selectedRow
                  ? `/admin/dashboard/product/update?${getParams()}`
                  : ''
              }
            >
              <Button style={{ marginLeft: '10px' }} type="primary">
                Sửa sản phẩm
              </Button>
            </Link>
          </div>
        </div>
        <div className={`${style.tableProduct}`}>
          <div style={{ fontSize: '20px' }}>
            Tất cả sản phẩm
            <div className={`${style.filter}`}>
              <div>
                <SelectFilter />
              </div>

              <div>
                <SelectFilter />
              </div>
              <div>
                <SelectFilter />
              </div>
            </div>
          </div>
          <div>
            <TableProduct
              onRowSelect={row => handleRowSelection(row)}
              refreshDataTrigger={refreshDataTrigger}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
