import React from 'react'
import './dashboard.css'
import Navbar from '../Navbar/Navbar';
import Sidebar from '../Sidebar/Sidebar';
import Home from '../Home';


const Dashboard = () => {
  return (
    <div className="font-work_sans" >
      <div className="relative flex h-full w-full items-start overflow-clip bg-neutral-50 pb-96 pl-72 pr-96 pt-20" >
        <Home/>
        <Sidebar/>
        <Navbar/>
      </div>
    </div>
  );
}

export default Dashboard