import Backbone from 'backbone';
import constants from './constants';


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

class TodoFilter extends Backbone.Collection {
  initialize() {
    super.initialize();

    this.filter = 'all';
    this.collection = new TodoCollection();
    this.listenTo(this.collection, 'add', this.addTodo);
    this.listenTo(this.collection, 'remove', this.removeTodo);
    this.listenTo(this.collection, 'change', this.applyFilter);
    this.listenTo(Backbone, constants.TODO_FILTER, this.setFilter);
  }

  shouldBeFiltered(todo) {
    if ((this.filter === 'active') && todo.get('complete')) {
      return true;
    } else if ((this.filter === 'completed') && !todo.get('complete')) {
      return true;
    } else {
      return false;
    }
  }

  addTodo(todo) {
    if (!shouldBeFiltered(todo)) {
      this.add(todo);
    }
  }

  removeTodo(todo) {
    this.remove(todo);
  }

  setFilter(value) {
    this.filter = value;
    this.applyFilter();
  }

  applyFilter() {
    this.set(
      this.collection.filter(
        this.shouldBeFiltered.bind(this)
      )
    );
  }
}

module.exports = new TodoFilter();
