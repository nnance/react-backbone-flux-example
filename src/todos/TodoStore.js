var Backbone = require('backbone');
var constants = require('./constants');


var Todo = Backbone.Model.extend({
    defaults: {
        text: "Default todo text",
        complete: false
    },
    toggleComplete: function() {
        this.set({ complete: !this.get('complete') });
    }
});


class TodoCollection extends Backbone.Collection {
    constructor() {
        super();
        this.model = Todo;
        this.listenTo(Backbone, constants.TODO_ADD, this.addTodo);
        this.listenTo(Backbone, constants.TODO_TOGGLE, this.toggleTodo);
        this.listenTo(Backbone, constants.TODO_REMOVE, this.removeTodo);
    }

    addTodo(action) {
      this.add({text: action.text});
    }

    toggleTodo(action) {
      action.todo.toggleComplete();
    }

    removeTodo(action) {
      this.remove(action.todo);
    }
}

module.exports = new TodoCollection();
