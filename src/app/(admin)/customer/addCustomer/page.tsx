"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { PrismaClient } from "@prisma/client";


const db = new PrismaClient();


export default function AddCustomer() {
    const [firstName, setfirstName] = useState("")
    const [lastName, setlastName] = useState("")
    const [email, setemail] = useState("")
    const [phoneNumber, setphoneNumber] = useState("")
    const [birthDate, setbirthDate] = useState("")
    const [gender, setgender] = useState("")

    
    const router = useRouter();

    const handleSubmit = async (e) => {
        e.preventDefault();

        
        // Post the form data to your API
        const jsonBody = JSON.stringify({ firstName, lastName, email, phoneNumber, birthDate,gender })
        try{
            // Gửi yêu cầu POST tới API để thêm khách hàng mới.
            const res = await fetch('http://localhost:3000/api/admin/customer', {
                method: "POST",
                headers: {
                    "Content-type": "application/json",
                },
                // Chuyển đổi object dữ liệu của ckhách hàng thành chuỗi JSON để gửi trong body của request.
                body: jsonBody,
            });
            console.log(res);
            if(res.ok){
                router.push('http://localhost:3000/customer/'); // Điều hướng về trang chủ nếu thêm thành công.
            }else{
                throw new Error("Failed to create a Customer");
            }
        }catch (error){
            console.log(error);
        }

    };

    return (
        <div>
            <form onSubmit={handleSubmit} style={{ fontFamily: 'Arial, sans-serif', maxWidth: '600px', margin: 'auto' }}>
                <div style={{ marginBottom: '16px' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px' }}>
                        <input
                            type="text"
                            name="firstName"
                            value={firstName}
                            onChange={(e)=> setfirstName(e.target.value)}
                            placeholder="Nhập tên"
                            required
                            style={{ flexGrow: 1, marginRight: '8px', padding: '10px', border: '1px solid #ccc', borderRadius: '4px' }}
                        />
                        <input
                            type="text"
                            name="lastName"
                            value={lastName}
                            onChange={(e)=> setlastName(e.target.value)}
                            placeholder="Nhập họ"
                            required
                            style={{ flexGrow: 1, padding: '10px', border: '1px solid #ccc', borderRadius: '4px' }}
                        />
                    </div>
                    <input
                        type="email"
                        name="email"
                        value={email}
                        onChange={(e)=> setemail(e.target.value)}
                        placeholder="Nhập email"
                        required
                        style={{ width: '100%', marginBottom: '8px', padding: '10px', border: '1px solid #ccc', borderRadius: '4px' }}
                    />
                    <input
                        type="tel"
                        name="phoneNumber"
                        value={phoneNumber}
                        onChange={(e)=> setphoneNumber(e.target.value)}
                        placeholder="Nhập số điện thoại"
                        required
                        style={{ width: '100%', marginBottom: '8px', padding: '10px', border: '1px solid #ccc', borderRadius: '4px' }}
                    />
                    <input
                        type="date"
                        name="birthDate"
                        value={birthDate}
                        onChange={(e)=> setbirthDate(e.target.value)}
                        style={{ width: '100%', padding: '10px', border: '1px solid #ccc', borderRadius: '4px' }}
                    />
                    <select
                        name="gender"
                        value={gender}
                        onChange={(e)=> setgender(e.target.value)}
                        style={{ width: '100%', marginTop: '8px', padding: '10px', border: '1px solid #ccc', borderRadius: '4px', background: 'white' }}
                    >
                        <option value="Male">Nam</option>
                        <option value="Female">Nữ</option>
                        <option value="Other">Khác</option>
                    </select>
                </div>
                <button type="submit" style={{ padding: '10px 15px', border: 'none', borderRadius: '4px', background: '#007bff', color: 'white', cursor: 'pointer' }}>Thêm thông tin khác hàng </button>
            </form>
        </div>
    );

};
