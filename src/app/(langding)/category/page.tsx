
import type { Metadata } from 'next';

import React, { useEffect, useState } from 'react';
import MenuCategory from './menu';
import axios from 'axios';
import { getCategory, getProductsInCategory } from './test';
import { httpGet } from '@root/src/lib/HttpClient';

export const metadata: Metadata = {
  description: 'category',
  title: 'category',
};
const Temp = async () => {
  const pr = await getProductsInCategory().then(res => res)
  const datacategory = await getCategory().then(res => res)
  return (
      
      <div className="flex justify-center">
        <MenuCategory datacate={datacategory.category} dataproduct={pr}/>
      </div>
    
  );
};

export default Temp;
