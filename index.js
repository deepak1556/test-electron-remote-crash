var path = require('path')

global.jasmineRequire = require("jasmine-core/lib/jasmine-core/jasmine")
require("jasmine-core/lib/jasmine-core/jasmine-html")
require("jasmine-core/lib/jasmine-core/boot")

var dirname = path.dirname(window.location.pathname)

require(path.join(dirname, 'spec/example-spec.js'))
