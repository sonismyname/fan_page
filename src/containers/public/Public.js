import React from 'react'
import { Outlet } from 'react-router-dom'
import {Header, Footer} from '../../components/'

const Public = () => {
  return (
    <div className='flex flex-col'>
      <Header/>
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  )
}

export default Public
