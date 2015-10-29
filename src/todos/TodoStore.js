import Backbone from 'backbone';
import constants from './constants';


var events = 'add remove reset change';

var Todo = Backbone.Model.extend({
  defaults: {
    text: "Default todo text",
    complete: false
  },
  toggleComplete: function() {
    this.set({
      complete: !this.get('complete')
    });
  }
});


class TodoCollection extends Backbone.Collection {
  constructor() {
    super();
    this.model = Todo;
  }

  initialize() {
    super.initialize();

    this.listenTo(Backbone, constants.TODO_ADD, this.addTodo);
    this.listenTo(Backbone, constants.TODO_TOGGLE, this.toggleTodo);
    this.listenTo(Backbone, constants.TODO_REMOVE, this.removeTodo);
  }

  addTodo(action) {
    this.add({
      text: action.text
    });
  }

  toggleTodo(action) {
    action.todo.toggleComplete();
  }

  removeTodo(action) {
    this.remove(action.todo);
  }
}

class TodoFilter extends Backbone.Model {
  get defaults() {
    return {
      filter: 'all',
      todos: new TodoCollection()
    }
  }

  initialize() {
    this.listenTo(Backbone, constants.TODO_FILTER, this.setFilter);
    this.listenTo(this.get('todos'), events, this.trigger.bind(this, 'change'));
  }

  setFilter(action) {
    this.set({filter: action.filter});
  }
}

module.exports = new TodoFilter();
