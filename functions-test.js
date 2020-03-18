var assert = require('chai').assert;
var addTwoNumbers = require('./functions.js').addTwoNumbers;
var sayHello = require('./functions.js').sayHello;

describe('functions', function() {
  describe('addTwoNumbers', function() {
    it('should be able to add zero to zero', function() {
      // setup for test (if necessary)
      
      // execute function
      var result = addTwoNumbers(0, 0)

      // assert what the result SHOULD be
      assert.equal(result, 0)
    })

    it.skip('should be able to add 1 to 0', function() {
      // setup for test (if necessary)

      // execute function
      var result = addTwoNumbers(1, 0)

      // assert what the result SHOULD be
      assert.equal(result, 1)
    })

    it.skip('should be able to add 1 to 1', function() {
      // setup for test (if necessary)

      // execute function
      var result = addTwoNumbers(1, 1)

      // assert what the result SHOULD be
      assert.equal(result, 2)
    })
  })

  describe('sayHello', function() {
    it.skip('should be able to say hello to Leta', function() {
      // setup for test (if necessary)
      
      // execute function
      var result = sayHello('Leta')

      // assert what the result SHOULD be
      assert.equal(result, 'Hi there Leta!')
    })

    it.skip('should be able to say hello to Casey', function() {
      // setup for test (if necessary)
      
      // execute function
      var result = sayHello('Casey')

      // assert what the result SHOULD be
      assert.equal(result, 'Hi there Casey!')
    })

    it.skip('should not be able to say hello to Will', function() {
      // setup for test (if necessary)
      
      // execute function
      var result = sayHello('Will')

      // assert what the result SHOULD be
      assert.equal(result, 'No more testing Will!')
    })
  })
})
