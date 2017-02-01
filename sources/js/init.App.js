/**
 * Version  : 1.0.0
 * Author   : Mizin N.E.
 *
 * Module of build for page application.
 * Can to be used for all clients scripts.
 *
 * * The required library -- jQuery.
 */
;(function ($, window) {
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
                console.log(exports);
            }
        }
    }());
    (addEventListener || Error)('DOMContentLoaded', function () {
        window.page__App = page__App.call(window);
    });
})(jQuery, window);