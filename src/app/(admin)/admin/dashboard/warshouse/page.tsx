'use client';

import Header from '../header';
import style from './style.module.css';
import WarshouseTable from './edittable';
export default function Warshouse() {
  return (
    <div className={`${style.zoneProduct}`}>
      <Header />
      <div className={`${style.productContainer}`}>
        <div
          style={{ fontSize: '25px', marginBottom: '10px', fontWeight: 'bold' }}
        >
          Quản lý kho
        </div>
        <div className={style.container}>
          <main className={style.main}>
            <div className={style.tableContainer}>
              <WarshouseTable/>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
}
