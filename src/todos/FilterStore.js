import Backbone from 'backbone';
import constants from './constants';


class TodoFilter extends Backbone.Model {
  constructor() {
    super();
    this.defauilts = {
      filter: 'all'
    };
  }

  initialize() {
    this.listenTo(Backbone, constants.TODO_FILTER, this.setFilter);
  }

  setFilter(action) {
    this.set({filter: action.filter});
  }
}

module.exports = new TodoFilter();
