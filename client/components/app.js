import React from 'react';
import Navbar from './navbar';
import Sidebar from './sidebar';
import Quicksidebar from './quicksidebar';
import Footer from './footer';
import BatchsMain from './batchs/batchs_main';

export default (props) => {
  return (
  <div>

        {props.children}
</div>

  );
}

