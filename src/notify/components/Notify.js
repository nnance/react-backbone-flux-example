import React from 'react';
import storeMixin from '../../shared/helpers/storeMixin';
import NotifyStore from '../NotifyStore';
import NotifyActions from '../NotifyActions';


module.exports = React.createClass({
    mixins: [storeMixin(NotifyStore)],

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
