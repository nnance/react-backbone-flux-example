var constants = require('./constants');
var dispatch = require('../shared/helpers/dispatch');
var request = require('superagent');
let jsonp = require('superagent-jsonp');

// hack for handling jsonp response from flicker
window.jsonFlickrFeed = function(results){
  if(results && results.items) {
      dispatch(constants.FLICKR_FIND_SUCCESS, { items: results.items });
  } else {
      dispatch(constants.FLICKR_FIND_FAIL);
  }
}

module.exports = {
    find: function(query) {
        dispatch(constants.FLICKR_FIND, { query: query });
        request
          .get('https://api.flickr.com/services/feeds/photos_public.gne?format=json&tags=' + query)
          .use(jsonp)
          .end();
    }
};
