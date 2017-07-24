//Se importa la libreria React
import React, { Component } from 'react';
import { createContainer } from 'meteor/react-meteor-data';
import { Batchs } from '../../../imports/collections/batchs';
import Navbar from '../navbar';
import Sidebar from '../sidebar';
import Quicksidebar from '../quicksidebar';
import Footer from '../footer';


class BatchShow extends Component {

  render() {

    return (
  <div>
       <Navbar />
      <div className="clearfix"> </div>
      <div className="page-container">
        <Sidebar />
        <div className="page-content-wrapper">
              <div className="page-content">
              </div>
            </div>
       <Quicksidebar />
       </div>
          <Footer />
  </div>
    );
  }
}

export default BatchShow;
