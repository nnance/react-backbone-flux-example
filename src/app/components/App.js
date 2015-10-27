var Header = require('./Header');
var Footer = require('./Footer');
var Notify = require('../../notify/components/Notify');
var Router = require('../../router/components/Router');

import React, { Component } from 'react';

export class App extends Component {
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
