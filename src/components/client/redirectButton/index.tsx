'use client'
import React, { useEffect } from 'react';
import { Button } from 'antd';
import { useRouter } from 'next/navigation'
const RedirectButton = (props) => {
  const router = useRouter()
  return (
    <div style={{ marginTop: 200 }}>
      <Button onClick={() => router.push(props.link)}>
        {props.text}
      </Button>
    </div>
  );
};

export default RedirectButton;