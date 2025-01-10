import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import { AuthContextProvider } from './context/Auth.context.jsx';
import Protected from './components/Protected/Protected.js';
import ProtectedPage from './components/Protected/ProtectedPage.js';
import { lazy, Suspense } from 'react';
import AddChild from './components/AddChildProfile/AddChild.jsx';
import Navbar from './components/Navbar/Navbar.jsx';
const Signup = lazy(() => import('./pages/Signup/Signup.jsx'));
const Login = lazy(() => import('./pages/Login/Login.jsx'));
const Dashboard = lazy(() => import('./pages/dashboard/dashboard.jsx'));
const SendCode = lazy(() => import('./pages/ForgotPassword/SendCode.jsx'));
const ResetPassword = lazy(() => import('./pages/ForgotPassword/ResetPassword.jsx'));
function App() {
  let routers=createBrowserRouter([
    { path: '', element:<ProtectedPage> <Signup /> </ProtectedPage>},
    { path: '/signup', element: (
      <ProtectedPage>
        <Signup />
      </ProtectedPage>
    )},
    { path: '/login', element: (
      <ProtectedPage>
        <Login />
      </ProtectedPage>
    )},
    { path: '/forgot', element: (
      <ProtectedPage> 
        <SendCode />
      </ProtectedPage>
    )},
    { path: '/reset', element: (
      <ProtectedPage> 
        <ResetPassword />
      </ProtectedPage>
    )},
    { path: '/dashboard', element: (
      <Protected> 
        <Dashboard />
      </Protected>
    ),
  children:[
    {
      path:'/dashboard/overview',
      element:(
        <Protected> 
          <Navbar/>
      <h1>Hi overview</h1>
      </Protected>
      )
    },
    {
      path:'/dashboard/profiles',
      element:(
        <Protected> 
        <h1>Hi</h1>
      </Protected>
      )
    },
    {
      path:'/dashboard/addChild',
      element:(
        <Protected> 
      <AddChild/>
      </Protected>
      )
    },
    {
      path:'/dashboard/settings',
      element:(
        <Protected> 
        <h1>Hi settings</h1>
      </Protected>
      )
    },
    
  ]},
  ]);
  return (
    <>
    <AuthContextProvider>
    <Suspense fallback={<div className="spinner">Loading...</div>}>
    <RouterProvider router={routers}>

</RouterProvider>
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
