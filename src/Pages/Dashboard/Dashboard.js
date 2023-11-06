import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import useAdmin from '../../hooks/useAdmin';

import auth from '../../firebase.init';
import { useAuthState } from 'react-firebase-hooks/auth';

const Dashboard = () => {
  const [user] = useAuthState(auth);
  const [admin] = useAdmin(user);
    return (
        <div className="drawer lg:drawer-open">
        <input id="dashboard-drawer-2" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content px-2">
            <h1 className='text-3xl text-cyan-500 font-bold'>Dashboard</h1>
        <Outlet />
         
        
        </div> 
        <div className="drawer-side">
          <label htmlFor="dashboard-drawer-2" className="drawer-overlay"></label> 
          <ul className="menu p-4 w-70 h-full bg-base-200 text-base-content">
            {/* Sidebar content here */}
            <li><Link to="/dashboard">Dashboard</Link></li>
            
            {admin && <>
              <li><Link to="/dashboard/user">All Users</Link></li>
              <li><Link to="/dashboard/addproduct">Add Product</Link></li>
              <li><Link to="/dashboard/manageProduct">Manage Product</Link></li>
            </>}
          </ul>
        
        </div>
      </div>
    );
};

export default Dashboard;