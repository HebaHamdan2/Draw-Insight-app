import React, { useState } from 'react';
import Sidebar from '../../components/Sidebar/Sidebar.jsx';

const Dashboard = () => {
  const [activeContent, setActiveContent] = useState('Home');
  const renderContent = () => {
    switch (activeContent) {
      case 'drawings':
        return <h1>Welcome to the History Page</h1>;
      case 'allChildren':
        return <h1>All Children Profiles</h1>;
      case 'addChild':
        return <h1>Add Child</h1>;
      default:
        return <h1>Select an option from the menu</h1>;
    }
  };

  return (
    <div className="container-fluid">
      <div className="row flex-nowrap">
        <Sidebar onMenuClick={setActiveContent} />
        <div className="col py-3">{renderContent()}</div>
      </div>
    </div>
  );
};

export default Dashboard;
