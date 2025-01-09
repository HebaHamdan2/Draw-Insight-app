import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import { AuthContextProvider } from './context/Auth.context.jsx';
import Protected from './components/Protected/Protected.js';
import ProtectedPage from './components/Protected/ProtectedPage.js';
import { lazy, Suspense } from 'react';
const Signup = lazy(() => import('./pages/Signup/Signup.jsx'));
const Login = lazy(() => import('./pages/Login/Login.jsx'));
const Dashboard = lazy(() => import('./pages/Home/Home.jsx'));
const SendCode = lazy(() => import('./pages/ForgotPassword/SendCode.jsx'));
const ResetPassword = lazy(() => import('./pages/ForgotPassword/ResetPassword.jsx'));
function App() {
  let routers=createBrowserRouter([
    { path: '', element: <Signup /> },
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
    )},
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
