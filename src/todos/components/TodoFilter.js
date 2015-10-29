import React from 'react';
import { ButtonGroup, Button } from 'react-bootstrap';
import TodoActions from '../TodoActions';


module.exports = React.createClass({
  setFilter: function(e) {
    TodoActions.filter(e.target.value);
  },

  getFilter: function() {
    return this.props.TodoStore.get('filter');
  },

  render: function() {
    return <ButtonGroup onClick={this.setFilter}>
      <Button value="all" active={this.props.filter === 'all'}>All</Button>
      <Button value="active" active={this.props.filter === 'active'}>Active</Button>
      <Button value="completed" active={this.props.filter === 'completed'}>Completed</Button>
    </ButtonGroup>
  }
});
