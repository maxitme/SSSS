"use client";
import React from 'react';
import { Button, } from 'antd';

import { changeLanguage } from '@src/i18n/client'

const TestClient = (props) => {
  return (
    <div>
      <div>
        <Button onClick={() => { changeLanguage('en') }}>Change Client EN</Button>
        <Button onClick={() => { changeLanguage('vn') }}>Change Client VN</Button>
      </div>
    </div>
  );
};

export default TestClient;