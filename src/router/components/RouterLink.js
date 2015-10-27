import React from 'react';
import RouterActions from '../RouterActions';


module.exports = React.createClass({
    navigate: function(ev) {
        ev.preventDefault();
        RouterActions.navigate(ev.target.getAttribute('href'), true);
    },

    render: function() {
        return <a {...this.props} onClick={this.navigate} />
    }
});
