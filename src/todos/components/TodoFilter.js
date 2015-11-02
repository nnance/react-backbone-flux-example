import React from 'react';
import backboneConnection from '../../shared/helpers/backboneConnection';
import { ButtonGroup, Button } from 'react-bootstrap';
import TodoActions from '../TodoActions';


var TodoFilter = React.createClass({
  setFilter: function(e) {
    TodoActions.filter(e.target.value);
  },

  getFilter: function() {
    return this.props.model.get('filter');
  },

  render: function() {
    var filter = this.props.model.get('filter');
    return <ButtonGroup onClick={this.setFilter}>
      <Button value="all" active={filter === 'all'}>All</Button>
      <Button value="active" active={filter === 'active'}>Active</Button>
      <Button value="completed" active={filter === 'completed'}>Completed</Button>
    </ButtonGroup>
  }
});

module.exports = backboneConnection(TodoFilter)
