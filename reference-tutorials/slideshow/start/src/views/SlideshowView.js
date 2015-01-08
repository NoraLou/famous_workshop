

// define this module in Require.JS
define(function(require, exports, module) {

    var View = require('famous/core/View');
    var Surface = require('famous/core/Surface');
    var Transform = require('famous/core/Transform');
    var StateModifier = require('famous/modifiers/StateModifier');

    var SlideView = require('views/SlideView');

    
    function SlideshowView() {
        View.apply(this, arguments);

        var slideView = new SlideView();

        this.add(slideView);
    }

    // Establishes prototype chain for EmptyView class to inherit from View
    SlideshowView.prototype = Object.create(View.prototype);
    SlideshowView.prototype.constructor = SlideshowView;

    // Default options for EmptyView class
    SlideshowView.DEFAULT_OPTIONS = {};

    // Define your helper functions and prototype methods here

    module.exports = SlideshowView;
});
