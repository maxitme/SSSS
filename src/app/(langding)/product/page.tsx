import type { Metadata } from 'next';
import React from 'react';
import Client from './client';
import { sample } from './test';
import dynamic from 'next/dynamic';
import axios from 'axios';

const CardComponent = dynamic(() => import('./card'), { ssr: false });

export const metadata: Metadata = {
  description: 'product',
  title: 'product',
};
const Product = async () => {
  // const pr = await axios.get('http://localhost:3000/api/product');
  return (
    <div>
      {/* <div className="grid grid-cols-5 gap-2 mb-5 ml-10">
        {pr.data.product.map((item, index) => {
          return <CardComponent key={index} item={item}></CardComponent>;
        })}
      </div>

      <div className="p-6 max-w-sm mx-auto bg-white rounded-xl shadow-lg flex items-center space-x-4">
        <div className="shrink-0">
          <img className="h-12 w-12" src="/img/logo.svg" alt="ChitChat Logo" />
        </div>
        <div>
          {sample()}
          <div className="text-xl font-medium text-black">ChitChat</div>
          <p className="text-slate-500">You have a new message!</p>
          <Client></Client>
          <Client></Client>
          <Client></Client>
          <Client></Client>
          <Client></Client>
          <Client></Client>
        </div>
      </div> */}

      
    </div>
  );
};

export default Product;
