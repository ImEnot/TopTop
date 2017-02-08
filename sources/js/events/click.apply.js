;(function(window, exports) {

    function clickApply() {
        /**
         * Initialize settings.
         * @type {{dataObject: string}}
         */
        this.Settings = {
            dataObject : 'event-object'
        };

        /**
         * Initialize constructor.
         */
        this.initialize();
    }
    clickApply.prototype.initialize = function() {
        var _this = this;

        /**
         * Getting object for event.
         * @type {*|jQuery|HTMLElement}
         */
        var object = $('*[data-' + this.Settings.dataObject + ']');

        /**
         * Initialize event for all elements.
         */
        if (object) {
            for (var i = 0; i < object.length; i++) {
                _this.applyEvent(object[i]);
            }
        }
    };
    clickApply.prototype.callRouting = function(object) {
        var _routing = object.dataset.eventObject || '';

            if (_routing !== '') {
                _routing = _routing.split(':');
            }

        return _routing;
    };
    clickApply.prototype.applyEvent = function() {
        var _this = this;

        if (!arguments) {
            throw Error(
                'Error of calling arguments -- method applyEvent!'
            );
        }
        var EventType = {
            view : function(object) {
                var viewObject = document.getElementsByClassName(object)[0];
                    $(viewObject).fadeIn();
            },
            hide : function(object) {
                var hideObject = document.getElementsByClassName(object)[0];
                    $(hideObject).fadeOut();
            }
        };
        arguments[0].addEventListener('click', function() {
            EventType[_this.callRouting(this)[0]](_this.callRouting(this)[1]);
        });
    };


    if (!exports.Events) {
        exports.Events = new Object();
    }
    exports.Events['clickApply'] = clickApply;
}(window, window.page__App = window.page__App || {}));