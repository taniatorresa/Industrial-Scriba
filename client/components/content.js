//Se importa la libreria React
import React from 'react';
import Accounts from './accounts';
import BatchsList from './batchs/batchs_list';


const Content = () => {
  return (
      <div className="page-content-wrapper">
        {/* BEGIN CONTENT BODY */}
        <div className="page-content">
          {/* BEGIN PAGE HEADER*/}
          {/* BEGIN PAGE BAR */}
          <div className="page-bar">
            <ul className="page-breadcrumb">
              <li>

                <i className="fa fa-circle" />
              </li>
              <li>
                <a href="#">Blank Page</a>
                <i className="fa fa-circle" />
              </li>
              <li>
                <span><Accounts /></span>
              </li>
            </ul>
            <div className="page-toolbar">
              <div className="btn-group pull-right">
                <button type="button" className="btn green btn-sm btn-outline dropdown-toggle" data-toggle="dropdown"> Actions
                  <i className="fa fa-angle-down" />
                </button>
                <ul className="dropdown-menu pull-right" role="menu">
                  <li>
                    <a href="#">
                      <i className="icon-bell" /> Action</a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="icon-shield" /> Another action</a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="icon-user" /> Something else here</a>
                  </li>
                  <li className="divider"> </li>
                  <li>
                    <a href="#">
                      <i className="icon-bag" /> Separated link</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          {/* END PAGE BAR */}
          {/* BEGIN PAGE TITLE*/}
          <h1 className="page-title"> Batchs List </h1>
          <BatchsList />
          {/* END PAGE TITLE*/}
          {/* END PAGE HEADER*/}

        </div>
        {/* END CONTENT BODY */}
      </div>
  );
};

export default Content;
