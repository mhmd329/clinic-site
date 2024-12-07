import React, { Fragment } from 'react'
import { Outlet } from 'react-router-dom';
import Navv from '../componenet/nav/nav';
import Foter from '../footer/foter';
 const Layout = () => {
  return (
    <Fragment>
   <Navv/>
   <main>
  <Outlet />
   </main>
   <Foter/>
   
</Fragment>
  )
}
export default Layout 