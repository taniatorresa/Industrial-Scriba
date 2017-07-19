import React from 'react';
import Navbar from './navbar';
import Sidebar from './sidebar';
import Content from './content';
import Quicksidebar from './quicksidebar';
import Footer from './footer';

export default () => {
  return (
    <div>
      <Navbar />
      <div className="clearfix"> </div>
      <div className="page-container">
        <Sidebar />
        <Content />
        <Quicksidebar />
      </div>
    <Footer />
    </div>

  );
}

