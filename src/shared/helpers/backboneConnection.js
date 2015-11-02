import React from 'react';
/**
 * component composition to let components listen to Backbone Stores & Collections
 * in a simple way
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
    componentDidMount: function() {
      var autoWire = [this.props.model, this.props.collection];
      stores.concat(autoWire).forEach((item) => {
        if (item) {
          item.on(events, function() {
            this.forceUpdate();
          }, this);
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
