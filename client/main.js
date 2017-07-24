import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import App from './components/app';
import Content from './components/content';
import BatchsList from './components/batchs/batchs_list';
import { Link } from 'react-router'


const routes = (
<Router history={browserHistory}>
  <Route path="/">
      <IndexRoute component={App}/>
      <Route path="batchs" component={BatchsList} />
   </Route>
</Router>
);


Meteor.startup(() => {
//Render this component to the screen
  ReactDOM.render( routes , document.querySelector('.render-target'));

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

