import React from 'react'
import Sidebar from './Sidebar';

const Layout = ({children}) => {
  return (
    <div className='h-screen flex flex-row justify-start'>
        <Sidebar/>
        <div className='bg-indigo-50 flex-1 p-4 rounded-[36px]'>
        {/* <div className='bg-primary flex-1 p-4 text-white'> */}
            {children}
        </div>
    </div>
  )
}

export default Layout;
