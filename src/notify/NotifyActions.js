import constants from './constants';
import Backbone from 'backbone';


module.exports = {
  hide: function() {
    Backbone.trigger(constants.NOTIFY_HIDE);
  }
};
