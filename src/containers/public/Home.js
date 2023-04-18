import React from 'react'
import { Outlet, useNavigate } from 'react-router-dom'
import path from "../../utils/path"
import { useSelector } from 'react-redux'
import { ProductLeft, ProductRight } from '../../components'


const Home = () => {
  const navigate = useNavigate()
  const {bills} = useSelector(state => state.app)
  const showForm = () => {
    console.log('show form')
    navigate(path.FORM)
  }
  console.log(bills)
  return (
    <div className='pt-[80px] px-5 h-[2000px] m-auto w-[80%] border border-yellow-500 flex flex-col gap-5'>
      Home
      <div className='flex flex-col gap-5'>
        <img src='https://th.bing.com/th/id/OIP.FjLkalx51D8xJcpixUGJywHaE8?pid=ImgDet&rs=1' className='object-cover w-[80%]' />
        
      </div>
      <ProductLeft/>
      <ProductRight/>
      <button 
        onClick={showForm}
        className='border border-red-500 p-5'>Form</button>
      <Outlet></Outlet>
    </div>
  )
}

export default Home
