import React, { useState } from 'react';
import AddChild from '../../components/AddChildProfile/AddChild.jsx';
import Sidebar from '../../components/Sidebar/Sidebar.jsx';
const Dashboard = () => {
  const [activeContent, setActiveContent] = useState('Home');
  const renderContent = () => {
    switch (activeContent) {
      case 'overview':
        return <h1>Welcome to the overview Page</h1>;
      case 'allChildren':
        return <h1>All Children Profiles</h1>;
      case 'addChild':
        return <AddChild/>;
       case 'settings':
          return <h1>Settings</h1>;  
      default:
        return <h1>Select an option from the menu</h1>;
    }
  };

  return (
  <>
  <div className="flex flex-row ">
<Sidebar className="w-1/4" onMenuClick={setActiveContent} />
<div >
{renderContent()}
</div>
  </div>
  </>
  );
};

export default Dashboard;
