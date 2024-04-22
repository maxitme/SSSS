'use client';
import Link from 'next/link';
import { HiPencilAlt } from 'react-icons/hi';
import { useEffect, useState } from 'react';
import RemoveBtn from './RemoveBtn';
import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';// Import Bootstrap CSS để sử dụng các lớp utility và components của Bootstrap.
import { defaultConfig } from "next/dist/server/config-shared";


const CustomerList = () => {
  const [customers, setCustomers] = useState([]);

  useEffect(() => {
    getCustomers();
  }, []);

  const getCustomers = async () => {
    try {
      const res = await fetch('http://localhost:3000/api/admin/customer', {
        cache: 'no-cache',
      });

      if (!res.ok) {
        throw new Error('Failed to fetch Customer');
      }
      var data = await res.json();
      setCustomers(data.customers);
    } catch (error) {
      console.log('Error loading Customer: ', error);
    }
  };
  return (
    <>
     <table className="table w-full flex justify-center text-align items-center">
  <thead>
    <tr>
      <th>id</th>
      <th>Họ và Tên</th>
      <th>Email</th>
      <th>Số điện thoại</th>
      <th>Ngày sinh</th>
      <th>Giới tính</th>
      <th className="text-center">Actions</th>
    </tr>
  </thead>
  <tbody>
        {customers &&
          customers.map((customer: any) =>{
            const birthDate = new Date(customer.birthDate);
            const formattedBirthDate = `${birthDate.getDate().toString().padStart(2, '0')}-${(birthDate.getMonth() + 1).toString().padStart(2, '0')}-${birthDate.getFullYear()}`;
        
          return (
            <tr key={customer.id}>
              <td>{customer.id}</td>
              <td>{customer.firstName} {customer.lastName}</td>
              <td>{customer.email}</td>
              <td>{customer.phoneNumber}</td>
              <td>{formattedBirthDate}</td>
              <td>{customer.gender}</td>
              <td className="flex justify-center space-x-1">
                <RemoveBtn id={customer.id} loadData={() => getCustomers()} />
                <Link href={'/customer/editCustomer/' + customer.id}>
                  <HiPencilAlt size={24} />
                </Link>
              </td>
            </tr>
          );
          })}
        
      </tbody>
    </table>
        </>
      );
    };
export default CustomerList;
