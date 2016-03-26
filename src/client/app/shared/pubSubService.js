System.register(['angular2/core'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var core_1;
    var PubSubService;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            PubSubService = (function () {
                function PubSubService() {
                }
                PubSubService.emit = function (eventData) {
                    this.eventEmitter.emit({ event: eventData.eventName, data: eventData.data });
                };
                PubSubService.on = function (eventName, callback) {
                    var found;
                    this.eventsList.forEach(function (eventEntry) {
                        if (eventEntry.eventName === eventName) {
                            eventEntry.callbacks.push(callback);
                            found = true;
                        }
                    });
                    if (!found) {
                        this.eventsList.push({ eventName: eventName, callbacks: [callback] });
                    }
                };
                PubSubService.initialize = function () {
                    this.eventEmitter.subscribe(function (eventData) {
                    });
                };
                PubSubService.eventEmitter = new core_1.EventEmitter();
                PubSubService.eventsList = [];
                return PubSubService;
            }());
            exports_1("PubSubService", PubSubService);
            PubSubService.initialize();
        }
    }
});
//# sourceMappingURL=pubSubService.js.map