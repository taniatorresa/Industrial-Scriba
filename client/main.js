//Se importa la libreria React
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import App from './components/app';

Meteor.startup(() => {
//Render this component to the screen
  ReactDOM.render(<App />, document.querySelector('.render-target'));

    jQuery.getScript("/assets/scripts/app.min.js", function() {
      App.init();
    });

    jQuery.getScript("/assets/scripts/layout.min.js", function() {
      Layout.init();
    });

    jQuery.getScript('/assets/scripts/demo.min.js', function() {
      Demo.init();
    });

    jQuery.getScript('/assets/scripts/quick-sidebar.min.js', function() {
      QuickSidebar.init();

    });

    jQuery.getScript("/assets/scripts/quick-nav.min.js", function() {
      QuickNav.init();
    });


});

