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
        return { TodoStore: TodoStore };
    },

    onAdd: function(text) {
        TodoActions.add(text);
    },

    render: function() {
        return <div>
            <TodoForm onAdd={this.onAdd} />
            <TodoFilter />
            <hr/>
            <TodoList TodoStore={this.state.TodoStore} />
        </div>
    }
});
