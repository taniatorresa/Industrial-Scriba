//Se importa la libreria React
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Navbar from './components/navbar';
import Sidebar from './components/sidebar';
import Content from './components/content';
import Quicksidebar from './components/quicksidebar';
import Footer from './components/footer';

 class App extends Component{
  render (){
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
};

Meteor.startup(() => {
//Render this component to the screen
  ReactDOM.render(<App />, document.querySelector('.conteiner'));

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

