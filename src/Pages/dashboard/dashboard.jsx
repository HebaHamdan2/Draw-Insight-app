import React from 'react';
import Sidebar from '../../components/Sidebar/Sidebar.jsx';
import { Outlet } from 'react-router-dom';
const Dashboard = () => {
  return (
<>
  <div className="flex flex-row min-h-screen">
    <Sidebar className="w-1/5 md:w-1/4 bg-sidebarBg" />
    <div className='flex-1 bg-mainBg p-5'>
      <Outlet/>
    </div>
  </div>
</>

  );
};

export default Dashboard;
