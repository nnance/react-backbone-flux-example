var constants = require('./constants');
var Backbone = require('backbone');
var request = require('superagent');
let jsonp = require('superagent-jsonp');

// hack for handling jsonp response from flicker
window.jsonFlickrFeed = function(results){
  if(results && results.items) {
      Backbone.trigger(constants.FLICKR_FIND_SUCCESS, { items: results.items });
  } else {
      Backbone.trigger(constants.FLICKR_FIND_FAIL);
  }
}

module.exports = {
    find: function(query) {
        Backbone.trigger(constants.FLICKR_FIND, { query: query });
        request
          .get('https://api.flickr.com/services/feeds/photos_public.gne?format=json&tags=' + query)
          .use(jsonp)
          .end();
    }
};
