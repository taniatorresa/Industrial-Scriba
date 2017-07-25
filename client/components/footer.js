//Se importa la libreria React
import React, { Component } from 'react';

class Footer extends Component {

  render() {

    return (
        <div className="page-footer">
          <div className="page-footer-inner"> 2017 © Batch Tracking
            <a target="_blank" href="http://keenthemes.com">Industrial Scriba</a> &nbsp;|&nbsp;
          </div>
          <div className="scroll-to-top">
            <i className="icon-arrow-up" />
          </div>
        </div>

    );
  }
}

export default Footer;
