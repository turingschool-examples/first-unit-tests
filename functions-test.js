// functions-test.js

var assert = require('chai').assert;
var addTwoNumbers = require('./functions.js').addTwoNumbers;
var sayHello = require('./functions.js').sayHello;
var buildCar = require('./functions.js').buildCar;

describe('functions', function () {
  describe('addTwoNumbers', function () {
    it.skip('should be able to add zero to zero', function () {
      // setup for test (if necessary)

      // execute function
      var sum = addTwoNumbers(0, 0)

      // assert what the result SHOULD be
      assert.equal(sum, 0)
    })

    it.skip('should be able to add 1 to 0', function () {
      assert.equal(addTwoNumbers(1, 0), 1)
    })

    it.skip('should be able to add 1 to 1', function () {
      assert.equal(addTwoNumbers(1, 1), 2)
    })
  })

  describe('sayHello', function () {
    it.skip('should be able to say hello to Leta', function () {
      // setup for test (if necessary)

      // execute function
      var greeting = sayHello('Leta')

      // assert what the result SHOULD be
      assert.equal(greeting, 'Hi there Leta!')
    })

    it.skip('should be able to say hello to Casey', function () {
      assert.equal(sayHello('Casey'), 'Hi there Casey!')
    })

    it.skip('should not be able to say hello to Will', function () {
      var differentMessage = sayHello('Will')

      assert.equal(differentMessage, 'No more testing Will!')
    })
  })

  describe('buildCar', function () {
    it.skip('should return a car with a color', function () {
      // setup for test (if necessary)
      var color = 'red'

      // execute function
      var carDetails = buildCar(color)

      // assert what the result SHOULD be
      assert.equal(carDetails.color, color)
    })

    it.skip('should return a car with a type', function () {
      var carInfo = buildCar('red', 'truck')

      assert.equal(carInfo.type, type)
    })

    it.skip('should return an empty object if there are no details passed', function () {
      assert.deepEqual(buildCar(), {})
    })
  })
})
