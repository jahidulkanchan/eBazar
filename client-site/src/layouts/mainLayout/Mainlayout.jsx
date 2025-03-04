import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../../components/navbar/Navbar';
import Footer from '../../components/footer/Footer';

const Mainlayout = () => {
  return (
    <>
      <Navbar/>
      <main className='mt-[100px]'>
      <Outlet/>
      </main>
      <Footer/>
    </>
  );
};

export default Mainlayout;