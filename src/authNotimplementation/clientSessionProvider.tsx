"use client";
import { SessionProvider } from "next-auth/react";

type Props = {
  session: any
  children?: React.ReactNode;
};

export const NextAuthProvider = ({ session, children }: Props) => {
  if (session)
    return <SessionProvider session={session}>{children}</SessionProvider>;
  return <>{children}</>
};