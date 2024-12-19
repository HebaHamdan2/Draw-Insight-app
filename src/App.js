import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import LandingPage from './Pages/Home/Home.jsx';
import Signup from './Pages/Signup/Signup.jsx';

function App() {
  let routers=createBrowserRouter([
    {path:'',element:<LandingPage/>},
    {path:'/signup',element:<Signup/>}
  ])
  return (
  <RouterProvider router={routers}>

  </RouterProvider>
  );
}

export default App;
