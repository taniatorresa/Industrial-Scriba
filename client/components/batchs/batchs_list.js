import React, { Component } from 'react';
import { createContainer } from 'meteor/react-meteor-data';
import { Batchs } from '../../../imports/collections/batchs';
import Navbar from '../navbar';
import Sidebar from '../sidebar';
import Quicksidebar from '../quicksidebar';
import Footer from '../footer';

class BatchsList extends Component {
  renderList() {
    return this.props.batchs.map( batch => {
      return( <li className="list-group-item"key={batch._id}>
        Batchs {batch._id}
        </li>
      );
  });
}
  render() {
    console.log(this.props.batchs);
    return (
  <div>
       <Navbar />
      <div className="clearfix"> </div>
      <div className="page-container">
        <Sidebar />
        <div className="page-content-wrapper">
              <div className="page-content">
                <ul className="list-group">
                  {this.renderList()}
                </ul>
              </div>
            </div>
       <Quicksidebar />
       </div>
          <Footer />
  </div>
    );
  }
}

export default createContainer(() => {
  Meteor.subscribe('batchs');


  return { batchs: Batchs.find({}).fetch() };
}, BatchsList);
