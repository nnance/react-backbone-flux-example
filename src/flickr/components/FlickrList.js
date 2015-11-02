import React from 'react';
import backboneConnection from '../../shared/backboneConnection';


var FlickrList = React.createClass({
    render: function() {
        if(this.props.collection.size() === 0) {
            return <p>No results.</p>
        }

        return <ul className='list-inline'>
            {this.props.collection.map((result)=>
                <li key={result.cid}>
                    <img className="img-thumbnail" src={result.getPhoto()} />
                </li>
            )}
        </ul>
    }
});

module.exports = backboneConnection(FlickrList);
