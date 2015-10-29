import React from 'react';
import TodoItem from './TodoItem';

function shouldBeFiltered(filter, todo) {
  if ((filter === 'active') && todo.get('complete')) {
    return true;
  } else if ((filter === 'completed') && !todo.get('complete')) {
    return true;
  } else {
    return false;
  }
}

module.exports = React.createClass({

  render: function() {
    return <ul className='list-unstyled'>
      {this.props.todos.map(function (todo) {
        if (!shouldBeFiltered(this.props.filter, todo)) {
          return <li key={todo.cid}><TodoItem todo={todo} /></li>
        }
      }.bind(this))}
    </ul>
  }
});
