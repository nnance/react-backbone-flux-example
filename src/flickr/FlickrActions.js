import constants from './constants';
import Backbone from 'backbone';
import request from 'superagent';
import jsonp from 'superagent-jsonp';

// hack for handling jsonp response from flicker
window.jsonFlickrFeed = function(results) {
  if (results && results.items) {
    Backbone.trigger(constants.FLICKR_FIND_SUCCESS, {
      items: results.items
    });
  } else {
    Backbone.trigger(constants.FLICKR_FIND_FAIL);
  }
}

module.exports = {
  find: function(query) {
    Backbone.trigger(constants.FLICKR_FIND, {
      query: query
    });
    request
      .get('https://api.flickr.com/services/feeds/photos_public.gne?format=json&tags=' + query)
      .use(jsonp)
      .end();
  }
};
