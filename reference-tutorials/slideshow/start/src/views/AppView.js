/*** AppView ***/

// define this module in Require.JS
define(function(require, exports, module) {

    // Import additional modules to be used in this view 
    var View = require('famous/core/View');
    var Surface = require('famous/core/Surface');
    var Transform = require('famous/core/Transform');
    var StateModifier = require('famous/modifiers/StateModifier');

    var SlideshowView = require('views/SlideshowView');

    function AppView() {
        View.apply(this, arguments);
        var slideshowView = new SlideshowView();
        this.add(slideshowView);
    }

    // Establishes prototype chain for EmptyView class to inherit from View
    AppView.prototype = Object.create(View.prototype);
    AppView.prototype.constructor = AppView;

    // Default options for EmptyView class
    AppView.DEFAULT_OPTIONS = {};

    // Define your helper functions and prototype methods here

    module.exports = AppView;
});
