import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Signup from './Pages/Signup/Signup.jsx';
import Login from './Pages/Login/Login.jsx';
import Dashboard from './Pages/Home/Home.jsx';
import SendCode from './Pages/ForgotPassword/SendCode.jsx';
import { ResetPassword } from './Pages/ForgotPassword/ResetPassword.jsx';

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
  <RouterProvider router={routers}>

  </RouterProvider>
  );
}

export default App;
