'use client';
import { useState } from 'react';
// Make sure to import 'useRouter' from 'next/router' instead of 'next/navigation'
import { useRouter } from 'next/navigation';
export default function EditCustomerForm({id,firstName,lastName,email,phoneNumber,birthDate,gender,
}: user) {
 
  const [newFirstName, setnewfirstName] = useState(firstName);
  const [newLastName, setnewlastName] = useState(lastName);
  const [newEmail, setnewemail] = useState(email);
  const [newPhoneNumber, setnewphoneNumber] = useState(phoneNumber);
  const [newBirthDate, setnewBirthDate] = useState(birthDate);
  const [newGender, setnewGender] = useState(gender);

  const router = useRouter();

  const handleSubmit = async () => {
    try {
      const response = await fetch(
        `http://localhost:3000/api/admin/customer/${id}`,
        {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            newFirstName,
            newLastName,
            newEmail,
            newPhoneNumber,
          }),
        }
      );

      if (response.ok) {
        router.push('/customer');
      }
    } catch (error) {
      console.log('Error updating Info: ', error);
      return;
    }
  };

  return (
    <div>
      <div
       
        style={{
          fontFamily: 'Arial, sans-serif',
          maxWidth: '600px',
          margin: 'auto',
        }}
      >
        <div style={{ marginBottom: '16px' }}>
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              marginBottom: '8px',
            }}
          >
            <input
              type="text"
              name="lastName"
              value={newLastName}
              onChange={e => setnewlastName(e.target.value)}
              placeholder="Nhập họ"
              required
              style={{
                flexGrow: 1,
                marginRight: '8px',
                padding: '10px',
                border: '1px solid #ccc',
                borderRadius: '4px',
              }}
            />
            <input
              type="text"
              name="firstName"
              value={newFirstName}
              onChange={e => setnewfirstName(e.target.value)}
              placeholder="Nhập tên"
              required
              style={{
                flexGrow: 1,
                padding: '10px',
                border: '1px solid #ccc',
                borderRadius: '4px',
              }}
            />
          </div>
          <input
            type="email"
            name="email"
            value={newEmail}
            onChange={e => setnewemail(e.target.value)}
            placeholder="Nhập email"
            required
            style={{
              width: '100%',
              marginBottom: '8px',
              padding: '10px',
              border: '1px solid #ccc',
              borderRadius: '4px',
            }}
          />
          <input
            type="tel"
            name="phoneNumber"
            value={newPhoneNumber}
            onChange={e => setnewphoneNumber(e.target.value)}
            placeholder="Nhập số điện thoại"
            required
            style={{
              width: '100%',
              marginBottom: '8px',
              padding: '10px',
              border: '1px solid #ccc',
              borderRadius: '4px',
            }}
          />
          <input
            type="date"
            name="birthDate"
            value={newBirthDate?.birthDate}
            onChange={e => setnewBirthDate(e.target.value)}
            style={{
              width: '100%',
              padding: '10px',
              border: '1px solid #ccc',
              borderRadius: '4px',
            }}
          />
          <select
            name="gender"
            value={newGender?.gender}
            onChange={e => setnewGender(e.target.value)}
            style={{
              width: '100%',
              marginTop: '8px',
              padding: '10px',
              border: '1px solid #ccc',
              borderRadius: '4px',
              background: 'white',
            }}
          >
            <option value="Male">Nam</option>
            <option value="Female">Nữ</option>
            <option value="Other">Khác</option>
          </select>
        </div>
        <button
          onClick={() => handleSubmit()}
          style={{
            padding: '10px 15px',
            border: 'none',
            borderRadius: '4px',
            background: '#007bff',
            color: 'white',
            cursor: 'pointer',
          }}
        >
          Cập nhật thông tin khác hàng
        </button>
      </div>
    </div>
  );
}

// Path: src/app/%28admin%29/customer/EditCustomerForm.tsx
