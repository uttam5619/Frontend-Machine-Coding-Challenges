import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import ItemDescription from './components/ItemDescription'
import ItemList from './components/ItemList.jsx'
import About from './components/About.jsx'
import Contact from './components/Contact.jsx'
import Catelog from './components/Catelog.jsx'

const router = createBrowserRouter([
  {
    path:'/',
    element:<App/>,
    children:[
      {
        path:'',
        element:<Catelog/>
      },
      {
        path:'about',
        element:<About/>
      },
      {
        path:'contact',
        elememt:<Contact/>
      }
    ]
  },
  {
    path:'/items',
    element:<ItemList/>
  },
  {
    path:'/items/:itemId',
    element:<ItemDescription/>   
  }
])

createRoot(document.getElementById('root')).render(
  
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
