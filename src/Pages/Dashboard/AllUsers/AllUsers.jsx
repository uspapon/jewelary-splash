import { useEffect, useState } from "react";
import { FaUserShield } from "react-icons/fa";

const AllUsers = () => {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/users')
            .then(res => res.json())
            .then(data => setUsers(data))

    }, [])

    const handleManageRole = (id) => {
        console.log("user idddddd",id);
        fetch(`http://localhost:5000/users/admin/${id}`, {
            method: 'PATCH'
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.modifiedCount) {
                    
                    Swal.fire({
                        position: 'top-end',
                        icon: 'success',
                        title: `${user.name} has been made admin`,
                        showConfirmButton: false,
                        timer: 1500
                    })
                }
            })

    }


    return (
        <div>
            <h2 className="text-2xl">All Users</h2>
            <p>Total users: {users.length}</p>
            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Role</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            users.map((user, index) => <tr key={user._id}>
                                <th>{index + 1}</th>
                                <td>{user.name}</td>
                                <td>{user.email}</td>
                                <td>{
                                    user.role === "admin" ? "admin"
                                        : "user"

                                }</td>
                                <th>
                                <button onClick={() => handleManageRole(user._id)} className="btn btn-ghost text-white bg-orange-600 me-4"><FaUserShield></FaUserShield></button>
                                </th>
                            </tr>)
                        }


                    </tbody>


                </table>
            </div>


        </div>
    );
};

export default AllUsers;