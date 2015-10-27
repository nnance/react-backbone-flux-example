var constants = require('./constants');
var Store = require('../shared/libs/Store');
var FlickrConstants = require('../flickr/constants');

class NotifyStore extends Store.Model {
    constructor() {
        super();
        this.default = {
            text: null,
            visible: false,
            closable: true
        };
    }

    handleDispatch(payload) {
        switch(payload.actionType) {
            case FlickrConstants.FLICKR_FIND:
                this.set({
                    text: 'Loading...',
                    visible: true,
                    closable: false
                });
                break;

            case constants.NOTIFY_HIDE:
            case FlickrConstants.FLICKR_FIND_SUCCESS:
                this.set({ visible: false });
                break;

            case FlickrConstants.FLICKR_FIND_FAIL:
                this.alert('Loading failed... Please try again.');
                break;
        }
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
