import React from 'react';
/**
 * component wrapper to let components listen to Backbone Stores & Collections
 * events in a simple way and force the component to update
 * @param {Object} Components = Component to be wrapped
 * @param {Object} stores
 * @param {String} [events="add remove reset change"]
 */
module.exports = function(Component, stores, events) {
  if (!stores) {
    stores = []
  }
  if (!events) {
    events = 'all';
  }
  const BackboneConnection = React.createClass({
    componentWillMount: function() {
      var autoWire = [this.props.model, this.props.collection];
      stores.concat(autoWire).forEach((item) => {
        if (item) {
          item.on(events, () => this.forceUpdate(), this);
        }
      });
    },
    componentWillUnmount: function() {
      var autoWire = [this.props.model, this.props.collection];
      stores.concat(autoWire).forEach((item) => {
        if (item) {
          item.off(null, null, this);
        }
      });
    },
    render() {
      return <Component {...this.props} {...this.state} />;
    }

  });

  return BackboneConnection;
};
