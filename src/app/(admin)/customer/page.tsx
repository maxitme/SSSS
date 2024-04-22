"use client"
import Link from "next/link";// Import component Link từ next/link để tạo liên kết đến các trang khác trong ứng dụng Next.js.

import 'bootstrap/dist/css/bootstrap.css';// Import Bootstrap CSS để sử dụng các lớp utility và components của Bootstrap.
import { defaultConfig } from "next/dist/server/config-shared";
import CustomerList from "@src/app/(admin)/customer/CustomerList";
import Navbar from "./Navbav";
import prisma from "@root/src/lib/prisma";

// function Navbar() {
//   return (
//     <div>
//       {/* <nav className="flex justify-between px-8 py-3 items-center bg-slate-800">
//                 <a className="text-white font-bold" >
//                     Khách hàng
//                 </a>
//                 <Link className="wpb_button wpb_btn-inverse btn bg-white" href={"/customer/addCustomer"}>
//                     Thêm Khách Hàng
//                 </Link>
//             </nav> */}
//     </div>
//   );
// }
export default function Home() {
  return (
    <>
      {/* <Navbar /> */}
      <CustomerList />
    </>
  );
}
