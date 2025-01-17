import React from 'react';
import Sidebar from '../../components/Sidebar/Sidebar.jsx';
import { Outlet } from 'react-router-dom';
const Dashboard = () => {
  return (
<>
<div className="flex h-screen">
        <Sidebar className="w-1/5 md:w-1/4 bg-sidebarBg h-full" />
        <div className='flex-1 bg-mainBg h-full overflow-auto'>
          <Outlet />
        </div>
      </div>
      
</>

  );
};

export default Dashboard;
