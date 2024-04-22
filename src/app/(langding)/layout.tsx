
'use client'
import { AnimatePresence, motion } from "framer-motion";
import dynamic from 'next/dynamic';
import { usePathname } from "next/navigation";
// import { getSession } from "next-auth/react"
import "./globals.css";
import { getCookie, setCookie } from "@root/src/cookie";
import { useEffect, useState } from "react";
import { getDataCategory } from "./test";
const ComponentFooter = dynamic(() => import('@root/src/components/server/layout/footer'), { ssr: false })
// const ComponentHeader = dynamic(() => import('@root/src/components/server/layout/header'), { ssr: false })
const ComponentHeaders = dynamic(() => import('@root/src/components/server/layout/headers'), { ssr: false })

const variants = {
  hidden: { opacity: 0, x: 0, y: 0, scale: 0 },
  enter: {
    opacity: 1,
    x: 0,
    y: 0,
    scale: 1,
    transition: { duration: 0.2, ease: [0.5, 0.5, 0.5, 0.5] }, // Custom easing for smoothness
  },
  exit: {
    opacity: 0,
    x: 0,
    y: 0,
    scale: 0.1,
    transition: { duration: 0.1, ease: [0.1, 1, 0.1, 1] }, // Custom easing for smoothness
  },
}
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const key = usePathname();
  const [datacate,setDataCategory]= useState([])
  async function getDataCategoty() {
    const data = await getDataCategory().then(res => setDataCategory(res.category))
  }

  useEffect(() => {
    getDataCategoty()
    const langCookie = getCookie('lang');
    if (!langCookie) {
      const defaultLang = 'vn';
      setCookie('lang', defaultLang, { expires: 365 });
    }
  }, []);
  return (
    <>
      <header className="sticky top-0 z-50 text-red-300 bg-white-300">
        <ComponentHeaders datacategory={datacate}></ComponentHeaders>
      </header>
      <main className="container mx-auto flex-grow overflow-hidden">
        <AnimatePresence onExitComplete={() => window.scrollTo(0, 0)}>
          <motion.main
            variants={variants}
            key={key}
            initial="hidden" // Set the initial state to variants.hidden
            animate="enter" // Animated state to variants.enter
            exit="exit" // Exit state (used later) to variants.exit
            transition={{ type: 'linear' }} // Set the transition to linear
            className=""
          >
            {children}
          </motion.main>
        </AnimatePresence>
      </main>
      <footer className="">
        <ComponentFooter></ComponentFooter>
      </footer>
    </>
  );
}
