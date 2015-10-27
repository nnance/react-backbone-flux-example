var constants = require('./constants');
var Backbone = require('backbone');
var _ = require('underscore');


module.exports = {
    navigate: function(fragment, trigger, replace) {
        Backbone.trigger(constants.ROUTE_NAVIGATE, {
            fragment: fragment,
            trigger: _.isUndefined(trigger) ? true : trigger,
            replace: _.isUndefined(replace) ? true : replace
        });
    }
};
