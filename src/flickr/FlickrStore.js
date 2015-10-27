var Backbone = require('backbone');
var Store = require('../shared/libs/Store');
var constants = require('./constants');


var FlickrResult = Backbone.Model.extend({
    getPhoto: function() {
        return this.get('media').m;
    }
});


class FlickrCollection extends Store.Collection {
    constructor() {
        super();
        this.model = FlickrResult;
    }

    handleDispatch(payload) {
        switch (payload.actionType) {
            case constants.FLICKR_FIND_SUCCESS:
                this.reset();
                this.add(payload.items);
                break;
        }
    }
}

module.exports = new FlickrCollection();
