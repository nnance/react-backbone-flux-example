var Backbone = require('backbone');
var constants = require('./constants');


var FlickrResult = Backbone.Model.extend({
    getPhoto: function() {
        return this.get('media').m;
    }
});


class FlickrCollection extends Backbone.Collection {
    constructor() {
        super();
        this.model = FlickrResult;
        this.listenTo(Backbone, constants.FLICKR_FIND_SUCCESS, this.addItems);
    }

    addItems(action) {
      this.reset();
      this.add(action.items);
    }
}

module.exports = new FlickrCollection();
