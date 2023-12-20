import React from "react";
import { Link } from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import auth from "../../firebase.init";
import { useAuthState } from "react-firebase-hooks/auth";
import { signOut } from "firebase/auth";
import { faCartShopping, faUser } from "@fortawesome/free-solid-svg-icons";
import { CartState } from "../../hooks/context/Context";
import useAdmin from "../../hooks/useAdmin";
import Loading from "./Loading";

const Navbar = () => {
  const [user] = useAuthState(auth);
  const [admin,setAdminLoading] = useAdmin(user);

  const logout = () => {
    signOut(auth);
  };

  const {
    state: { card },
    dispatch,
  } = CartState();

 

  return (
    <div className="navbar bg-base-600 px-3 ">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost btn-circle">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h7"
              />
            </svg>
          </label>

          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/allproduct">All Product</Link>
            </li>
            <li>
              {admin && (
                <Link className="font-medium " to="/dashboard">
                  Dashboard
                </Link>
              )}
            </li>
            <li>
              <Link to="/blog">Blog</Link>
            </li>
          </ul>
        </div>
      </div>

                

      <div className="navbar-center">
        <p className=" normal-case text-3xl font-serif">
          <Link to="/">
            {" "}
            Life <span>Saver</span>
          </Link>
        </p>
      </div>

      <div className="navbar-end">
        {user && (
            <label
            tabIndex={1}
            htmlFor="dashboard-drawer-2"
            className="btn btn-ghost lg:hidden"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label> 
        )}
        </div>    

      <div className="navbar-end">
        <Link to="/card">
          <button className="btn btn-ghost btn-circle">
            <div className="indicator">
              <FontAwesomeIcon className="w-8" icon={faCartShopping} />
              <span className="badge badge-xs badge-primary indicator-item">
                {card.length}
              </span>
            </div>
          </button>
        </Link>
        <div className="dropdown dropdown-end ml-5">
          <label tabIndex={0} className="btn btn-circle avatar">
            <div className=" rounded-full w-5">
              <FontAwesomeIcon icon={faUser} />
            </div>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li>
              <a className="justify-between  text-lg">
                {user?.displayName}
                <span className="badge">New</span>
              </a>
            </li>

            <li>
              {user ? (
                <p className="btn btn-ghost" onClick={logout}>
                  Sign Out
                </p>
              ) : (
                <Link to="/login">Login</Link>
              )}
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
