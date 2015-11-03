import constants from './constants';
import Backbone from 'backbone';
import request from 'superagent';
import jsonp from 'superagent-jsonp';

let flickrAPIAccess = {
  api_key: '616f7adb3037eaad399f7bdb9c36207c',
  api_secret: 'c1538d30934881e1'
}

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
      .get('https://api.flickr.com/services/feeds/photos_public.gne')
      // .query(flickrAPIAccess)
      .query({format: 'json'})
      .query({tags: 'query'})
      .use(jsonp)
      .end(function(err, res){
        if (!err) {
          console.dir(res.body);
        }
      });
  }
};
