import React from 'react';
import backboneConnection from '../../shared/backboneConnection';
import NotifyStore from '../NotifyStore';
import NotifyActions from '../NotifyActions';


var Notify = React.createClass({
    getInitialState: function() {
        return NotifyStore;
    },

    onClose: function(ev) {
        ev.preventDefault();
        NotifyActions.hide();
    },

    render: function() {
        if(this.state.get('visible')) {
            var closeButton;
            if(this.state.get('closable')) {
                closeButton = <a href="#" onClick={this.onClose}>[Close]</a>
            }

            return <div className="alert alert-info">
                {this.state.get('text')}
                {closeButton}
            </div>;
        }
        return null;
    }
});

module.exports = backboneConnection(Notify, [NotifyStore])
