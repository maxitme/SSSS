'use client';
import Header from '../header';
import style from '../product/style.module.css';
import { Button } from 'antd';
import SelectFilter from '../product/select';
import TableCategory from './tablecategory';
import Link from 'next/link';
import {useState } from 'react';
import { deleteIdCategory } from './create/test';
export default function Category() {

  const [selectedRow, setSelectedRow] = useState();
  const [refreshDataTrigger, setRefreshDataTrigger] = useState(false);
  const handleRowSelection = (row) => {
    // console.log("Dữ liệu hàng được chọn:", row);
    setSelectedRow(row);
  }
  const handelDeleteCategory = async () => {
     if (selectedRow) {
      await deleteIdCategory(selectedRow)
      setRefreshDataTrigger(prev => !prev);
     }
  }
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
          Quản lý danh mục
        </div>
        <div className={`${style.upDownList}`}>
          <div> Tất cả danh mục</div>
          <div>
            <Link href={'/admin/dashboard/category/create'}>
              <Button type="primary">Thêm danh mục</Button>
            </Link>
            <Button onClick={() => handelDeleteCategory()} type="primary" danger style={{marginLeft:'10px',marginRight:10}}>Xóa danh mục</Button>
            <Link href={
                selectedRow
                  ? `/admin/dashboard/category/update?${getParams()}`
                  : ''
              }>
              <Button type="primary">Sửa danh mục</Button>
            </Link>
          </div> 
        </div>
        <div className={`${style.tableProduct}`}>
          <div style={{ fontSize: '20px' }}>
            <div className={`${style.filter}`}>
              <SelectFilter />
            </div>
          </div>
          <div>
            <TableCategory onRowSelect={handleRowSelection} refreshDataTrigger={refreshDataTrigger}/>
          </div>
        </div>
      </div>
    </div>
  );
}
