import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import LandingPage from './Pages/LandingPage/LandingPage.jsx';

function App() {
  let routers=createBrowserRouter([
    {path:'',element:<LandingPage/>}
  ])
  return (
  <RouterProvider router={routers}>

  </RouterProvider>
  );
}

export default App;
