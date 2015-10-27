var constants = require('./constants');
var Backbone = require('backbone');


module.exports = {
    hide: function() {
        Backbone.trigger(constants.NOTIFY_HIDE);
    }
};
