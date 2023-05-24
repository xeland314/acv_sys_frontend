import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import App from './App.jsx'
import './index.css'
import Operaciones from './pages/Operaciones.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
  },{
    path:"/operaciones",
    element:<Operaciones/>
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <RouterProvider router={router} />
  </React.StrictMode>,
)
