import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Signup from './pages/Signup/Signup.jsx';
import Login from './pages/Login/Login.jsx';
import Dashboard from './pages/Home/Home.jsx';
import SendCode from './pages/ForgotPassword/SendCode.jsx';
import { ResetPassword } from './pages/ForgotPassword/ResetPassword.jsx';
import { Toaster } from 'react-hot-toast';

function App() {
  let routers=createBrowserRouter([
    {path:'',element:<Signup/>},
    {path:'/signup',element:<Signup/>},
    {path:'/login',element:<Login/>},
    {path:'/forgot',element:<SendCode/>},
    {path:'/reset',element:<ResetPassword/>},
    {path:'/dashboard',element:<Dashboard/>}
  ])
  return (
    <>
    <RouterProvider router={routers}>

</RouterProvider>
 <Toaster/>
    </>
  
  );
}

export default App;
