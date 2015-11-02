import Backbone from 'backbone';
import constants from './constants';


var FlickrResult = Backbone.Model.extend({
  getPhoto: function() {
    return this.get('media').m;
  }
});


class FlickrCollection extends Backbone.Collection {
  get model() {
    return FlickrResult;
  }

  initialize() {
    super.initialize();

    this.listenTo(Backbone, constants.FLICKR_FIND_SUCCESS, this.addItems);
  }

  addItems(action) {
    this.reset();
    this.add(action.items);
  }
}

module.exports = new FlickrCollection();
