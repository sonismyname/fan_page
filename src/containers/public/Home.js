import React from 'react'
import { Outlet, useNavigate } from 'react-router-dom'
import path from "../../utils/path"


const Home = () => {
  const navigate = useNavigate()
  const showForm = () => {
    console.log('show form')
    navigate(path.FORM)
  }
  return (
    <div className='pt-[80px] px-5 h-[2000px] m-auto w-[80%] border border-yellow-500 flex flex-col'>
      Home
      <button 
        onClick={showForm}
        className='border border-red-500 p-5'>Form</button>
      <Outlet></Outlet>
    </div>
  )
}

export default Home
