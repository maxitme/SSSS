'use client'
import React from 'react';
import { Button } from 'antd';
import { signOut } from "next-auth/react";
const SignOut = async () => {
  return (
    <div style={{ marginTop: 200 }}>
      <div>
        <Button onClick={() => {
          signOut({ callbackUrl: '/' })
        }}> Log out</Button>
      </div>
    </div>
  );
};

export default SignOut;