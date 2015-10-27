var constants = require('./constants');
var Backbone =require('backbone');

module.exports = {
    add: function(text) {
        Backbone.trigger(constants.TODO_ADD, { text: text });
    },
    toggle: function(todo) {
        Backbone.trigger(constants.TODO_TOGGLE, { todo: todo });
    },
    remove: function(todo) {
        Backbone.trigger(constants.TODO_REMOVE, { todo: todo });
    }
};
