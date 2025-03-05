import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../../components/navbar/Navbar';
import Footer from '../../components/footer/Footer';
import { useAuth } from '../../hooks/useAuth';

const Mainlayout = () => {
  const {loading} = useAuth()
  if(loading) {
    return <div className='h-svh text-3xl bg-amber-400 flex justify-center items-center'>Loading....</div>
  }
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