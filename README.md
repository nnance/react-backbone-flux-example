react-backbone-flux-example
=====================

React with the Flux architecture implemented entirely with Backbone. Combines React with the power of Backbone's events, collections and models.  It follows the flux architecture but in a way that doesn't include Flux as a dependency.

The goal of this project is to create a bootstrap for a React/Flux application based on React & Backbone without the need to learn a different framework beyond React & Backbone.

## Features
- Backbone's collections/models/events as data store, with ES6 classes.
- Flux dispatcher using Backbone's global event aggregator.
- Usage of Backbone's router.
- All JQuery dependencies removed
- Flux architecture (actions/dispatcher/stores)
- React views.
- React Mixin for easy-listing to the stores.
- Flickr async example with loading notifications.
- Dumb stores, complex actions. The actions should contain the business logic (XHR, validation(?)),
the stores just for data.
- Example with webpack code-splitting based on the router.
- Small minified size which includes React (~35Kb), Backbone (~7Kb), Underscore.js (~5Kb).
- App module directory structure, inspired by Django.

### Notes
Inspired by this article; http://www.toptal.com/front-end/simple-data-flow-in-react-applications-using-flux-and-backbone

Based on the *new* [Webpack](https://github.com/gaearon/react-transform-boilerplate) boilerplate to bundall all JavaScript and CSS with:

* hot reloading React components;
* error handling inside component `render()` function;
* error handling for syntax errors (thanks, **[@glenjamin](https://github.com/glenjamin)**!)

Built with **[babel-plugin-react-transform](https://github.com/gaearon/babel-plugin-react-transform)** and a few custom transforms.  
**[Does not](https://medium.com/@dan_abramov/the-death-of-react-hot-loader-765fa791d7c4)** use React Hot Loader.

```
git clone https://github.com/nnance/react-backbone-flux-example.git
cd react-backbone-flux-example
npm install
npm start
open http://localhost:3000
```

Then go ahead and edit files inside `src` (any file except `index.js`).

## What’s Inside

For JavaScript:

* [babel](http://babeljs.io/) - Turns ES6+ code into ES5-friendly code, supports React, JSX, and Flow as well
* [eslint](http://eslint.org/) - Add lint rules to enforce best practices, supports ES6, React, and JSX as well
* [markdown](https://github.com/peerigon/markdown-loader) - Loads markdown from a file that can then be easily rendered as HTML

For CSS:

* [postcss]() - Transform CSS with autoprefixing, minification, RTL, etc.
* [sass]() - Extends CSS with more traditional programming mechanisms (mixins, functions, etc.)
* [autoprefixer]() - Adds vendor prefixes to CSS
