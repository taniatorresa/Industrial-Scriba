import React from 'react';
import ReactDOM from 'react-dom';
import {Route, Switch, BrowserRouter  } from 'react-router-dom';
import App from './components/app';
import Content from './components/content';
import BatchsList from './components/batchs/batchs_list';
import BatchShow from './components/batchs/batch_show';
import { Link } from 'react-router'


const routes = (
<BrowserRouter>
    <div>
        <App/>
        <Switch>
        <Route exact path="/" component={BatchsList} />
        <Route path="/batchs" component={BatchShow} />
      </Switch>
    </div>
</BrowserRouter>
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

