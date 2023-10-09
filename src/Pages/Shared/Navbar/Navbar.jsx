import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../providers/AuthProviders";

const Navbar = () => {
    const { user, logOut } = useContext(AuthContext);
    const handleLogout = () => {
        logOut()
            .then(() => { console.log("successfully logged out") })
            .catch(error => console.log(error));
    }
    const navOptions = <>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/alljewlery">All Jewelry</Link></li>
        <li><Link to="/myjewlery">My jewelry</Link></li>
        <li><Link to="/addjewlery">Add jewelry</Link></li>
        <li><Link to="/blog">Blog</Link></li>
    </>
    return (
        <div>
            <div className="navbar bg-indigo-800 text-white">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-pink-700 rounded-box w-52">
                            {navOptions}
                        </ul>
                    </div>
                    <a className="btn btn-ghost text-xl uppercase font-bold">Splash!</a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {navOptions}
                    </ul>
                </div>
                <div className="navbar-end">
                    <a data-tooltip-id="my-tooltip" data-tooltip-content={user && user?.displayName}>
                        {user &&
                            <img
                                src={user && user?.photoURL}
                                alt="Profile"
                                className="h-10 w-10 rounded-full mr-4"
                            />}
                    </a>
                    {
                        user ? <>
                            <Link to="/dashboard/userProfile" className="ps-1 pe-2"> My Profile</Link>
                            <button onClick={handleLogout} className="btn btn-xs">Logout</button>
                            
                        </>
                            : <>
                                <a href="/login" className="btn btn-link text-white">Login</a>
                            </>
                    }


                    <a href="/register" className="btn btn-link text-white">Register</a>
                </div>
            </div>
        </div>
    );
};

export default Navbar;