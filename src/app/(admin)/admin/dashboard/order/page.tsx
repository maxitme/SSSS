'use client';

import Header from '../header';
import style from './style.module.css';
import Link from 'next/link';
import { exportToExcel, getDataOrder } from './test';
import { useEffect, useState } from 'react';
import TableOrder from './edittable';

const Component = () => {
  return (
    <main className={style.main}>
      <div className={style.tableContainer}>
        <div className="icon"></div>
        <h2>Cửa hàng của bạn chưa có đơn đặt hàng nhập nào</h2>
        <p>Thêm mới hoặc nhập danh sách đơn hàng nhập</p>
        <Link href={''}>
          <button className={style.buttonBlue}>Nhập file excel</button>
        </Link>

        <Link href={'./order/orderdetails'}>
          <button className={style.buttonGreen}>Tạo đơn đặt hàng</button>
        </Link>
      </div>
    </main>
  );
};
export default function Order() {
  const [dataOrder, setDataOrder] = useState([]);
  const getData = () => {
    getDataOrder().then(res => setDataOrder(res.data));
  };

  function handelExportExcel(){
    return exportToExcel(dataOrder,'orderfile')
  }

  useEffect(() => {
    getData();
  }, []);
  return (
    <div className={`${style.zoneProduct}`}>
      <Header />
      <div className={`${style.productContainer}`}>
        <div
          style={{ fontSize: '25px', marginBottom: '10px', fontWeight: 'bold' }}
        >
          Đơn đặt hàng nhập
        </div>
        <div className={style.container}>
          {dataOrder !== null ? (
            <div>
              <TableOrder dataorder={dataOrder} />
              <Link href={''}>
                <button className={style.buttonBlue} onClick={() => handelExportExcel()}>Xuất file excel</button>
              </Link>

              <Link href={'./order/orderdetails'}>
                <button className={style.buttonGreen}>Tạo đơn đặt hàng</button>
              </Link>
            </div>
          ) : (
            <Component />
          )}
        </div>
      </div>
    </div>
  );
}
