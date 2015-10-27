import React from 'react';
import SingleInputForm from '../../shared/components/SingleInputForm';


module.exports = React.createClass({
    onSubmit: function(value) {
        this.props.onSearch(value);
    },

    render: function() {
        return <SingleInputForm
                    className='form-control'
                    value={this.props.value}
                    onSubmit={this.onSubmit}
                    placeholder="Search for a Flickr tag..." />
    }
});
