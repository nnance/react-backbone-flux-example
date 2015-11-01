import { expect } from 'chai';
import React from 'react';
import TestUtils from 'react-addons-test-utils';
import Backbone from 'backbone';
import TodoList from '../../../src/todos/components/TodoList';

describe('TodoList component', function() {
  let instance;
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
      instance = TestUtils.renderIntoDocument(<TodoList
        todos={props.todos}
        filter={props.filter}/>
      );
    });

    it('should render a list with 2 items', function() {
      const el = TestUtils.scryRenderedDOMComponentsWithTag(instance, 'ul');
      const entries = TestUtils.scryRenderedDOMComponentsWithTag(instance, 'li');

      expect(el.length).to.be.equal(1);
      expect(entries.length).to.equal(2);
    });

    describe('When filtering active todos', function(){
      beforeEach(function() {
        instance.setProps({filter: 'active'});
      });

      it('should render a list with 1 item', function(){
        const entries = TestUtils.scryRenderedDOMComponentsWithTag(instance, 'li');
        expect(entries.length).to.equal(1);
      });
    });

    describe('When filtering complete todos', function(){
      beforeEach(function() {
        instance.setProps({filter: 'completed'});
      });

      it('should render a list with 1 item', function(){
        const entries = TestUtils.scryRenderedDOMComponentsWithTag(instance, 'li');
        expect(entries.length).to.equal(1);
      });
    });
  });
});
