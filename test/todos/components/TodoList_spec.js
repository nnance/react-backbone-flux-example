import { expect } from 'chai';
import React from 'react/addons';
import Backbone from 'backbone';
import TodoList from '../../../src/todos/components/TodoList';
import sd from 'skin-deep';

describe('TodoList component', function() {
  let tree, vdom, instance;
  let props = {
    filter: 'all',
    todos: new Backbone.Collection([{
      text: 'active',
      complete: false
    }, {
      test: 'complete',
      complete: true
    }])
  };

  describe('When displaying all todos', function(){
    beforeEach(function() {
      tree = sd.shallowRender(React.createElement(TodoList, props));
      instance = tree.getMountedInstance();
      vdom = tree.getRenderOutput();
    });

    it('should render a list with 2 items', function() {
      const expectedChildren = [
        React.DOM.h2({
          className: 'Post-header',
          onClick: instance.doSomethingOnClick
        }, 'Title'),
        React.DOM.p({
          className: 'Post-content'
        }, 'Content')
      ];

      expect(vdom.type).to.equal('ul');
      expect(vdom.props.className).to.contain('list-unstyled');
      expect(vdom.props.children.length).to.equal(2);
      // expect(vdom.props.children).to.deep.equal(expectedChildren);
    });
  });

  describe('When filtering active todos', function(){
    beforeEach(function() {
      props.filter = 'active';
      tree.reRender(React.createElement(TodoList, props));
      vdom = tree.getRenderOutput();
    });

    it('should render a list with 1 item', function(){
      expect(vdom.props.children.length).to.equal(1);
    });
  });

  describe('When filtering complete todos', function(){
    beforeEach(function() {
      instance.setState({filter: 'completed'});
      tree.reRender(React.createElement(TodoList, props));
      vdom = tree.getRenderOutput();
    });

    it('should render a list with 1 item', function(){
      expect(vdom.props.children.length).to.equal(1);
    });
  });
});
