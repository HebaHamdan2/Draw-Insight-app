import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Signup from './Pages/Signup/Signup.jsx';
import Login from './Pages/Login/Login.jsx';
import Dashboard from './Pages/Home/Home.jsx';
import ForgotPassword from './Pages/ForgotPassword/ForgotPassword.jsx';

function App() {
  let routers=createBrowserRouter([
    {path:'',element:<Signup/>},
    {path:'/signup',element:<Signup/>},
    {path:'/login',element:<Login/>},
    {path:'/forgot',element:<ForgotPassword/>},
    {path:'/dashboard',element:<Dashboard/>}
  ])
  return (
  <RouterProvider router={routers}>

  </RouterProvider>
  );
}

export default App;
