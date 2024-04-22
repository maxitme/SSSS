import { HiOutlineTrash } from "react-icons/hi";
import 'bootstrap/dist/css/bootstrap.css';
import { useRouter } from "next/navigation";
import { useState } from "react";


export default function RemoveBtn({ id , loadData }) {
    const router = useRouter();
    const removeCustomer = async (id) => {
        const confirmed = confirm("Are you sure? " + id);

        if (confirmed) {
            const res = await fetch(`/api/admin/customer/${id}`, {
                method: "DELETE",
                headers: {
                    "Content-type": "application/json",
                },
            });

            if (res.ok) {
                loadData && loadData();
            }
        }
    };

    return (
        <button onClick={() => { removeCustomer(id) }} className="text-danger">
            <HiOutlineTrash size={24} />
        </button>
    );
}