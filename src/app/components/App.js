import React, { Component } from 'react';
import Backbone from 'backbone';
import Header from './Header';
import Footer from './Footer';
import Notify from '../../notify/components/Notify';
import Router from '../../router/components/Router';


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
