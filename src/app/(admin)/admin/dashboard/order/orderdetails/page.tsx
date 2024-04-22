'use client';
import { Button, DatePicker, DatePickerProps, Select } from 'antd';
import Header from '../../header';
import style from './style.module.css';
import TableOrderDetails from './tableorder';
import Link from 'next/link';
import { getDataWarshouse } from '../../warshouse/test';
import { useEffect, useState } from 'react';
import SearchBox from './searchbox';
import { getDataProductOrderDetails, getDataUser } from './test';
export default function OrderDetails() {
  const [datawarshouse, setDataWarshouse] = useState([]);
  const [dataproduct, setDataProduct] = useState([]);
  const [date,setDate] = useState()
  const [warshouses,setWarshouses] = useState()
  const [datausers,setDataUsers] = useState([])
  const [users,setUsers] = useState()
  const handleChange = (value: string) => {
    setWarshouses(value)
  };
  const handleChanges = (value: string) => {
    setUsers(value)
  };
  const onChange: DatePickerProps['onChange'] = (date, dateString) => {
    setDate(dateString)
  };

  const getdata = () => {
    getDataWarshouse().then(res => setDataWarshouse(res. warehouses));
    getDataProductOrderDetails().then(res => setDataProduct(res.getproduct))
    getDataUser().then(res => setDataUsers(res.data))
  };

  const [sharedData, setSharedData] = useState('');

  const handleDataChange = (newData) => {
    if(newData){
      setSharedData(newData);
    }else{
      setSharedData('')
    } 
  };

  useEffect(() => {
    getdata();
  }, []);

  return (
    <div className={`${style.zoneProduct}`}>
      <Header />
      <div className={`${style.productContainer}`}>
        <div
          style={{ fontSize: '25px', marginBottom: '10px', fontWeight: 'bold' }}
        >
          Đơn đặt hàng chi tiết
        </div>
        <div className={style.container}>
          <main className={style.main}>
            <div className={style.tableContainer}>
              <div className={style.header}>
                <Link
                  href="/admin/dashboard/order"
                  className={style.buttonGray}
                >
                  Quay lại danh sách đơn hàng
                </Link>
                <Button type="primary">Tạo đơn đặt hàng</Button>
              </div>
              <div className={style.zone}>
                <div className={style.searchBox}>
                  <span>Thông tin nhà cung cấp</span>
                  <input
                    type="search"
                    placeholder="Tìm theo tên, SDT, mã nhà cung cấp..."
                  />
                </div>
                <div className={style.selectOrder}>
                  <span>Thông tin đơn đặt hàng</span>
                  <div className={style.branch}>
                    <span className={style.span}>Chi nhánh</span>
                    <Select
                      onChange={handleChange}
                      style={{ width: 250, height: 40 }}
                      defaultValue={'Hương Vân Cát'}
                    >
                      {datawarshouse.map((warehouse, index) => (
                        <Select.Option  key={index} value={warehouse.id}>
                          {warehouse.name}
                        </Select.Option>
                      ))}
                    </Select>
                  </div>
                  <div className={style.branch}>
                    <span className={style.span}>Nhân viên</span>
                    <Select
                      onChange={handleChanges}
                      style={{ width: 250, height: 40 }}
                      defaultValue={users}
                    >
                      {datausers.map((user, index) => (
                        <Select.Option  key={index} value={user.id}>
                          {user.name}
                        </Select.Option>
                      ))}
                    </Select>
                  </div>
                  <div className={style.branch}>
                    <span className={style.span}>Ngày nhập</span>
                    <DatePicker onChange={onChange} style={{ width: 250 }} />
                  </div>
                </div>
              </div>

              <div className={style.searchBox}>
                <SearchBox dataproducts={dataproduct} onDataChange={handleDataChange}/>
              </div>
              <div className={style.tableContainer}>
                <TableOrderDetails dataIdProduct={sharedData} date={date} warehouse={warshouses} users={users}/>
              </div>
              <div className={style.footer}></div>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
}
