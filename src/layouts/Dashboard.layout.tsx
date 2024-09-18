import React from 'react'
import { Outlet } from 'react-router-dom';
import Sidebar from '../components/SideBar/SideBar';
import Navbar from '../components/NavBar/NavBar';

const DashboardLayout = () => { 

// // console.log(response) 
  return (
    <>
        <div className="flex h-screen relative bg-white dark:bg-gray-950 w-full">
        <Sidebar />
        <div className="ml-56 p-0 w-full relative">
            <Navbar/>
            <div>
                <Outlet/>
            </div>
          </div>
        </div>
    </>
  )
}

export default React.memo(DashboardLayout)
