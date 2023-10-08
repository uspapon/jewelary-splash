import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../providers/AuthProviders";

const Navbar = () => {
    const {user} = useContext(AuthContext);
    const navOptions = <>
        <li><a>Home</a></li>
        {/* <li>
                                <a>Home</a>
                                <ul className="p-2">
                                    <li><a className="text-white">Submenu 1</a></li>
                                    <li><a>Submenu 2</a></li>
                                </ul>
                            </li> */}
        <li><a>All jewelry</a></li>
        <li><a>My jewelry</a></li>
        <li><a>Add jewelry</a></li>
        <li><a>Blog</a></li>
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
                    <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                        <div className="w-5 rounded-full">
                            <img src="/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                            
                        </div>
                    </label>
                    <Link className="text-white" to='/'>Welcome {user}</Link>
                    <a href="/login" className="btn btn-link text-white">Login</a>
                    <a href="/register" className="btn btn-link text-white">Register</a>
                </div>
            </div>
        </div>
    );
};

export default Navbar;