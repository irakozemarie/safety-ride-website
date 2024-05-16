import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../Dashboard/Header';
import SideBar from '../Dashboard/Sidebar';

const Layout = () => {
  return (
    <div className="bg-black min-h-screen flex flex-col">
      <Header />
      <div className="flex flex-1">
        <SideBar />
        <div className="flex-1 bg-green-100 rounded-lg border border-[#828181]">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Layout;
