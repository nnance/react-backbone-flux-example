var Backbone = require('backbone');
var Store = require('../shared/libs/Store');
var conf = require('./settings');
var constants = require('./constants');

class RouterModel extends Store.Model {
    constructor() {
        super();
        this.defaults = {
            route: conf.ROUTE_DEFAULT,
            params: []
        };
    }

    initialize() {
        super.initialize();
        this._router = new AppRouter(this, conf.ROUTE_ROUTES);
    }

    handleDispatch(payload) {
        switch (payload.actionType) {
            case constants.ROUTE_NAVIGATE:
                this._router.navigate(payload.fragment, {
                    trigger: payload.trigger,
                    replace: payload.replace
                });
                break;
        }
    }
}


class AppRouter extends Backbone.Router {
    initialize(store, routes) {
        this.store = store;

        var route, key;
        for (key in routes) {
            if (routes.hasOwnProperty(key)) {
                route = routes[key];
                this.route(key, route, function(/* route, args... */) {
                    this.emitRouteAction.apply(this, arguments);
                }.bind(this, route));
            }
        }

        // catch all non-matching urls
        Backbone.history.handlers.push({
            route: /(.*)/,
            callback: function() {
                store.set({
                    route: constants.ROUTE_DEFAULT,
                    params: []
                });
            }
        });
    }

    emitRouteAction(/* route, args... */) {
        this.store.set({
            route: arguments[0],
            params: [].slice.call(arguments, 1)
        });
    }
}

module.exports = new RouterModel();
