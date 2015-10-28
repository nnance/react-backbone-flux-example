import React from 'react';
import { ButtonGroup, Button } from 'react-bootstrap';
import TodoActions from '../TodoActions';
import storeMixin from '../../shared/helpers/storeMixin';
import FilterStore from '../FilterStore';


module.exports = React.createClass({
  mixins: [storeMixin(FilterStore)],

  getInitialState() {
    return {
      filter: FilterStore.get('filter')
    };
  },

  setFilter: function(e) {
    TodoActions.filter(e.target.value);
  },

  render: function() {
    return <ButtonGroup onClick={this.setFilter}>
      <Button value="all" active={this.state.filter === 'all'}>All</Button>
      <Button value="active" active={this.state.filter === 'active'}>Active</Button>
      <Button value="completed" active={this.state.filter === 'completed'}>Completed</Button>
    </ButtonGroup>
  }
});
