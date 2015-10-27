import constants from './constants';
import Backbone from 'backbone';
import FlickrConstants from '../flickr/constants';

class NotifyStore extends Backbone.Model {
  constructor() {
    super();
    this.default = {
      text: null,
      visible: false,
      closable: true
    };
  }

  initialize() {
    super.initialize();

    this.listenTo(Backbone, FlickrConstants.FLICKR_FIND, this.showLoading);
    this.listenTo(Backbone, constants.NOTIFY_HIDE, this.hideNotification);
    this.listenTo(Backbone, FlickrConstants.FLICKR_FIND_SUCCESS, this.hideNotification);
    this.listenTo(Backbone, FlickrConstants.FLICKR_FIND_FAIL, this.showFailure);
  }

  showLoading() {
    this.set({
      text: 'Loading...',
      visible: true,
      closable: false
    });
  }

  hideNotification() {
    this.set({
      visible: false
    });
  }

  showFailure() {
    this.alert('Loading failed... Please try again.');
  }

  alert(text) {
    this.set({
      text: text,
      visible: true,
      closable: true
    });
  }
}

module.exports = new NotifyStore();
