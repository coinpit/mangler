var assert    = require('assert')

module.exports = (function () {
  var util = {}
  var escapes = { '&': '&amp;', '>': '&gt;', '<': '&lt;', '"': '&quot;', "'": '&#x27;', '/': '&#x2F;'}

  util.mapify = function (list, key) {
    assert(Array.isArray(list), ' list ' + list + ' must be an array')
    assert(key, 'key must be present')
    var map = {}
    for (var i = 0; i < list.length; i++) {
      assert(list[i][key], list[i] + ' does not contain ' + key)
      map[list[i][key]] = list[i]
    }
    return map;
  }

  util.arrayMapify = function(list, key) {
    assert(Array.isArray(list), 'list ' + list + ' must be an array')
    assert(key, 'key must be present')
    var map = {}
    for (var i = 0; i < list.length; i++) {
      assert(list[i][key], list[i] + ' does not contain ' + key)
      map[list[i][key]] = map[list[i][key]] || []
      map[list[i][key]].push(list[i])
    }
    return map;
  }


  util.fixed = function (number) {
    var multiplier = 1e8
    return Math.round(number * multiplier) / multiplier;
  }

  util.delProps = function (obj, properties) {
    var props = Array.isArray(properties) && properties || [properties]
    var objs  = Array.isArray(obj) && obj || [obj]
    for (var i = 0; i < objs.length; i++) {
      for (var j = 0; j < props.length; j++) {
        delete objs[i][props[j]]
      }
    }
    return Array.isArray(obj) && objs || objs[0]
  }

  util.unsanitizeString = function (string) {
    var badChars = Object.keys(escapes)
    for(var i = 0; i < badChars.length; i++) {
      var re = new RegExp(escapes[badChars[i]], 'g')
      string = string.replace(re, badChars[i])
    }
    return string
  }

  util.sanitizeString = function (string) {
    var badChars = Object.keys(escapes)
    for(var i = 0; i < badChars.length; i++) {
      var re = new RegExp(badChars[i], 'g')
      string = string.replace(re, escapes[badChars[i]])
    }
    return string
  }


  return util
})()
