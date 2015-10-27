var Backbone = require('backbone');
var Header = require('./Header');
var Footer = require('./Footer');
var Notify = require('../../notify/components/Notify');
var Router = require('../../router/components/Router');

import React, { Component } from 'react';

export class App extends Component {
  componentDidMount() {
    Backbone.history.start();
  }

  render() {
    return (
      <div>
        <Header />
        <Notify />
        <Router />
        <Footer />
      </div>
    );
  }
}
