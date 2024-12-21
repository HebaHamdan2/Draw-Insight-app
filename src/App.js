import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import LandingPage from './Pages/Home/Home.jsx';
import Signup from './Pages/Signup/Signup.jsx';
import Login from './Pages/Login/Login.jsx';
import Dashboard from './Pages/Dashboard/Dashboard.jsx';

function App() {
  let routers=createBrowserRouter([
    {path:'',element:<LandingPage/>},
    {path:'/signup',element:<Signup/>},
    {path:'/login',element:<Login/>},
    {path:'/dashboard',element:<Dashboard/>}
  ])
  return (
  <RouterProvider router={routers}>

  </RouterProvider>
  );
}

export default App;
