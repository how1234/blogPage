//IIFE
(function(window) {
    var jQuery = function(selector) {
        return new jQuery.fn.init(selector);
    };

    jQuery.fn = {
        init: function(selector) {
            var dom = Array.prototype.slice.call(document.querySelectorAll(selector)); // transfer document doms into an array
            var i,
                len = dom ? dom.length : 0;

            for (let i = 0; i < len; i++) {
                this[i] = dom[i];
            }
            this.length = len;
            this.selector = selector || " ";
        },
        css: function(cssKey, value) {
            for (let i = 0; i < this.length; i++) {
                this[i].style[cssKey] = value; //Cause cssKey is a string. So this[i].style.csskey doesn't work
                console.log(this[i].style);
            }
        }
    }; //Multiple functions

    jQuery.fn.init.prototype = jQuery.fn;

    //Easy to add extension
    jQuery.fn.getNodeName = function() {
        for (let i = 0; i < this.length; i++) {
            console.log(this[i].nodeName);
        }
    };
    //Only $ exposed to global variable
    //To unify the interface(jQuery.fn)
    window.$ = jQuery;
})(window);