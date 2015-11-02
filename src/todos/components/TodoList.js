import React from 'react';
import backboneConnection from '../../shared/backboneConnection';
import TodoItem from './TodoItem';

function shouldShow(filter, todo) {
  if ((filter === 'active') && todo.get('complete')) {
    return false;
  } else if ((filter === 'completed') && !todo.get('complete')) {
    return false;
  } else {
    return true;
  }
}

var TodoList = React.createClass({
  render: function() {
    var filter = this.props.model.get('filter');
    return <ul className='list-unstyled'>
      {this.props.collection
        .filter(shouldShow.bind(this, filter))
        .map((todo) => <li key={todo.cid}><TodoItem todo={todo} /></li>)
      }
    </ul>
  }
});

module.exports = backboneConnection(TodoList);
