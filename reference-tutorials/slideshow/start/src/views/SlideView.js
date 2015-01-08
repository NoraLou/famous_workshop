

define(function(require, exports, module) {

    // Import additional modules to be used in this view 
    var View = require('famous/core/View');
    var Surface = require('famous/core/Surface');
    var Transform = require('famous/core/Transform');
    var StateModifier = require('famous/modifiers/StateModifier');

    
    function SlideView() {
        View.apply(this, arguments);

        this.rootModifier = new StateModifier({
            size: [400, 450]
        });

        this.mainNode = this.add(this.rootModifier);

        // var background = new Surface({
        //        // undefined size will inherit size from parent modifier
        //     properties: {
        //         backgroundColor: '#FFFFF5',
        //         boxShadow: '0 10px 20px -5px rgba(0, 0, 0, 0.5)'
        //     }
        // });

        // this.mainNode.add(background);

        _createBackground.call(this);
    }

    // Establishes prototype chain for EmptyView class to inherit from View
    SlideView.prototype = Object.create(View.prototype);
    SlideView.prototype.constructor = SlideView;

    // Default options for EmptyView class
    SlideView.DEFAULT_OPTIONS = {};

    function_createBackground() {
        var background = new Surface({
            properties: {
                backgroundColor: '#FFFFF5',
                boxShadow: boxShadow: '0 10px 20px -5px rgba(0, 0, 0, 0.5)'
            }
        });
        
        this.mainNode.add(background);
    }

    // Define your helper functions and prototype methods here

    module.exports = SlideView;
});
