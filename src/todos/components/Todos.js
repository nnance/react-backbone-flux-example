import React from 'react';
import storeMixin from '../../shared/helpers/storeMixin';
import TodoActions from '../TodoActions';
import TodoStore from '../TodoStore';

import TodoForm from './TodoForm';
import TodoList from './TodoList';
import TodoFilter from './TodoFilter';

module.exports = React.createClass({
    mixins: [storeMixin(TodoStore)],

    getInitialState: function() {
      return TodoStore.attributes;
    },

    // componentDidMount: function() {
    //   TodoStore.on('add remove change reset', function() {
    //     this.replaceState(TodoStore.attributes);
    //   }, this);
    // },
    //
    // componentWillUnmount: function() {
    //   TodoStore.off(null, null, this);
    // },
    //
    onAdd: function(text) {
        TodoActions.add(text);
    },

    render: function() {
        return <div>
            <TodoForm onAdd={this.onAdd} />
            <TodoFilter filter={this.state.filter}/>
            <hr/>
            <TodoList
              todos={this.state.todos}
              filter={this.state.filter}
               />
        </div>
    }
});
