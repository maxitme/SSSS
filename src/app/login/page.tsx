'use client'
import { useState } from 'react';
import { signIn } from "next-auth/react";
import { PROVIDER_TYPE } from '@root/src/common/constant';
const SignInForm = () => {
  const [email, setEmail] = useState('john@example.com');
  const [password, setPassword] = useState('password123');

  const handleSignIn = async (e) => {
    e.preventDefault();
    signIn(PROVIDER_TYPE.Credentials, { password, email: email, callbackUrl: "/" });
  };

  return (
    <div className="flex flex-col min-h-screen font-sans antialiased bg-gradient-to-r from-blue-500 to-purple-600">
      <form onSubmit={handleSignIn} >
        <label>
          Email:
          <input type="text" value={email} onChange={(e) => setEmail(e.target.value)} />
        </label>
        <br />
        <label>
          Password:
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        </label>
        <br />
        <button type="submit">Sign In</button>
      </form>
    </div>
  );
};

export default SignInForm;