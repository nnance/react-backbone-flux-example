import React from 'react';
import SingleInputForm from '../../shared/components/SingleInputForm';


module.exports = React.createClass({
    onSubmit: function(value) {
        this.props.onAdd(value);
    },
    render: function() {
        return <SingleInputForm className='form-control' onSubmit={this.onSubmit} placeholder="Add a todo.." />
    }
});
