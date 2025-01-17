import React, { useEffect, useState } from 'react';
import useParentAccount from '../../hooks/useParentAccount.js';
import EditAccountInfo from '../EditAccountInfo/EditAccountInfo.jsx';

const AccountSettings = () => {
  const { getAccountInfo } = useParentAccount();
  let [parentInfo, setParentInfo] = useState({});
  const [loading, setLoading] = useState(true); // Add loading state

  useEffect(() => {
    const getInfo = async () => {
      try {
        const data = await getAccountInfo();
        if (data) {
          setParentInfo(data.parent);
        }
      } catch (error) {
        console.error('Failed to fetch parent account info:', error);
      } finally {
        setLoading(false); // Set loading to false once data is fetched
      }
    };
    getInfo();
  }, [getAccountInfo]);

  return (
    <>
      <div className="py-2 pb-15 flex justify-center md:justify-start md:ps-9">
        {loading ? (
          // Skeleton for the "Welcome" message
          <div className="w-1/3 h-6 bg-gray-300 rounded animate-pulse"></div>
        ) : (
          <h2 className="text-[#3E435D] font-medium text-lg md:text-xl">
            Welcome, {parentInfo?.username || 'User'}
          </h2>
        )}
      </div>
      <div className="md:w-[95%] md:m-auto">
        {loading ? (
          // Skeleton for the EditAccountInfo component (can be customized for your fields)
          <div className="space-y-4">
            <div className="w-full h-12 bg-gray-300 rounded animate-pulse"></div>
            <div className="w-full h-12 bg-gray-300 rounded animate-pulse"></div>
            <div className="w-full h-12 bg-gray-300 rounded animate-pulse"></div>
          </div>
        ) : (
          <EditAccountInfo parentInfo={parentInfo} />
        )}
      </div>
    </>
  );
};

export default AccountSettings;
