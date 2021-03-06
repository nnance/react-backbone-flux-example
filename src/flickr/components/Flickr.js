import React from 'react';

import RouterActions from '../../router/RouterActions';
import FlickrActions from '../FlickrActions';
import FlickrStore from '../FlickrStore';

import FlickrForm from './FlickrForm';
import FlickrList from './FlickrList';


module.exports = React.createClass({
    componentDidMount: function() {
        if(this.props.routeParams && this.props.routeParams[0]) {
            FlickrActions.find(this.props.routeParams[0]);
        }
    },

    componentWillReceiveProps: function(newProps) {
        if(newProps.routeParams && newProps.routeParams[0]) {
            FlickrActions.find(newProps.routeParams[0]);
        }
    },

    onSearch: function(query) {
        RouterActions.navigate("flickr/"+ encodeURIComponent(query));
    },

    render: function() {
        return <div>
            <FlickrForm onSearch={this.onSearch} value={this.props.routeParams[0]} />
            <FlickrList collection={FlickrStore} />
        </div>
    }
});
