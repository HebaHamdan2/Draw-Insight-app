import { createBrowserRouter, Navigate, RouterProvider } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import { AuthContextProvider } from './context/Auth.context.jsx';
import Protected from './components/Protected/Protected.js';
import ProtectedPage from './components/Protected/ProtectedPage.js';
import { lazy, Suspense } from 'react';
import AddChild from './components/AddChildProfile/AddChild.jsx';
import Overview from './components/Overview/Overview.jsx';
import ChildrenProfiles from './components/ChildrenProfiles/ChildrenProfiles.jsx';
import AccountSettings from './components/AccountSettings/AccountSettings.jsx';
import ChangePassword from './components/ChangePassword/ChangePassword.jsx';
import ChildProfile from './components/ChildProfile/ChildProfile.jsx';
import EditChildInfo from './components/EditChildInfo/EditChildInfo.jsx';
import ChildProfileInfo from './components/ChildProfileInfo/ChildProfileInfo.jsx';
import PridectDrawing from './components/PridectDrawing/PridectDrawing.jsx';
import PageNotFound from './pages/PageNotFound/PageNotFound.jsx';

const Signup = lazy(() => import('./pages/Signup/Signup.jsx'));
const Login = lazy(() => import('./pages/Login/Login.jsx'));
const Dashboard = lazy(() => import('./pages/dashboard/dashboard.jsx'));
const SendCode = lazy(() => import('./pages/ForgotPassword/SendCode.jsx'));
const ResetPassword = lazy(() => import('./pages/ForgotPassword/ResetPassword.jsx'));

// Custom Skeleton Screen Component using Tailwind CSS
const SkeletonScreen = () => {
  return (
    <div className="space-y-4 p-4">
      <div className="animate-pulse flex space-x-4">
        <div className="flex-shrink-0 w-16 h-16 bg-gray-200 rounded-full"></div>
        <div className="flex-1 space-y-2 py-1">
          <div className="h-4 bg-gray-200 rounded w-3/4"></div>
          <div className="h-4 bg-gray-200 rounded w-1/2"></div>
        </div>
      </div>
      <div className="h-4 bg-gray-200 rounded w-full"></div>
      <div className="h-4 bg-gray-200 rounded w-full"></div>
      <div className="h-4 bg-gray-200 rounded w-full"></div>
    </div>
  );
};

function App() {
  const routers = createBrowserRouter([
    { path: '', element: <ProtectedPage><Signup /></ProtectedPage> },
    { path: '/signup', element: <ProtectedPage><Signup /></ProtectedPage> },
    { path: '/login', element: <ProtectedPage><Login /></ProtectedPage> },
    { path: '/forgot', element: <ProtectedPage><SendCode /></ProtectedPage> },
    { path: '/reset', element: <ProtectedPage><ResetPassword /></ProtectedPage> },
    {
      path: '/dashboard',
      element: (
        <Protected>
          <Dashboard />
        </Protected>
      ),
      children: [
        { path: '', element: <Navigate to="overview" replace /> },
        { path: 'overview', element: <Overview /> },
        { path: 'profiles', element: <ChildrenProfiles /> },
        {
          path: 'profiles/:childId',
          element: <ChildProfile />,
          children: [
            { path: '', element: <Navigate to="details" replace /> },
            { path: 'details', element: <ChildProfileInfo /> },
            { path: 'edit', element: <EditChildInfo /> },
            { path: 'predict', element: <PridectDrawing /> },
          ],
        },
        { path: 'addChild', element: <AddChild /> },
        { path: 'settings', element: <AccountSettings /> },
        { path: 'change-password', element: <ChangePassword /> },
      ],
    },
    { path: '*', element: <PageNotFound /> },
  ]);

  return (
    <>
      <AuthContextProvider>
        <Suspense fallback={<SkeletonScreen />}>
          <RouterProvider router={routers} />
        </Suspense>
      </AuthContextProvider>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </>
  );
}

export default App;
