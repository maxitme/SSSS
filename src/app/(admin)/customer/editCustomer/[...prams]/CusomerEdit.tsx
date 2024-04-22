'use client';
import { useEffect, useState } from 'react';
import EditCustomerForm from '../../EditCustomerForm';
import { useParams } from 'next/navigation';

export default function CusomerEdit() {
  const Paramter = useParams();
  const [customer, setCustomer] = useState<user>();
  const getCustomerID = async () => {
    try {
      const id =  Paramter.prams[0];
      const res = await fetch(`http://localhost:3000/api/admin/customer/${id}`, {
       method: 'GET',
      
      });

      if (!res.ok) {
        throw new Error('Failed to fetch topic');
      }

      return res.json();
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getCustomerbyid();
  }, []);
  const getCustomerbyid = async () => {
    const data = await getCustomerID();
    setCustomer(data.customer as user);
  };
  return <>{customer && <EditCustomerForm {...customer} />}</>;
}
