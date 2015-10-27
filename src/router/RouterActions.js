import constants from './constants';
import Backbone from 'backbone';
import _ from 'underscore';


module.exports = {
  navigate: function(fragment, trigger, replace) {
    Backbone.trigger(constants.ROUTE_NAVIGATE, {
      fragment: fragment,
      trigger: _.isUndefined(trigger) ? true : trigger,
      replace: _.isUndefined(replace) ? true : replace
    });
  }
};
