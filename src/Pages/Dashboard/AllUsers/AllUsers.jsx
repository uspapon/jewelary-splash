import { useEffect, useState } from "react";
import { FaUserShield } from "react-icons/fa";

const AllUsers = () => {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/users')
            .then(res => res.json())
            .then(data => setUsers(data))

    }, [])


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
                                    : <button className="btn btn-ghost bg-indigo-800 text-white"><FaUserShield></FaUserShield></button>

                                    }</td>
                                <th>Details</th>
                            </tr>)
                        }
                        
                        
                    </tbody>
                    

                </table>
            </div>


        </div>
    );
};

export default AllUsers;