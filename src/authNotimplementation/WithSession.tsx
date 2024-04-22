import { getServerSession } from "next-auth";
import { authOptions } from "./index";
import { useState, useEffect } from "react";

const WithSession = async (WrappedComponent) => {
  const session = await getServerSession(authOptions);

  'use client'
  const WithSessionComponent = (props) => {
    return <WrappedComponent session={session} {...props} />;
  };

  return WithSessionComponent;
};


export const getSession = async () => {
  const session = await getServerSession(authOptions);
  return session
}

export default WithSession;