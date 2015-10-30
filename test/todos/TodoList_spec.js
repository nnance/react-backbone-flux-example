import { expect } from 'chai';
import React from 'react/addons';
import Backbone from 'backbone';
import TodoList from '../../src/todos/components/TodoList';
import sd from 'skin-deep';

describe('TodoList component', function() {
  let vdom, instance;

  beforeEach(function() {
    const props = {
      filter: 'all',
      todos: new Backbone.Collection([{
        text: 'active',
        complete: false
      }, {
        test: 'complete',
        complete: true
      }])
    };
    const tree = sd.shallowRender(React.createElement(TodoList, props));

    instance = tree.getMountedInstance();
    vdom = tree.getRenderOutput();
  });

  it('should render a list with one active item', function() {
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
    // expect(vdom.props.children).to.deep.equal(expectedChildren);
  });
});
