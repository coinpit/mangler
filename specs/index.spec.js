var expect  = require('expect.js')
var mangler = require("../index")
var fixtures = require("fixtures.js")(__filename)

describe("mangler testing", function(){

  it("mapify test", function(){
    var input = [
      {id: 1, val:20},
      {id: 1, val:30},
      {id: 2, val:40}
    ]
    var output = mangler.mapify(input, "id")
    expect(output).to.be.eql({1: {id: 1, val:30}, 2: {id: 2, val:40}})
  })

  it("arrayMapify test", function(){
    var input = [
      {id: 1, val:20},
      {id: 1, val:30},
      {id: 2, val:40}
    ]
    var output = mangler.arrayMapify(input, "id")
    expect(output).to.be.eql({1: [{id: 1, val:20},{id: 1, val:30}], 2: [{id: 2, val:40}]})
  })
})

describe('Test mangler', function() {
  it('mapify', function() {
    expect(mangler.mapify(fixtures.array, "id")).to.eql(fixtures.map)
  })
})

describe('fixed tests', function(){
  fixtures.fixed.forEach(function(test){
    it(test.input1 + test.input2, function(){
      expect(mangler.fixed(test.input1 + test.input2)).to.be.equal(test.result)
    })
  })
})

describe('delprops', function() {
  fixtures.delprops.forEach(function(test) {
    it(test.props, function() {
      expect(mangler.delProps(test.input, test.props)).to.eql(test.result)
    })
  })
})

describe('sanitize string', function(){
  fixtures.sanitize.forEach(function(test) {
    it(test.input, function() {
      expect(mangler.sanitizeString(test.input)).to.eql(test.result)
    })
  })
})

describe('unsanitize string', function(){
  fixtures.unsanitize.forEach(function(test) {
    it(test.input, function() {
      expect(mangler.unsanitizeString(test.input)).to.eql(test.result)
    })
  })
})
