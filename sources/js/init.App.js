/**
 * Version  : 1.0.0
 * Author   : Mizin N.E.
 *
 * Module of build for page application.
 * Can to be used for all clients scripts.
 *
 * * The required library -- jQuery.
 */
;(function ($, window, addEventListener) {
    'use strict';

    const page__App = (function() {
        return {
            call : function(exports) {
                if (!$) {
                    throw Error(
                        'Error jQuery libs!'
                    );
                }
                this.initialize(exports);
            },
            initialize : function(exports) {
                var i = 0, k;
                for (k in exports.Events) {
                        new exports.Events[k];
                    i++;
                }
            }
        }
    }());
    (addEventListener || Error)('DOMContentLoaded', function () {
        window.page__App = page__App.call(window.page__App);
    });
})(window.jQuery, window, addEventListener);