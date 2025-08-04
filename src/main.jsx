import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router";
const router = createBrowserRouter([
  {
    path: "/",
    element: <h1 className='text-5xl font-bold text-red-800'>Hello World</h1>,
  },
  {
    path: "/About",
    element: <h1 className='text-5xl font-bold text-red-800'>Hello About</h1>,
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
   <RouterProvider router={router} />
  </StrictMode>,
)
