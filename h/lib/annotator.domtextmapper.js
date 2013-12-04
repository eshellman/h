// Generated by CoffeeScript 1.6.3
/*
** Annotator 1.2.6-dev-56d2703
** https://github.com/okfn/annotator/
**
** Copyright 2012 Aron Carroll, Rufus Pollock, and Nick Stenning.
** Dual licensed under the MIT and GPLv3 licenses.
** https://github.com/okfn/annotator/blob/master/LICENSE
**
** Built at: 2013-12-04 13:03:12Z
*/



/*
//
*/

// Generated by CoffeeScript 1.6.3
(function() {
  var _ref,
    __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  Annotator.Plugin.DomTextMapper = (function(_super) {
    __extends(DomTextMapper, _super);

    function DomTextMapper() {
      _ref = DomTextMapper.__super__.constructor.apply(this, arguments);
      return _ref;
    }

    DomTextMapper.prototype.pluginInit = function() {
      var _this = this;
      return this.annotator.documentAccessStrategies.unshift({
        name: "DOM-Text-Mapper",
        applicable: function() {
          return true;
        },
        get: function() {
          var defaultOptions, mapper, options;
          defaultOptions = {
            rootNode: _this.annotator.wrapper[0],
            getIgnoredParts: function() {
              return $.makeArray($(["div.annotator-notice", "div.annotator-outer", "div.annotator-editor", "div.annotator-viewer", "div.annotator-adder"].join(", ")));
            },
            cacheIgnoredParts: true
          };
          options = $.extend({}, defaultOptions, _this.options.options);
          mapper = new window.DomTextMapper(options);
          options.rootNode.addEventListener("corpusChange", _this.annotator._reanchorAnnotations);
          mapper.scan("we are initializing d-t-m");
          return mapper;
        }
      });
    };

    return DomTextMapper;

  })(Annotator.Plugin);

}).call(this);

//
//@ sourceMappingURL=annotator.domtextmapper.map