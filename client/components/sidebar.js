//Se importa la libreria React
import React, { Component } from 'react';

class Sidebar extends Component {

  render() {

    return (
        <div className="page-sidebar-wrapper">
          {/* BEGIN SIDEBAR */}
          {/* DOC: Set data-auto-scroll="false" to disable the sidebar from auto scrolling/focusing */}
          {/* DOC: Change data-auto-speed="200" to adjust the sub menu slide up/down speed */}
          <div className="page-sidebar navbar-collapse collapse">
            {/* BEGIN SIDEBAR MENU */}
            {/* DOC: Apply "page-sidebar-menu-light" class right after "page-sidebar-menu" to enable light sidebar menu style(without borders) */}
            {/* DOC: Apply "page-sidebar-menu-hover-submenu" class right after "page-sidebar-menu" to enable hoverable(hover vs accordion) sub menu mode */}
            {/* DOC: Apply "page-sidebar-menu-closed" class right after "page-sidebar-menu" to collapse("page-sidebar-closed" class must be applied to the body element) the sidebar sub menu mode */}
            {/* DOC: Set data-auto-scroll="false" to disable the sidebar from auto scrolling/focusing */}
            {/* DOC: Set data-keep-expand="true" to keep the submenues expanded */}
            {/* DOC: Set data-auto-speed="200" to adjust the sub menu slide up/down speed */}
            <ul className="page-sidebar-menu  page-header-fixed " data-keep-expanded="false" data-auto-scroll="true" data-slide-speed={200} style={{paddingTop: 20}}>
              {/* DOC: To remove the sidebar toggler from the sidebar you just need to completely remove the below "sidebar-toggler-wrapper" LI element */}
              {/* BEGIN SIDEBAR TOGGLER BUTTON */}
              <li className="sidebar-toggler-wrapper hide">
                <div className="sidebar-toggler">
                  <span />
                </div>
              </li>
              {/* END SIDEBAR TOGGLER BUTTON */}
              {/* DOC: To remove the search box from the sidebar you just need to completely remove the below "sidebar-search-wrapper" LI element */}
              <li className="sidebar-search-wrapper">
                {/* BEGIN RESPONSIVE QUICK SEARCH FORM */}
                {/* DOC: Apply "sidebar-search-bordered" class the below search form to have bordered search box */}
                {/* DOC: Apply "sidebar-search-bordered sidebar-search-solid" class the below search form to have bordered & solid search box */}
                <form className="sidebar-search  sidebar-search-bordered" action="page_general_search_3.html" method="POST">
                  <a href="javascript:;" className="remove">
                    <i className="icon-close" />
                  </a>
                  <div className="input-group">
                    <input className="form-control" placeholder="Search..." type="text" />
                    <span className="input-group-btn">
                      <a href="javascript:;" className="btn submit">
                        <i className="icon-magnifier" />
                      </a>
                    </span>
                  </div>
                </form>
                {/* END RESPONSIVE QUICK SEARCH FORM */}
              </li>
              <li className="nav-item start ">
                <a href="javascript:;" className="nav-link nav-toggle">
                  <i className="icon-home" />
                  <span className="title">Dashboard</span>
                </a>
              </li>
              <li className="heading">
                <h3 className="uppercase">Menú</h3>
              </li>
              <li className="nav-item  ">
                <a href="javascript:;" className="nav-link nav-toggle">
                  <i className="icon-diamond" />
                  <span className="title">Batch Tracking</span>
                  <span className="arrow" />
                </a>
                <ul className="sub-menu">
                  <li className="nav-item  ">
                    <a href="ui_metronic_grid.html" className="nav-link ">
                      <span className="title">Batch Listing</span>
                    </a>
                  </li>
                  <li className="nav-item  ">
                    <a href="ui_colors.html" className="nav-link ">
                      <span className="title">Material Tracking</span>
                    </a>
                  </li>
                  <li className="nav-item  ">
                    <a href="ui_general.html" className="nav-link ">
                      <span className="title">Signal Monitoring</span>
                    </a>
                  </li>
                  <li className="nav-item  ">
                    <a href="ui_buttons.html" className="nav-link ">
                      <span className="title">Phase Editor</span>
                    </a>
                  </li>
                </ul>
              </li>
            </ul>
            {/* END SIDEBAR MENU */}
            {/* END SIDEBAR MENU */}
          </div>
          {/* END SIDEBAR */}
        </div>
    );
  }
}
export default Sidebar;
