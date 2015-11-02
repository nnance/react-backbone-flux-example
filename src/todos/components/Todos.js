import React from 'react';
import TodoActions from '../TodoActions';
import FilterStore from '../FilterStore';
import TodoStore from '../TodoStore';

import TodoForm from './TodoForm';
import TodoList from './TodoList';
import TodoFilter from './TodoFilter';

module.exports = React.createClass({
    onAdd: function(text) {
      TodoActions.add(text);
    },

    render: function() {
      return <div>
        <TodoForm onAdd={this.onAdd} />
        <TodoFilter model={FilterStore}/>
        <hr/>
        <TodoList
          collection={TodoStore}
          model={FilterStore}
         />
      </div>
    }
});
