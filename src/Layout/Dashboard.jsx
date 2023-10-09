import React from 'react';
import { FaFileAlt, FaFolder, FaHome, FaUser, FaUsers } from 'react-icons/fa';
import { Link, Outlet } from 'react-router-dom';

const Dashboard = () => {

    // TODO: make admin dynamically fetched
    const isAdmin = true;
    return (
        <div className="drawer lg:drawer-open">
            <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content flex flex-col items-center justify-center">
                {/* Page content here */}
                <Outlet></Outlet>
                <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>

            </div>
            <div className="drawer-side">
                <label htmlFor="my-drawer-2" aria-label="close sidebar" className="drawer-overlay"></label>
                <ul className="menu p-4 w-80 min-h-full bg-base-200 text-base-content">
                    {
                        isAdmin ? <>
                            <li><Link to="/dashboard/adminHome"><FaHome></FaHome>Admin Home</Link></li>                    
                            <li><Link to="/dashboard/users"><FaUsers></FaUsers> All Users</Link></li>
                        </>

                            : <>
                                {/* Sidebar content here */}
                                <li><Link to="/dashboard/userHome"><FaHome></FaHome>User Home</Link></li>
                                <li><Link to="/dashboard/userProfile"><FaFolder></FaFolder>My Profile</Link></li>
                            </>
                    }




                </ul>

            </div>
        </div>
    );
};

export default Dashboard;