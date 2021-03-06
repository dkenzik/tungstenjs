/**
 * Base Collection - Provides generic reusable methods that child collections can inherit from
 */

'use strict';
var Backbone = require('backbone');
var backboneNested = require('./backbone_nested');

/**
 * BaseCollection
 *
 * @constructor
 * @class BaseCollection
 */
var BaseCollection = Backbone.Collection.extend({
  tungstenCollection: true
});

// Add nested collection support to models that implement backbone_nested.
// See backbone_nested_spec for examples.
backboneNested.setNestedCollection(BaseCollection);

module.exports = BaseCollection;