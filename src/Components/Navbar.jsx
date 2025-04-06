import React, { useContext } from "react";
import { Link, NavLink } from "react-router";
import { AuthContext } from "../Provider/AuthProvider";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);

  return (
    <div className="navbar fixed top-0 left-0 right-0 z-50 bg-base-100 px-4 md:px-10 shadow-md hover:shadow-lg transition-shadow duration-300">
      {/* Left: Logo */}
      <div className="flex-1">
        <Link to="/" className="text-xl font-bold">
          Volunteer
        </Link>
      </div>

      {/* Center: Nav Links */}
      <div className="hidden md:flex flex-none">
        <ul className="menu menu-horizontal px-1 space-x-2">
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/all_volunteer_need_post">
              All Volunteer Need Posts
            </NavLink>
          </li>
        </ul>
      </div>

      {/* Right: User Section */}
      <div className="flex-none">
        {!user ? (
          <Link to="/login" className="btn btn-outline btn-primary btn-sm">
            Login
          </Link>
        ) : (
          <div className="dropdown dropdown-end">
            <label
              tabIndex={0}
              className="btn btn-ghost btn-circle avatar tooltip tooltip-bottom"
              data-tip={user.displayName}
            >
              <div className="w-10 rounded-full">
                <img src={user.photoURL || "/default-avatar.png"} alt="user" />
              </div>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-slate-500 text-white rounded-box w-56"
            >
              <li>
                <NavLink to="/add_Volunteer_need_post">
                  Add Volunteer Need Post
                </NavLink>
              </li>
              <li>
                <NavLink to="/manage_my_posts">Manage My Posts</NavLink>
              </li>
              <li>
                <button onClick={logOut}>Logout</button>
              </li>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
