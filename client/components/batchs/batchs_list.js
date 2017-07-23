import React, { Component } from 'react';
import { createContainer } from 'meteor/react-meteor-data';
import { Batchs } from '../../../imports/collections/batchs';

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
      <ul className="list-group">
        {this.renderList()}
      </ul>

    );
  }
}

export default createContainer(() => {
  Meteor.subscribe('batchs');


  return { batchs: Batchs.find({}).fetch() };
}, BatchsList);
