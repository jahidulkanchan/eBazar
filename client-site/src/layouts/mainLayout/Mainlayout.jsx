import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../../components/navbar/Navbar';

const Mainlayout = () => {
  return (
    <>
      <Navbar/>
      <div className='mt-[100px]'>
      <Outlet/>
      </div>
    </>
  );
};

export default Mainlayout;