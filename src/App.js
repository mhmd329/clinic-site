import React from 'react';
import { createBrowserRouter, RouterProvider, createRoutesFromElements, Route } from 'react-router-dom';
import Layout from './layout/layout';
import Home from './pages/home';
import Contact from './pages/contact';
import { Blogs } from './pages/blogs';
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route  path='/home' element={<Home />} />
      <Route  path='/contact' element={<Contact />} />
      <Route  path='/blogs' element={<Blogs />} />
     
    </Route>
  )
);

function App  ()  {
  
  return <RouterProvider router={router} />;
 
};

export default App;
