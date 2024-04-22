import Link from "next/link";// Import component Link từ next/link để tạo liên kết đến các trang khác trong ứng dụng Next.js.

import 'bootstrap/dist/css/bootstrap.css';// Import Bootstrap CSS để sử dụng các lớp utility và components của Bootstrap.

export default function Navbar() {
    return (
        <div>
            <nav className="flex justify-between px-8 py-3 items-center bg-slate-800">
                <Link className="text-white font-bold" href={"/customer"}>
                    Khách Hàng
                </Link>
                <Link className="wpb_button wpb_btn-inverse btn bg-white" href={"/customer/addCustomer"}>
                    Thêm Khách Hàng
                </Link>
            </nav>
        </div>
    );
}