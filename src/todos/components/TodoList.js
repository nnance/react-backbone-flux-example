import React from 'react';
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

module.exports = React.createClass({
  render: function() {
    return <ul className='list-unstyled'>
      {this.props.todos
        .filter(shouldShow.bind(this, this.props.filter))
        .map((todo) => <li key={todo.cid}><TodoItem todo={todo} /></li>)
      }
    </ul>
  }
});
